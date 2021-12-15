import { Selector } from 'testcafe';
import { navBar } from './navbar.component';

class SignupAsAdminPage {
  constructor() {
    this.pageId = '#admin-signup-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  /** Signs up a new user, then checks to see that they are logged in by checking the navbar. */
  async signupUser(testController, username, password, adminPassword) {
    await this.isDisplayed(testController);
    await testController.typeText('#signup-form-email', username);
    await testController.typeText('#signup-form-password', password);
    await testController.typeText('#admin-signup-form-password', adminPassword);
    await testController.click('#signup-form-submit');
    await navBar.isLoggedIn(testController, username);
  }
}

export const signupAsAdminPage = new SignupAsAdminPage();
