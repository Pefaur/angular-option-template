import { OptionTemplatePage } from './app.po';

describe('option-template App', () => {
  let page: OptionTemplatePage;

  beforeEach(() => {
    page = new OptionTemplatePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
