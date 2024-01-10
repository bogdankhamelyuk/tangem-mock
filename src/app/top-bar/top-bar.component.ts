import { Component, HostListener } from '@angular/core';
import {getWindow} from "ssr-window";
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent  {
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
