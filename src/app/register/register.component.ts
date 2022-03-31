import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public form: FormGroup;

  constructor(private readonly fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      url1: ['', [Validators.required]],
      url2: ['', [Validators.required]],
      url3: ['', [Validators.required]],
      image: ['', [Validators.required]],
      description: ['', [Validators.required]]
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

  onSubmit() {
    if (this.form.valid) {
      this.router.navigate(['/information'], { queryParams: this.form.value });
    }
  }

}
