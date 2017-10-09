import { MaternityPage } from './app.po';

describe('maternity App', function() {
  let page: MaternityPage;

  beforeEach(() => {
    page = new MaternityPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
