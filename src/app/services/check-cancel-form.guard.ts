import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CheckCancelFormGuard implements CanDeactivate<any> {

  constructor(private router: Router, private location: Location) {
}

  canDeactivate(target: any, currentRoute: ActivatedRouteSnapshot): boolean {
    // Logic
    if (!target.mIsSubmitted) {
      // mIsSubmitted is status submit of StockCreateComponent, StockEditComponent
      // Fix wrong route history error
      const currentUrlTree = this.router.createUrlTree([], currentRoute);
      const currentUrl = currentUrlTree.toString();
      this.location.go(currentUrl);
      return window.confirm('Are you sure?');
    }
    return true;
  }

}


