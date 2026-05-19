class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailLocator = page.getByPlaceholder("email@example.com");
    this.passwordLocator = page.getByPlaceholder("enter your passsword");
    this.submitButtonLocator = page.getByRole("button", { name: 'login' });
  };
  async doLogin(url, username, password) {
    await this.page.goto(url);
    await this.emailLocator.fill(username);
    await this.passwordLocator.fill(password);
    await this.submitButtonLocator.click();
    await this.page.waitForLoadState('networkidle');
  };
};
module.exports = { LoginPage };