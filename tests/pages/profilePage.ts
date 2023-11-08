// profilePage.ts

import { Page } from '@playwright/test';

export class ProfilePage {
  readonly page: Page;
  readonly accountName: string;
  readonly settingsLabel: string;


  constructor(page: Page) {
    this.page = page;
    this.settingsLabel = '.panel #js-profile-header';
    this.accountName = '.header__account-link span';
  }

}
