import { Component, HostListener, OnInit } from '@angular/core';
import {getWindow} from "ssr-window";
import { CommonModule } from '@angular/common';  
import { BottomBarStorageService } from '../bottom-bar-storage.service';

@Component({
  selector: 'app-bottom-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bottom-bar.component.html',
  styleUrl: './bottom-bar.component.css'
})
export class BottomBarComponent implements OnInit {
  public winWidth!: number;
  public bottomBarVisible!: boolean;
  constructor(private bottomBarStorageService: BottomBarStorageService) {
    this.setWidth();
    this.bottomBarVisible = this.bottomBarStorageService.getBottomBarVisibility() // get the last value
    this.bottomBarStorageService.isBottomBarVisibleSubject.next(this.bottomBarVisible); // set it manually to react on its change in ngOnInit
  }
  ngOnInit(): void {
    this.bottomBarStorageService.isBottomBarVisible$.subscribe((isVisible) => {
      console.log("bottom bar visibility: ", isVisible)
      this.bottomBarVisible = isVisible;
    });
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.setWidth()
  }
  closeBottomBar(): void {
    this.bottomBarStorageService.setBottomBarVisibility(false);
  }
  setWidth(){
    this.winWidth = getWindow().innerWidth;
  }
}
