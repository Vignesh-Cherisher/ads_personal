import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrl: './upload-file.component.css'
})
export class UploadFileComponent {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private http:HttpClient) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      selectedPlugin: ['', Validators.required],
      file: [null, Validators.required]
    });
  }

  onOptionSelect(): void {
    const selectedPlugin = this.myForm.get('selectedPlugin').value;
    if (selectedPlugin) {
      this.myForm.get('file').setValidators([Validators.required]);
    } else {
      this.myForm.get('file').clearValidators();
    }
    this.myForm.get('file').updateValueAndValidity();
  }

  onSubmit(): void {
    const formData = new FormData();
    formData.append('file', this.myForm.get('file').value);
    console.log(this.myForm.get('file'))
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
