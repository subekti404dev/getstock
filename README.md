# getstock

Bring image stock for free from several websites to you.

### Install
```
$ npm install subekti-getstock
$ yarn add subekti-getstock
```

### Example

```
import { Search } from 'subekti-getstock';

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
