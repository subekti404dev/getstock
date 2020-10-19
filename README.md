# getstock

Bring image stock for free from several websites to you.

### Install
```
$ npm install @subekti/getstock
$ yarn add @subekti/getstock
```

### Example

```
import { Search } from '@subekti/getstock';

Search
  .getData(keyword, options)
  .then(data => {
    console.log(data);
  });

```

### Parameters

```
keyword                string
options
 - options.page        number
 - options.perPage     number
 - options.type        'pexels' | 'pixabay' | 'unsplash'

```
