import { Selector } from 'testcafe';

class DistressFormPage {
  constructor() {
    this.pageId = '#distressFormPage';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    // This is first test to be run. Wait 10 seconds to avoid timeouts with GitHub Actions.
    await testController.wait(10000).expect(this.pageSelector.exists).ok();
  }

  /** Fills out and submits the form to signin, then checks to see that login was successful. */
  async formTest(testController, date, time, name, phone, location, description) {
    await this.isDisplayed(testController);
    await testController.typeText('#distress-form-date', date);
    await testController.typeText('#distress-form-time', time);
    await testController.typeText('#distress-form-name', name);
    await testController.typeText('#distress-form-phone', phone);
    await testController.typeText('#distress-form-location', location);
    await testController.typeText('#distress-form-description', description);
    await testController.click('#distress-form-submit');
  }

}

export const distressFormPage = new DistressFormPage();
