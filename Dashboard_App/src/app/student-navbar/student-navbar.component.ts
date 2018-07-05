import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-navbar',
  templateUrl: './student-navbar.component.html',
  styleUrls: ['./student-navbar.component.css']
})
export class StudentNavbarComponent implements OnInit {
  @Input() activeList = {
    home: '',
    learningactivities: '',
    visualisation: ''
  };
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  navigate(path: string) {
    this.router.navigate(['student/' + path]);
  }

  logout() {
    this.authService.doLogout();
    this.router.navigate(['/login']);
  }

}
