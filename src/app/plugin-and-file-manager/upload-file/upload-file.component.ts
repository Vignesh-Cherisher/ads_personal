import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrl: './upload-file.component.css'
})
export class UploadFileComponent {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

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
    // Handle form submission
    console.log(this.myForm.value);
  }
}
