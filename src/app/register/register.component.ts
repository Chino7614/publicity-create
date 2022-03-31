import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public form: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.form = this.fb.group({
      url1: [''],
      url2: [''],
      url3: [''],
      image: [''],
      description: ['']
    })
  }


  ngOnInit(): void {

  }

  imagePreview(e: any) {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onload = () => {
      this.form.patchValue({ image: reader.result });
    }
    reader.readAsDataURL(file)
  }

}
