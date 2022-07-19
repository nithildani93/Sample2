
const Page = require('./page');

 class LoginPage extends Page {
    get getusername(){
        return $('#username');
    }
    get getpassword(){
        return $('#password');
    }
    get submitbtn(){
        return $('#login');
    }

    open () {
        return super.open('index');
    }

}
export default new LoginPage();