import { TallerVpPage } from './app.po';

describe('taller-vp App', () => {
  let page: TallerVpPage;

  beforeEach(() => {
    page = new TallerVpPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to vp!!');
  });
});
