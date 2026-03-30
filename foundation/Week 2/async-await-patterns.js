// This short example shows how Page Object Model (POM) works in real projects.

// BasePage contains shared actions used by child page classes.

class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigate(url) {
    return await this.page.goto(url);
  }

  async getTitle() {
    return await this.page.title();
  }
}

// LoginPage extends BasePage and contains login-specific locators and actions.

class LoginPage extends BasePage {
  #usernameField;
  #passwordField;
  #loginButton;

  constructor(page) {
    // Call BasePage constructor to reuse shared methods and page object.
    super(page);
    this.#usernameField = '#username';
    this.#passwordField = '#password';
    this.#loginButton = '#loginButton';
  }

  // Perform login by filling credentials and clicking the login button.

  async login(username, password) {
    await this.page.fill(this.#usernameField, username);
    await this.page.fill(this.#passwordField, password);
    await this.page.click(this.#loginButton);
  }

  // Verify login success by checking the page title.

  async verifyLoginSuccess() {
    const title = await this.getTitle();
    return title.includes('Dashboard');
  }
}
