import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TopBarComponent, BottomBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  bottomBarOpacity: number = 0;
  title = 'tangem-mock';
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any): void {
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop || 0;

    // Adjust the opacity based on the scroll position
    this.bottomBarOpacity = Math.min(scrollPosition / 200, 1); 
  }
}
