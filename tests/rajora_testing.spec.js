import {test,expect} from '@playwright/test';

test('Rajora10', async({page}) => {
 await page.goto("https://in.pinterest.com");
 await expect(page).toHaveTitle('Pinterest - India');


});