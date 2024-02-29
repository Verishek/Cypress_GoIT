import { LoginPage1 } from "../pages/Login_Page"
import { HomePage1 } from "../pages/Home_page"

const LoginPage = new LoginPage1();
const HomePage = new HomePage1();

describe('User can visit GoIT Page', () => {
    beforeEach('go to page', () => {
      LoginPage.navigate()
    });
  
    it('successfully login to the GoIT page first test', () => {
        LoginPage.logInUser('user888@gmail.com', '1234567890');
        HomePage.goToCourseHomepage();
        HomePage.proceedToNext();
        HomePage.logOut();
      });
  
      it('successfully login to the GoIT page second test', () => {
          LoginPage.logInUser('testowyqa@qa.team', 'QA!automation-1');
          HomePage.goToCourseHomepage();
          HomePage.proceedToNext();
          HomePage.logOut();
      });
});