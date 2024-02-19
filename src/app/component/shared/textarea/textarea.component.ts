import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.sass',
})
export class TextareaComponent {
  @Input() control: FormControl = new FormControl();
  @Input() placeholder?: string;
  @Input() label?: string;
  @Input() id?: string;
  @Input() error?: string;
}
