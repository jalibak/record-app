import { RecordAppPage } from './app.po';

describe('record-app App', () => {
  let page: RecordAppPage;

  beforeEach(() => {
    page = new RecordAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
