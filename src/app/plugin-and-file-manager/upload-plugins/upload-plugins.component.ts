import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload-plugins',
  templateUrl: './upload-plugins.component.html',
  styleUrl: './upload-plugins.component.css'
})
export class UploadPluginsComponent {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      plugin: [null, Validators.required]
    });
  }

  onFileChange(event): void {
    if (event.target.files.length > 0) {
      this.myForm.get('plugin').setValue(event.target.files[0]);
    }
  }

  onSubmit(): void {
    console.log(this.myForm.value);
  }
}
