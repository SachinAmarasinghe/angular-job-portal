import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.sass',
})
export class InputComponent {
  @Input() control: FormControl = new FormControl();
  @Input() placeholder?: string;
  @Input() type?: 'text' | 'password' | 'email' | 'number';
  @Input() label?: string;
  @Input() id?: string;
  @Input() error?: string;
}
