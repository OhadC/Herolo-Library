import { HeroloLibraryPage } from './app.po';

describe('herolo-library App', () => {
  let page: HeroloLibraryPage;

  beforeEach(() => {
    page = new HeroloLibraryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
