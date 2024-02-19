import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private fireauth: AngularFireAuth, private router: Router) {}

  //login
  login(email: string, password: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.fireauth.signInWithEmailAndPassword(email, password).then(
        (userCredentials) => {
          const user = userCredentials.user;
          user!.getIdToken().then((token) => {
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            resolve('Success');
          });
        },
        (err) => {
          reject(err.message);
        }
      );
    });
  }

  // is authenticated
  static IsAuthenticated() {
    return !!localStorage.getItem('token');
  }

  //register
  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(
      () => {
        this.router.navigate(['login']);
      },
      (err) => {
        alert(err.message);
        this.router.navigate(['login']);
      }
    );
  }

  //siginout
  logout() {
    this.fireauth.signOut().then(
      () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
      },
      (err) => {
        console.log(err.message);
      }
    );
  }
}
