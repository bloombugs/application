import { Selector } from 'testcafe';

class DistressPage {
  constructor() {
    this.pageId = '#distressPage';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    // This is first test to be run. Wait 10 seconds to avoid timeouts with GitHub Actions.
    await testController.wait(10000).expect(this.pageSelector.exists).ok();
  }

  /** Go to distress form page */
  async gotoDistressFormPage(testController) {
    await testController.click('#distressFormPage');
  }
}

export const distressPage = new DistressPage();
