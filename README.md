# gemini/issues/557

System:

macOS El Captain
Chrome Version 53.0.2785.116 (64-bit)
node v6.6.0

Steps to reproduce

```
$ npm install
$ ./node_modules/.bin/selenium-standalone install
$ ./node_modules/.bin/selenium-standalone start
$ npm test
```

--------

Also reproducible when using saucelabs selenium grid instead of local selenium.
