import { browser, by, element } from 'protractor';

export class TallerVpPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('vp-root h1')).getText();
  }
}
