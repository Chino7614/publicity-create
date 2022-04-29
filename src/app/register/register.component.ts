import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  FormArray,
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
      image: ['', [Validators.required]],
      description: ['', [Validators.required]],
      linksArray: this.fb.array([])
    });
  }

  ngOnInit(): void { }

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
            0,
            0 + (index * 60),
            100,
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

  addedNewLink() {
    console.log('asdfasdfasdf', this.linksArray().controls.length);

    this.linksArray().push(this.newLink());
  }

  newLink(): FormGroup {
    return this.fb.group({
      url: '',
      image: ''
    })
  }

  linksArray(): FormArray {
    return this.form.get("linksArray") as FormArray;
  }

  myUploader($event: any): void { }
}
