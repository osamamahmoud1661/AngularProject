import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { ShareserviceService } from '../service/shareservice.service';

export const adminGuardGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
  if(inject(ShareserviceService).isAdmin)
    return true
  else{
    inject(Router).navigate(['/'])
    return false
  }
};
