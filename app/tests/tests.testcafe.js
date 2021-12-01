import { landingPage } from './landing.page';
import { signinPage } from './signin.page';
import { signoutPage } from './signout.page';
import { distressPage } from './distress.page';
import { sightingReportPage } from './sightingReport.page';
import { infoPage } from './info.page';
import { navBar } from './navbar.component';
import { signupPage } from './signup.page';
import { sealReportPage } from './sealReport.page';
import { turtleReportPage } from './turtleReport.page';
import { birdReportPage } from './birdReport.page';
import { otherReportPage } from './otherReport.page';
import { birdInfoPage } from './birdInfo.page';
import { turtleInfoPage } from './turtleInfo.page';
import { sealInfoPage } from './sealInfo.page';
import { signupAsAdminPage } from './signupAsAdmin.page';
import { birdListReportAdminPage } from './birdListReportAdmin.page';
import { distressListReportAdminPage } from './distressListReportAdmin.page';
import { sealListReportAdminPage } from './sealListReportAdmin.page';
import { turtleListReportAdminPage } from './turtleListReportAdmin.page';

/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const credentials = { username: 'aaa@foo.com', password: 'changeme' };
const adminCredentials = { username: 'bbb@foo.com', password: 'changeme', adminPassword: 'adminpassword' };
// const form = { name: 'john foo', phone: '8081234567', location: 'pipeline', description: 'This is a test' };

fixture('meteor-application-template-react localhost test with default db')
  .page('http://localhost:3000');

test('Test that landing page shows up', async (testController) => {
  await landingPage.isDisplayed(testController);
});

test('Test that signup works', async (testController) => {
  await navBar.gotoSignupPage(testController);
  await signupPage.signupUser(testController, credentials.username, credentials.password);
});

test('Test that signin and signout work', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.isLoggedIn(testController, credentials.username);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Test that distress and distress report pages show up', async (testController) => {
  await navBar.gotoDistressReportPage(testController);
  await distressPage.isDisplayed(testController);
  await distressPage.gotoDistressFormPage(testController);
});

test('Test that landing page shows up via navbar', async (testController) => {
  await navBar.gotoLandingPage(testController);
  await landingPage.isDisplayed(testController);
});

test('Test that sighting report page shows up and the pages for the other animal sightings and the other page', async (testController) => {
  await navBar.gotoSightingReportPage(testController);
  await sightingReportPage.isDisplayed(testController);
  await sightingReportPage.gotoSealReportPage(testController);
  await sealReportPage.isDisplayed(testController);
  await navBar.gotoSightingReportPage(testController);
  await sightingReportPage.gotoTurtleReportPage(testController);
  await turtleReportPage.isDisplayed(testController);
  await navBar.gotoSightingReportPage(testController);
  await sightingReportPage.gotoBirdReportPage(testController);
  await birdReportPage.isDisplayed(testController);
  await navBar.gotoSightingReportPage(testController);
  await sightingReportPage.gotoOtherReportPage(testController);
  await otherReportPage.isDisplayed(testController);
});

test('Test that info report page shows and the pages for the animals and other', async (testController) => {
  await navBar.gotoInfoPage(testController);
  await infoPage.isDisplayed(testController);
  await infoPage.gotoSealInfoPage(testController);
  await sealInfoPage.isDisplayed(testController);
  await navBar.gotoInfoPage(testController);
  await infoPage.isDisplayed(testController);
  await infoPage.gotoTurtleInfoPage(testController);
  await turtleInfoPage.isDisplayed(testController);
  await navBar.gotoInfoPage(testController);
  await infoPage.isDisplayed(testController);
  await infoPage.gotoBirdInfoPage(testController);
  await birdInfoPage.isDisplayed(testController);
  await navBar.gotoInfoPage(testController);
  await infoPage.isDisplayed(testController);
  await infoPage.gotoOtherInfoPage(testController);
  await otherReportPage.isDisplayed(testController);
});

// test.only('Test that admin signup and login works', async (testController) => {
//   await navBar.gotoAdminSignupPage(testController);
//   await signupAsAdminPage.signupUser(testController, adminCredentials.username, adminCredentials.password, adminCredentials.adminPassword);
//   await navBar.gotoSigninPage(testController);
//   await signinPage.signin(testController, adminCredentials.username, adminCredentials.password);
//   await navBar.isLoggedIn(testController, adminCredentials.username);
// });
//
// test.only('Test that admin report pages shows up via navbar', async (testController) => {
//   await navBar.gotoBirdListReportAdminPage(testController);
//   await birdListReportAdminPage.isDisplayed(testController);
//   await navBar.gotoDistressListReportAdminPage(testController);
//   await distressListReportAdminPage.isDisplayed(testController);
//   await navBar.gotoSealListReportAdminPage(testController);
//   await sealListReportAdminPage.isDisplayed(testController);
//   await navBar.gotoTurtleListReportAdminPage(testController);
//   await turtleListReportAdminPage.isDisplayed(testController);
// });
