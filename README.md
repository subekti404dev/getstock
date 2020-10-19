# getstock [![NPM version](https://img.shields.io/npm/v/node-getstock.svg?style=flat)](https://www.npmjs.com/package/node-getstock) [![NPM monthly downloads](https://img.shields.io/npm/dm/node-getstock.svg?style=flat)](https://npm-stat.com/charts.html?package=node-getstock) [![NPM total downloads](https://img.shields.io/npm/dt/node-getstock.svg?style=flat)](https://npm-stat.com/charts.html?package=node-getstock)

Bring image stock for free from several websites (unsplash, pexels, pixabay) to you.

### Install
```
$ npm install node-getstock
$ yarn add node-getstock
```

### Example

```
import { Search } from 'node-getstock';

Search
  .getData(keyword, options)
  .then(data => {
    console.log(data);
  });

```

### Parameters

```
keyword                            string
options
 - options.page      1             number
 - options.perPage   20            number
 - options.type      'pexels'      'pexels'|'pixabay'|'unsplash'

```
