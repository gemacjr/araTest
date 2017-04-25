import { Angular2testPage } from './app.po';

describe('angular2test App', () => {
  let page: Angular2testPage;

  beforeEach(() => {
    page = new Angular2testPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
