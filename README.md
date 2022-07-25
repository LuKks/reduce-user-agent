# reduce-user-agent

Remove repetitive patterns in User-Agent header.

![](https://img.shields.io/npm/v/reduce-user-agent.svg) ![](https://img.shields.io/npm/dt/reduce-user-agent.svg) ![](https://img.shields.io/badge/tested_with-tape-e683ff.svg) ![](https://img.shields.io/github/license/LuKks/reduce-user-agent.svg)

```
npm i reduce-user-agent
```

Some common texts are:
- `Mozilla/5.0`
- `AppleWebKit/*`
- `(KHTML, like Gecko)`
- `Safari/537.36`
- `Gecko/*`

It will also remove all kind of double or unnecessary spaces.

## Usage
```javascript
const reduceUA = require('reduce-user-agent')

const chrome = reduceUA('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36')
console.log(chrome) // => '(Windows NT 10.0; Win64; x64) Chrome/99.0.4844.51'

const firefox = reduceUA('Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:98.0) Gecko/20100101 Firefox/98.0')
console.log(firefox) // => '(Windows NT 10.0; Win64; x64; rv:98.0) Firefox/98.0'

const safari = reduceUA('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.3 Safari/605.1.15')
console.log(safari) // => '(Macintosh; Intel Mac OS X 10_15_7) Version/15.3 Safari/605.1.15'

const edge = reduceUA('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36 Edg/99.0.1150.46')
console.log(edge) // => '(Windows NT 10.0; Win64; x64) Chrome/99.0.4844.74 Edg/99.0.1150.46'

const samsung = reduceUA('Mozilla/5.0 (Linux; Android 10; SAMSUNG SM-N975U1) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/11.0 Chrome/75.0.3770.143 Mobile Safari/537.36')
console.log(samsung) // => '(Linux; Android 10; SAMSUNG SM-N975U1) SamsungBrowser/11.0 Chrome/75.0.3770.143 Mobile'

const opera = reduceUA('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.109 Safari/537.36 OPR/84.0.4316.31')
console.log(opera) // => '(Windows NT 10.0; Win64; x64) Chrome/98.0.4758.109 OPR/84.0.4316.31'

const yandex = reduceUA('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.119 YaBrowser/22.3.0.2430 Yowser/2.5 Safari/537.36')
console.log(yandex) // => '(Windows NT 10.0; Win64; x64) Chrome/98.0.4758.119 YaBrowser/22.3.0.2430 Yowser/2.5'
```

## License
MIT
