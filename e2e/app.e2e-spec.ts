import { OwnAngularPage } from './app.po';

describe('own-angular App', function() {
  let page: OwnAngularPage;

  beforeEach(() => {
    page = new OwnAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
