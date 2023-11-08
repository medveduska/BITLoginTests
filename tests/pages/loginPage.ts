// loginPage.ts

import { Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly emailInput: string;
  readonly passwordInput: string;
  readonly loginButton: string;
  readonly errorLocator: string;
  readonly authSubHeader: string;


  constructor(page: Page) {
    this.page = page;
    this.emailInput = '.form-group input[name="email"]';
    this.passwordInput = '.form-group input[name="password"]';
    this.loginButton = '#sign-in';
    this.errorLocator = '#js-login-error .text-center'; 
    this.authSubHeader = '.subheader'

  }

  async login(email: string, password: string) {
    await this.page.fill(this.emailInput, email);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }
}
