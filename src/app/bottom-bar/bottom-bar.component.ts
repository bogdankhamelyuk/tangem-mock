import { Component, HostListener } from '@angular/core';
import {getWindow} from "ssr-window";
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-bottom-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bottom-bar.component.html',
  styleUrl: './bottom-bar.component.css'
})
export class BottomBarComponent {
  public winWidth: number = 0;
  constructor() {
    this.setWidth();
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.setWidth()
  }

  setWidth(){
    this.winWidth = getWindow().innerWidth;
  }
}
