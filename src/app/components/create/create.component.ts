import { Component, OnInit } from '@angular/core';
import { Project } from "../../models/project";
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { Global } from "../../services/global";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers:[ProjectService, UploadService]
})
export class CreateComponent implements OnInit {
  public title :string;
  public project: Project;
  public status : string;
  public filesToUpload : Array<File>;
  public projectSaved : Project;
  public url : string;



  constructor(
    private _projectService : ProjectService,
    private _uploadService : UploadService
  ) {
    this.project = new Project("", "", "", "",2020 , "", "");
    this.title = "Crear Proyecto";
  }

  ngOnInit(): void {
  }

  onSubmit(form){ // Guardar los datos
    this._projectService.saveProject(this.project).subscribe(
      response =>{
        if(response.project) {
          if(this.filesToUpload){
            this._uploadService.makeFileRequest(Global.url + "upload-image/" + response.project._id,[], this.filesToUpload, "image").then((result:any) =>{
              this.projectSaved = result.project;
              this.status = "success";
              console.log("Ebtra");
            });
          }
          else{
            this.projectSaved = response.project;
            this.status = "success";
          }
        }
        else this.status = "failed";

        form.reset();
      },
      err =>{
        console.log(err);
      }
    ) // El metodo subscribe pernite agarrar lo que devuelva la API Rest;
  }

  fileChangeEvent(fileInput){
    this.filesToUpload = <Array<File>> fileInput.target.files;
  }

}
