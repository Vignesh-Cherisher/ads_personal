import { HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable} from "rxjs";

@Injectable({
    providedIn:'root'
})

export class FileService{
    private fileNames: { datasetId: string, pluginName: string, fileName: string }[] = [];

    constructor(private http:HttpClient){}

    addFileNames(data: { datasetId: string, pluginName: string, fileName: string }) {
      localStorage.removeItem('fileNames');
      localStorage.setItem('fileNames', JSON.stringify(data))
      // this.fileNames.push(data);
      // console.log(this.fileNames)
    }

    getFileNames(): { datasetId: string, pluginName: string, fileName: string }[] {
      this.fileNames = []
      this.fileNames.push(JSON.parse(localStorage.getItem('fileNames')));
      console.log(this.fileNames);
      return this.fileNames;
    }

    getFileData(pluginName:string, datasetId: string): Observable<{ fileData: any }> {
      return this.http.get<{ fileData: any }>(`https://192.168.0.217:7149/api/Data/${pluginName}/${datasetId}`)
    }

    uploadFile(pluginName:string,formData:FormData):Observable<{datasetId:string,pluginName: string,fileName: string}>{
      return this.http.post<{datasetId:string,pluginName: string,fileName: string}>(`https://192.168.0.217:7149/api/data/${pluginName}/uploadFile`,formData)
    }
}