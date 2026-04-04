import { Component } from '@angular/core';
import { Button } from '../../atoms/button/button';
import { LinkText } from '../../atoms/link-text/link-text';

@Component({
  selector: 'app-form-actions',
  imports: [Button, LinkText],
  templateUrl: './form-actions.html',
  styleUrl: './form-actions.css',
})
export class FormActions {}
