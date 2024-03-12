import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileService } from '../../Services/file.service';
import { PluginService } from '../../Services/plugin.servive';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrl: './upload-file.component.css'
})
export class UploadFileComponent {
  fileInputForm: FormGroup;
  pluginName : string;
  pluginList:string[]
  fileToUpload: File | null = null;
  successMessage: string = ''
  errorMessage: string = ''
  loading: boolean = false;
  constructor(private formBuilder: FormBuilder,private pluginService:PluginService,
    private fileService:FileService) { }

  ngOnInit(): void {
    this.fileInputForm = this.formBuilder.group({
      selectedPlugin: ['', Validators.required],
      file: [null, Validators.required]
    });
    this.pluginService.getAvailablePlugins().subscribe(
      (plugins)=>{
        this.pluginList = Object.keys(plugins.plugIns)
    })
  }

  onOptionSelect(): void {
    const selectedPlugin = this.fileInputForm.get('selectedPlugin').value;
    if (selectedPlugin) {
      this.fileInputForm.get('file').setValidators([Validators.required]);
    } else {
      this.fileInputForm.get('file').clearValidators();
    }
    this.fileInputForm.get('file').updateValueAndValidity();
  }

  onFileSelected(event: any) {
    this.fileToUpload = event.target.files[0];
  }

  onSubmit(): void {
    this.loading = true;
    this.pluginName = this.fileInputForm.get('selectedPlugin').value
    const formData = new FormData();
    formData.append('file',this.fileToUpload)
    this.fileService.uploadFile(this.pluginName,formData).subscribe(
     {
      next: (data) => {
        this.fileService.addFileNames(data);
        this.successMessage = 'File uploaded successfully!'
        setTimeout(() => { this.successMessage = ''; }, 3000)
        this.loading = false

      },
      error: () => {
        this.errorMessage = 'Error Uploading File'
        this.loading = false
        setTimeout(() => { this.errorMessage = ''; }, 3000)
      }
     }
    );
  }
}
