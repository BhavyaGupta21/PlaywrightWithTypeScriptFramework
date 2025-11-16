    import { Locator, Page } from "@playwright/test";

    export class LoginPage {
        readonly page: Page;
        readonly userNameInput: Locator;
        readonly passwordInput: Locator;
        readonly loginButton: Locator;
        readonly invalidCredentialsErrorPopup: Locator;

        constructor (page: Page) {
            this.page = page;
            this.userNameInput = page.getByRole('textbox', { name: 'Username' });
            this.passwordInput = page.getByRole('textbox', { name: 'Password' });
            this.loginButton = page.getByRole('button', { name: 'Login' });
            this.invalidCredentialsErrorPopup = page.getByText('Invalid credentials');
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
            await this.userNameInput.waitFor({state: 'visible'});
            await this.userNameInput.fill(username);
            await this.passwordInput.waitFor({state: 'visible'});
            await this.passwordInput.fill(password);
            await this.loginButton.waitFor({state: 'visible'});
            await this.loginButton.click();
        }
    }