import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from "@angular/router";
import { UserService } from '../auth/user.service';

@Injectable()
export class UserResolver implements Resolve<any> {

  constructor(public userService: UserService, private router: Router) { }

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
          if (res.providerData[0].providerId == 'password') {
            user.name = res.displayName;
            return resolve(user);
          }
          else {
            user.name = res.displayName;
            return resolve(user);
          }
        }, err => {
          this.router.navigate(['/login']);
          return reject(err);
        })
    })
  }
}