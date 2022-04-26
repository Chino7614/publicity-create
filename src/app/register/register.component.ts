import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public form: FormGroup;
  /** Canvas 2d context */

  constructor(private readonly fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      url1: ['', [Validators.required]],
      url2: ['', [Validators.required]],
      url3: ['', [Validators.required]],
      link1: new FormGroup({
        url: new FormControl(null, Validators.required),
        image: new FormControl(null, Validators.required),
        hint: new FormControl(null, Validators.required),
      }),
      link2: new FormGroup({
        url: new FormControl(null, Validators.required),
        image: new FormControl(null, Validators.required),
        hint: new FormControl(null, Validators.required),
      }),
      link3: new FormGroup({
        url: new FormControl(null, Validators.required),
        image: new FormControl(null, Validators.required),
        hint: new FormControl(null, Validators.required),
      }),
      image: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  onLinkImageClick(index: number): void {
    document.getElementById('linkImageUpload' + index)?.click();
  }

  onLinkImageSelected(e: any, index: number) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.form?.get('link' + index)?.patchValue({ image: reader.result });
      const canvas = document.getElementById('canvasEl') as HTMLCanvasElement;
      const canvasContext = canvas?.getContext('2d');
      if (typeof reader.result === 'string') {
        const swedishflagbg = new Image();
        swedishflagbg.src = reader.result;
        swedishflagbg.onload = function () {
          canvasContext?.drawImage(
            swedishflagbg,
            0 ,
            0+ (index * 60),
            100 ,
            50
          );
        };
      }
    };
    reader.readAsDataURL(file);
  }

  onImageSelected(e: any) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.form.patchValue({ image: reader.result });
      const canvas = document.getElementById('canvasEl') as HTMLCanvasElement;
      const canvasContext = canvas?.getContext('2d');
      if (typeof reader.result === 'string') {
        const swedishflagbg = new Image();
        swedishflagbg.src = reader.result;
        swedishflagbg.onload = function () {
          canvasContext?.drawImage(
            swedishflagbg,
            0,
            0,
            canvas?.width,
            canvas?.height
          );
        };
      }
    };
    reader.readAsDataURL(file);
  }

  onSubmit() {
    if (this.form.valid) {
      this.router.navigate(['/information'], { queryParams: this.form.value });
    }
  }

  myUploader($event: any): void {}
}
