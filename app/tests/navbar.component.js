import { Selector } from 'testcafe';

class NavBar {

  /** If someone is logged in, then log them out, otherwise do nothing. */
  async ensureLogout(testController) {
    const loggedInUser = await Selector('#navbar-current-user').exists;
    if (loggedInUser) {
      await testController.click('#navbar-current-user');
      await testController.click('#navbar-sign-out');
    }
  }

  async gotoSigninPage(testController) {
    await this.ensureLogout(testController);
    await testController.click('#login-dropdown');
    await testController.click('#login-dropdown-sign-in');
  }

  /** Check that the specified user is currently logged in. */
  async isLoggedIn(testController, username) {
    await testController.wait(10000).expect(Selector('#navbar-current-user').innerText).eql(username);
  }

  /** Check that someone is logged in, then click items to logout. */
  async logout(testController) {
    await testController.expect(Selector('#navbar-current-user').exists).ok();
    await testController.click('#navbar-current-user');
    await testController.click('#navbar-sign-out');
  }

  /** Pull down login menu, go to sign up page. */
  async gotoSignupPage(testController) {
    await this.ensureLogout(testController);
    await testController.click('#login-dropdown');
    await testController.click('#login-dropdown-sign-up');
  }

  /** Pull down login menu, go to sign up page. */
  async gotoAdminSignupPage(testController) {
    await this.ensureLogout(testController);
    await testController.click('#login-dropdown');
    await testController.click('#login-dropdown-admin-sign-up');
  }

  /** Go to landing page via navbar */
  async gotoLandingPage(testController) {
    await testController.click('#landingPage');
  }

  /** Go to distress report page */
  async gotoDistressReportPage(testController) {
    await testController.click('#distressPage');
  }

  /** Go to sighting report page */
  async gotoSightingReportPage(testController) {
    await testController.click('#sightingReportPage');
  }

  /** Go to info page */
  async gotoInfoPage(testController) {
    await testController.click('#infoPage');
  }

  /** Go to bird list report admin page */
  async gotoBirdListReportAdminPage(testController) {
    await testController.click('#bird-admin-page');
  }

  /** Go to turtle list report admin page */
  async gotoTurtleListReportAdminPage(testController) {
    await testController.click('#turtle-admin-page');
  }

  /** Go to seal list report admin page */
  async gotoSealListReportAdminPage(testController) {
    await testController.click('#seal-admin-page');
  }

  /** Go to distress list report admin page */
  async gotoDistressListReportAdminPage(testController) {
    await testController.click('#distress-admin-page');
  }

}

export const navBar = new NavBar();
