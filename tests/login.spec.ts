import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';

test('1. Login standard_user', async ({ page }) => {

  await page
  .goto('/');

  const loginPage = new LoginPage(page);
  
  await loginPage
  .login('standard_user', 'secret_sauce'); 

  await expect(page)
  .toHaveURL(/inventory\.html/);

});

test('2. Login locked user', async ({ page }) => {

  await page
  .goto('/');

  const loginPage = new LoginPage(page);
  
  await loginPage
  .login('locked_out_user', 'secret_sauce'); 

  await expect (page
    .getByText('Epic sadface: Sorry, this user has been locked out.'))
    .toBeVisible();
});

