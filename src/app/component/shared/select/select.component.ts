import { Component, Input, input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.sass',
})
export class SelectComponent {
  @Input() control: FormControl = new FormControl();
  @Input() label?: string;
  @Input() id?: string;
  @Input() error?: string;
  @Input() options = [{ text: '', value: '' }];
}
