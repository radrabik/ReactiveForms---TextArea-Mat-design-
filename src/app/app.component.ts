import { Component, VERSION } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  form = this.fb.group({
    longDescription: ['', {
      validators: [Validators.required, Validators.minLength(5)]
    }
    ],
  });

  constructor(private fb: FormBuilder) {}

  get longDescription() {
    return this.form.controls['longDescription'];
  }
}
