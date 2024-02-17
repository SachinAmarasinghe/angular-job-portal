import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from 'express';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private fireauth: Auth, private router: Router) {}
  login(email: string, password: string) {}
}
