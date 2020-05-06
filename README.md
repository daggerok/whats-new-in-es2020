# what's new in es2020 [![Build Status](https://travis-ci.org/daggerok/whats-new-in-es2020.svg?branch=master)](https://travis-ci.org/daggerok/whats-new-in-es2020)
Testing es2020 features with jest...

quick one liner:

```bash
git clone --depth=1 --no-single-branch https://github.com/daggerok/whats-new-in-es2020 app && cd $_ && npm i && npm t
```

## jest es6+

```bash
mkdir app && cd $_
npm init -y
npm i -ED @babel/preset-env jest @jest/core @jest/globals @jest/types @types/jest @types/node
```

## jest reporters

```bash
npm i -ED @jest/reporters jest-junit 
```

_package.json_

```json
{
  "scripts": {
    "dev": "npm run test -- --watchAll",
    "test": "jest --reporters=default --reporters=jest-junit --collect-coverage"
  }
}
```

## jest async / await

```bash
npm i -ED @babel/preset-env core-js
```

_package.json_

```json
{
  "babel": {
    "presets": [
      [
        "@babel/preset-env",
        {
          "targets": {
            "node": "current"
          }
        }
      ]
    ]
  }
}
```

_test/some.test.js_

```js
import { describe, it, expect } from '@jest/globals';

describe('Dynamic Import', () => {
  it('should import lazy module dynamically', async () => {
    const dynamicModule = await import('../src/dynamic-module.js');
    const total = await dynamicModule.sum(1, 2, 3);
    await expect(total).toBe(6);
  });
});
```

## resources

* https://github.com/facebook/jest/blob/master/examples/async/.babelrc.js
* https://jestjs.io/docs/en/cli
* https://www.freecodecamp.org/news/javascript-new-features-es2020/
* https://medium.com/@dtkatz/use-the-blazing-fast-parcel-bundler-to-build-and-test-a-react-app-e6972a2587e1
