import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import { UserService } from '../auth/user.service';
import { DataService } from '../data.service';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    public afAuth: AngularFireAuth,
    public userService: UserService,
    private dataService: DataService,
    private router: Router
  ) { }

  canActivate(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.userService.getCurrentUser()
        .then(user => {

          this.dataService.getCurrentRole().then(data => {
            console.log(data);
            this.router.navigate(['/' + data]);
          });
          //this.router.navigate(['/teacher']);
          return resolve(false);
          //return resolve(true);
        }, err => {
          return resolve(true);
          //return resolve(false);
        })
    })
  }
}
