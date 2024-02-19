import { AuthService } from './shared/auth.service';
import { inject } from '@angular/core';
import { RouteConfigLoadEnd, Router } from '@angular/router';

export const CanActivate = () => {
  const authservice = inject(AuthService);
  const router = inject(Router);
  if (AuthService.IsAuthenticated()) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
