<p align="center">
  <img src="https://raw.githubusercontent.com/maxflex/v-number/master/public/img/logo.png" width="120">
</p>

# V-Number
### Animated number transition library for Vue.js

Simple lightweight library for smooth horizontal number transitions

[LIVE DEMO](https://maxflex.github.io/v-number/)

<img src="https://raw.githubusercontent.com/maxflex/v-number/master/public/img/preview.gif">

## Installation
```
yarn add @maxflex/v-number
// or
npm install @maxflex/v-number
```
## Usage
Just import:
```js
import { VNumber } from '@maxflex/v-number'
```

And use:
```html
<v-number v-model='someNumber'></v-number>
```

## Customization
You can set custom animation speed in ms:
```html
<v-number :speed='2000' v-model='someNumber'></v-number>
```