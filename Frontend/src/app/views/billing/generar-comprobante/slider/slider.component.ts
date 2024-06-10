import { Component } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  color: ThemePalette = 'primary';
  checked = false;
  disabled = false;
}
