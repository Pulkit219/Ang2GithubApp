import { Ang2GithubAppPage } from './app.po';

describe('ang2-github-app App', function() {
  let page: Ang2GithubAppPage;

  beforeEach(() => {
    page = new Ang2GithubAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
