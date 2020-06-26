import { Component, OnInit } from '@angular/core';
import { Project } from "../../models/project";
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { Global } from "../../services/global";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers:[ProjectService, UploadService]
})
export class EditComponent implements OnInit {

  public title :string;
  public project: Project;
  public status : string;
  public filesToUpload : Array<File>;
  public projectSaved : Project;
  public url : string;



  constructor(
    private _projectService : ProjectService,
    private _uploadService : UploadService,
    private _router : Router,
    private _route : ActivatedRoute
  ) {
    this.title = "Editar Proyecto";
    this.url = Global.url;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params =>{
      let id = params.id;
      this.getProject(id);
    });
  }
  getProject(id){
    this._projectService.getProject(id).subscribe(
      response =>{
        this.project = response.project;
      },
      err =>{
        console.log(err);
      }
    );
  }
  onSubmit(form){
    this._projectService.updateProject(this.project).subscribe(
      response =>{

        if(response.project) {

          if(this.filesToUpload){
            this._uploadService.makeFileRequest(Global.url + "upload-image/" + response.project._id,[], this.filesToUpload, "image").then((result:any) =>{
              this.projectSaved = result.project;
              this.status = "success";
            });
          }
          else{
            this.projectSaved = response.project;
            this.status = "success";
          }

        }
        else this.status = "failed";
      },
      err =>{
        console.log(err);
      }
    );
  }
  fileChangeEvent(fileInput){
    this.filesToUpload = <Array<File>> fileInput.target.files;
  }

}
