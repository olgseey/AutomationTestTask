import { Page, Locator } from '@playwright/test';

export class ShoppingPage {
    page: Page;
    //addToCartLocator: Locator

    constructor(page: Page) {
    this.page = page;
}

    async addProduct() {

        await this.page
    }

}