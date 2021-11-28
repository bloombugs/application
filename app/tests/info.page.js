import { Selector } from 'testcafe';

class InfoPage {
  constructor() {
    this.pageId = '#infoPage';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    // This is first test to be run. Wait 10 seconds to avoid timeouts with GitHub Actions.
    await testController.wait(10000).expect(this.pageSelector.exists).ok();
  }

  /** Go to distress report page */
  async gotoSealInfoPage(testController) {
    await testController.click('#sealInfo');
  }

  /** Go to distress report page */
  async gotoTurtleInfoPage(testController) {
    await testController.click('#turtleInfo');
  }

  /** Go to distress report page */
  async gotoBirdInfoPage(testController) {
    await testController.click('#birdInfo');
  }

  /** Go to distress report page */
  async gotoOtherInfoPage(testController) {
    await testController.click('#otherInfo');
  }
}

export const infoPage = new InfoPage();
