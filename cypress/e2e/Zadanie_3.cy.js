import LoginPage from "../pages/LoginPage"
import HomePage from "../pages/HomePage"



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