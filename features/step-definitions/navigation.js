import { Given } from '@wdio/cucumber-framework';
import page from '../page-objects/page.js';

Given('I am on {word} page', async function(pageName) {
    await page.open(pageName);
});
