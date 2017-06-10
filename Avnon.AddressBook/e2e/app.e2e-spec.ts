import { AvnonAddressBookPage } from './app.po';

describe('avnon-address-book App', () => {
  let page: AvnonAddressBookPage;

  beforeEach(() => {
    page = new AvnonAddressBookPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
