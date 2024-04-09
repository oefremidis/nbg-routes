import { CanDeactivateFn } from '@angular/router';

export const stopGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  alert('Are you sure you want to leave... All data will be lost');
  return true;
};
