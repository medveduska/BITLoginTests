import { test, expect } from '@playwright/test';
import { ProfilePage } from './pages/profilePage.ts';
import { LoginPage } from './pages/loginPage.ts';


// Define the credentials as constants or environment variables
const CORRECT_EMAIL = process.env.CORRECT_EMAIL as string
const CORRECT_PASSWORD = process.env.CORRECT_PASSWORD as string
const INCORRECT_PASSWORD = 'incorrectPassword';
const INCORRECT_EMAIL = 'wronguser@example.com';
const BASE_URL = process.env.BASE_URL as string

test.describe('Login tests', () => {
  let loginPage: LoginPage;
  let profilePage: ProfilePage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    profilePage = new ProfilePage(page);
    await page.goto(BASE_URL + '/sign_in');
    await expect(page.locator(loginPage.authSubHeader)).toContainText('Login with your E-mail and password');
  });

  test('Successful login to the account', async ({ page }) => {
    loginPage.login(CORRECT_EMAIL, CORRECT_PASSWORD);
    await expect(page).toHaveURL(BASE_URL + '/profile', {timeout:15000});
    await expect(page.locator(profilePage.settingsLabel)).toContainText('Account Settings');
    await expect(page.locator(profilePage.accountName)).toContainText(CORRECT_EMAIL);

  });

  test('Unsuccessful login with incorrect password', async ({ page }) => {
    loginPage.login(CORRECT_EMAIL, INCORRECT_PASSWORD);
    await expect(page).not.toHaveURL(BASE_URL + '/profile', {timeout:15000});
    await expect(page.locator(loginPage.errorLocator)).toContainText('Invalid email or password. Try clicking \'Forgot Password\' if you\'re having trouble signing in.', {timeout:15000})

  });

  test('Unsuccessful login with wrong email address', async ({ page }) => {
    loginPage.login(INCORRECT_EMAIL, CORRECT_PASSWORD);
    await expect(page).not.toHaveURL(BASE_URL + '/profile', {timeout:15000});
    await expect(page.locator(loginPage.errorLocator)).toContainText('Invalid email or password. Try clicking \'Forgot Password\' if you\'re having trouble signing in.', {timeout:15000})
  });

});
