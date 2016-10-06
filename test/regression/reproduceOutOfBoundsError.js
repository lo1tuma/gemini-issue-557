'use strict';

gemini.suite('About Page', (suite) => {
    suite.setUrl('/docs/about')
        .setCaptureElements('body')
        .capture('plain');
});

