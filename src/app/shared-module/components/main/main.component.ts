import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  standalone: false
})
export class MainComponent implements OnInit {
  constructor(private authservice: AuthService) {

  }
  public isResponsive: boolean = false;
  checkResponsive() {
    this.isResponsive = window.innerWidth <= 768;  // Set max-width as 768px for responsiveness
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkResponsive();
  }
  ngOnInit(): void {
    this.checkResponsive();
  }
  isLoggedIn() {
    return this.authservice.getToken() != null
  }
}
