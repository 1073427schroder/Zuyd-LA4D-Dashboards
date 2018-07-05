import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-teacher-navbar',
  templateUrl: './teacher-navbar.component.html',
  styleUrls: ['./teacher-navbar.component.css']
})
export class TeacherNavbarComponent implements OnInit {

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
    this.router.navigate(['teacher/' + path]);
  }

  logout() {
    this.authService.doLogout();
    this.router.navigate(['/login']);
  }

}
