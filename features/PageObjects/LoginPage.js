import { Page } from './page';


import {Page}  from './page';
import Utils from './Utilities';
export const IPT_USERNAME = '#username';
const IPT_PASSWORD = '#password';
const BTN_SUBMIT = '#login';


 class LoginPage extends Page {
    
    get getusername (){
        Utils.highlightById(IPT_USERNAME);
        return $(IPT_USERNAME);
    }
    get getpassword(){
        Utils.highlightById(IPT_PASSWORD);
        return $(IPT_PASSWORD);
    }
    get submitbtn(){
        return $(BTN_SUBMIT);
    }   

    async open () {
        return await super.open('index');
    }

  async open() {
    return await super.open('index');
  }
}
export default new LoginPage();
