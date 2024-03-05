import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrl: './upload-file.component.css'
})
export class UploadFileComponent {
  fileForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.fileForm = this.fb.group({
      file: ['']
    });
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.fileForm.get('file').value);
    console.log(formData)
    this.http.post('https://192.168.0.217:7149/api/data/upload', 
    {formData}).subscribe(
     {
      next: (response) => {
        console.log('File uploaded successfully!', response);
      },
      error: error => {
        console.error('Error uploading file:', error);
      }
     }
    );
  }
}
