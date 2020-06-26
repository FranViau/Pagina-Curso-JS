import { Injectable } from "@angular/core";
import { Global } from "./global";
import { XhrFactory } from '@angular/common/http';
@Injectable()
export class UploadService{
  public url :string;

  constructor(){
    this.url = Global.url;
  }
  makeFileRequest(url : string, params: Array<string>, files: Array<File>, name : string){ // NO TENGO NI IDEA QUE HAGO
    return new Promise(function(resolve,reject){
      var formData:any = new FormData();
      var xhr = new XMLHttpRequest();// XHR es sinonimo de Ajax
      for(let i = 0; i < files.length; i++){
        formData.append(name,files[i],files[i].name);
      }
      xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
          if(xhr.status == 200){
            resolve(JSON.parse(xhr.response));
          }
          else{
            reject(xhr.response);
          }
        }
      }
      xhr.open("POST",url,true);
      xhr.send(formData);
    });
  } // Esto permite subir nuevos archivos al back-end
}
