![banner](https://raw.githubusercontent.com/Waifu-pics/waifu.js/master/promo/banner.png)

Official minimal JavaScript wrapper for [waifu.pics](https://waifu.pics).
Refer to [the docs](https://waifu.pics/docs) for available endpoints currently in the API

## Installation
```
npm i -s waifu.js
```
## Example
```JS
const client = require('waifu.js')

let api = new client()

async function hello() {
  console.log(await api.sfw.waifu());
}

hello()
```
This returns an image URL as such:
```
https://i.waifu.pics/P817hp4.jpg
```