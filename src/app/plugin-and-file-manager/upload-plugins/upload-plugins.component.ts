import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PluginService } from '../../Services/plugin.servive';


@Component({
  selector: 'app-upload-plugins',
  templateUrl: './upload-plugins.component.html',
  styleUrl: './upload-plugins.component.css'
})
export class UploadPluginsComponent {
  pluginInputForm: FormGroup;
  pluginToUpload: File | null = null;
  successMessage: string = ''
  errorMessage: string = ''
  loading: boolean = false;
  constructor(private formBuilder: FormBuilder,private pluginService:PluginService) { }

  ngOnInit(): void {
    this.pluginInputForm = this.formBuilder.group({
      plugin: [null, Validators.required]
    });
  }

  onFileChange(event): void {
    this.pluginToUpload = event.target.files[0];
  }

  onSubmit(): void {
    this.loading = true;
    const formData = new FormData();
    formData.append('file', this.pluginToUpload);
    this.pluginService.uploadPlugin(formData).subscribe(
     {
      next: () => {
        this.successMessage = 'Plugin uploaded successfully!'
        setTimeout(() => { this.successMessage = ''; }, 3000)
        this.loading = false
      },
      error: () => {
        this.errorMessage = 'Error Uploading Plugin'
        this.loading = false
        setTimeout(() => { this.errorMessage = ''; }, 3000)
      }
     }
    );
  }  
}
