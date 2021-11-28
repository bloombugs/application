import { Selector } from 'testcafe';

class SightingReportPage {
  constructor() {
    this.pageId = '#sightingReportPage';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    // This is first test to be run. Wait 10 seconds to avoid timeouts with GitHub Actions.
    await testController.wait(10000).expect(this.pageSelector.exists).ok();
  }

  /** Go to distress report page */
  async gotoSealReportPage(testController) {
    await testController.click('#sealPage');
  }

  /** Go to distress report page */
  async gotoTurtleReportPage(testController) {
    await testController.click('#turtlePage');
  }

  /** Go to distress report page */
  async gotoBirdReportPage(testController) {
    await testController.click('#birdPage');
  }

  /** Go to distress report page */
  async gotoOtherReportPage(testController) {
    await testController.click('#otherPage');
  }
}

export const sightingReportPage = new SightingReportPage();
