import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const goGuard: CanActivateFn = (route, state) => {
  // return false;  // change true to false to see the diff.

  alert('You must login first to access this page...');
  //... implement you login logic....

  const router: Router = inject(Router);
  return router.navigate(['info', 'home']);


};
