import { Injectable } from "@angular/core";
import { CanLoad, Route, Router, UrlSegment, UrlTree } from "@angular/router";
import { UserService } from "src/app/shared/services/user.service";

@Injectable({
    providedIn:"root"
})
export class AuthGuard implements CanLoad{
    constructor(
        private userService:UserService,
        private router:Router
    ){}

    canLoad(route: Route, segments: UrlSegment[]) {
        if(this.userService.getLoggedinUser())
            return true

        this.router.navigate(["login"])
        return false
    }

}