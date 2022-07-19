import { Page } from './page';

export const IPT_USERNAME = '#username';
const IPT_PASSWORD = '#password';
const BTN_SUBMIT = '#login';

class LoginPage extends Page {
  get getUsername() {
    return $(IPT_USERNAME);
  }
  get getPassword() {
    return $(IPT_PASSWORD);
  }
  get submitBtn() {
    return $(BTN_SUBMIT);
  }

  async open() {
    return await super.open('index');
  }
}
export default new LoginPage();
