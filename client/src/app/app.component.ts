import { Component } from '@angular/core';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
import { authConfig } from './sso.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sso-app';
  public doLogin() {
    this.oauthService.initImplicitFlow();
  }
  public doLogout () {
    this.oauthService.logOut();
  }
  constructor (private oauthService: OAuthService) {
    this.configureSingleSignOn();
  }
  configureSingleSignOn() {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler= new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
    //this.oauthService.loadDiscoveryDocumentAndLogin();
  }
  get token() {
    let claims: any= this.oauthService.getIdentityClaims();
    return claims? claims: null; 
  }
}

