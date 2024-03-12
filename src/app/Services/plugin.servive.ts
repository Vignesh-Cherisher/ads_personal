import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable} from "rxjs";

@Injectable({
    providedIn:'root'
})

export class PluginService{
    constructor(private http:HttpClient){}

    getAvailablePlugins():Observable<{plugIns:Object,description:Object}>{
      return this.http.get<{plugIns:Object,description:Object}>('https://192.168.0.217:7149/api/plugin')
    }

    uploadPlugin(formData:FormData):Observable<Object>{
      return this.http.post('https://192.168.0.217:7149/api/plugin/upload', formData)
    }
}