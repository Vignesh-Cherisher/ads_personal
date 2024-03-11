import { HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable} from "rxjs";

@Injectable({
    providedIn:'root'
})

export class FileService{
    private fileData: { datasetId: string, pluginName: string, fileName: string }[] = [];
  
    constructor(private http:HttpClient){}

    addFileData(data: { datasetId: string, pluginName: string, fileName: string }) {
      this.fileData.push(data);
      console.log(this.fileData)
    }

    getFileData(): { datasetId: string, pluginName: string, fileName: string }[] {
        return this.fileData;
    }

    uploadFile(pluginName:string,formData:FormData):Observable<{datasetId:string,pluginName: string,fileName: string}>{
        return this.http.post<{datasetId:string,pluginName: string,fileName: string}>(`https://192.168.0.217:7149/api/data/${pluginName}/uploadFile`,formData)
    }
}