'use strict';

const config = {
    rootUrl: 'http://eslint.org',
    gridUrl: `http://localhost:4444/wd/hub`,
    tolerance: 0.1,
    screenshotsDir: './screens',
    browsers: {
        mobile: {
            compositeImage: true,
            screenshotMode: 'fullpage',
            desiredCapabilities: {
                browserName: 'chrome',
                chromeOptions: {
                    mobileEmulation: {
                        deviceName: 'Apple iPhone 5'
                    }
                }
            }
        }
    }
};

module.exports = config;
