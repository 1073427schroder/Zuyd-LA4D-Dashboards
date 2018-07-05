import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from "@angular/router";
import { UserService } from '../auth/user.service';
import { DataService } from '../data.service';

@Injectable()
export class UserResolver implements Resolve<any> {

  constructor(public userService: UserService, private router: Router, public dataService: DataService) { }

  resolve(route: ActivatedRouteSnapshot): Promise<any> {

    let user = {
      "name": ""
      , "email": ""
      , "role": ""
      , "password": ""
    }

    return new Promise((resolve, reject) => {
      this.userService.getCurrentUser()
        .then(res => {
          this.dataService.getCurrentRole().then(data => {
            if (data === 'teacher') {
              if (route.routeConfig.path === 'teacher') this.router.navigate(['/teacher']);
              else this.router.navigate([route.routeConfig.path]);
            }
            else if (data === 'student') {
              if (route.routeConfig.path === 'student') this.router.navigate(['/student']);
              else this.router.navigate([route.routeConfig.path]);
            }
            else {
              console.log("Role error, role: " + data);
            }


          });
            return resolve(user);
          /*
          if (res.providerData[0].providerId == 'password') {
            user.name = res.displayName;
            return resolve(user);
          }
          else {
            user.name = res.displayName;
            return resolve(user);
          }
          */
        }, err => {
          this.router.navigate(['/login']);
          return reject(err);
        })
    })
  }
}
