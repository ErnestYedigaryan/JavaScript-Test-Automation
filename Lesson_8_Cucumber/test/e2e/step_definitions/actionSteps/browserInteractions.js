"use strict";
const { When } = require('cucumber');
const highlightElement = require('../utils/stepFunctions.js').highlightElement;
const logger = require('../../config/loggerConfig.js').logger;

When(/^I wait "([^"]*)" seconds$/, (waitTime) => {
    logger.info(`I wait ${waitTime} seconds`);
    return browser.sleep(waitTime * 1000);
});

When(/^I open "([^"]*)" url$/, (url) => {
    logger.info(`I open ${url} url`);
    return browser.get(url);
});

When(/^I highlight "([^"]*)"$/, (alias) => {
    logger.info(`I highlight ${alias}`);
    return highlightElement(alias);
});

When(/^I hit enter$/, () => {
    browser.actions().sendKeys(protractor.Key.ENTER).perform();
})

When(/^I enter "([^"]*)" in "([^"]*)"$/, function (text, locator) {
    const loc = element(by.css(locator));
  
    return loc.sendKeys(text);
});