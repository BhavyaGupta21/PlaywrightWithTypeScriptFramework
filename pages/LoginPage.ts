import { Locator, Page } from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    readonly userNameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor (page: Page) {
        this.page = page;
        this.userNameInput = page.getByRole('textbox', { name: 'Username' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }

    /**
     * To open URL into browser
     */
    async gotoOrangeHrm() {
        await this.page.goto(`${process.env.BASE_URL}/web/index.php/auth/login`);
    }

    /**
     * To login into orangeHRM application
     * @param username 
     * @param password 
     */
    async loginOrangeHrm(username: string, password: string) {
        await this.userNameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}