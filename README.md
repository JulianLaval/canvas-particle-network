# Canvas Particle Network

[![NPM version](https://img.shields.io/npm/v/canvas-particle-network.svg)](https://www.npmjs.com/package/canvas-particle-network)
[![Bower version](https://img.shields.io/bower/v/canvas-particle-network.svg)](https://github.com/julianlaval/canvas-particle-network)
[![NPM dependencies](https://david-dm.org/julianlaval/canvas-particle-network.svg)](https://david-dm.org/julianlaval/canvas-particle-network)
[![NPM devDependencies](https://david-dm.org/julianlaval/canvas-particle-network/dev-status.svg)](https://david-dm.org/julianlaval/canvas-particle-network#info=devDependencies)
[![NPM total downloads](https://img.shields.io/npm/dt/canvas-particle-network.svg)](https://www.npmjs.com/package/canvas-particle-network)

## Overview

In this experiment, I set out to build a simple, sexy, interactive, and animated particle network using Canvas and JavaScript. Fully plug n' play, modular, and customisable, just drop it in any webpage.

[See it live on CodePen](http://codepen.io/JulianLaval/pen/KpLXOO/)

Alternatively, fork the repo and open `demo.html` to give it a whirl; the minified version comes in at just under a cheeky 4KB uncompressed, and 1.3KB when gzipped!

## Usage

The plugin is available as `canvas-particle-network` via Bower or NPM. Alternatively, you can simply clone this repository.

For a barebones implementation, simply add a HTML `div` to your body. You may specify its dimensions via CSS/JavaScript without any issues, as well as specify multiple instances. Then, simply add the JavaScript file to the end of your `body` and create a `ParticleNetwork` instance using your canvas ID.

```html
<body>
	<div id="particle-canvas"></div>
	<script type="text/javascript" src="particle-network.min.js"></script>
	<script type="text/javascript">
		var particleCanvas = new ParticleNetwork(canvasDiv, options);
	</script>
</body>
```

Additionally, a number of options are supported (see below). Simply append any of these options to your arguments on creation.

```js
var options = {
	particleColor: '#fff',
	background: '#1a252f',
	interactive: true,
	speed: 'fast',
	density: 'medium'
};
var particleCanvas = new ParticleNetwork(document.getElementById('particle-canvas'), options);
```

## Options

#### options.particleColor

Type: `String`
Default: `#ffffff`

Color of the particles. Must be a valid hexadecimal code.

#### options.background

Type: `String`
Default: `#1a252f`

Specifies a background color or image to the canvas. Must be a valid image URL (e.g. `img/demo-bg.jpg`) or hexadecimal code.

#### options.interactive

Type: `Boolean`
Default: `true`

Allow users to click on the canvas to create a new particle. Its velocity will depend on the specified speed (see below).

#### options.speed

Type: `String`
Default: `medium`

Velocity of the particles. Must be one of the following:

* `none`
* `slow`
* `medium`
* `fast`

#### options.density

Type: `String`
Default: `medium`

Density of the particles. Actual amount depends on the canvas size. Must be one of the following:

* `low`
* `medium`
* `high`

## Roadmap

* Have a suggestion? Let me know!

## Acknowledgements

This experiment was inspired by the following resources:

* "About the squad", Nick Ano - [https://dribbble.com/shots/2188571-About-the-squad](https://dribbble.com/shots/2188571-About-the-squad)
* "Particle Network Animations in JS", Alex Wendland - [http://blog.alexwendland.com/2015/particle-network-js-animations/](http://blog.alexwendland.com/2015/particle-network-js-animations/)


## Release History

* **v1.4.0** | 2015-12-17 | AMD & CommonJS module support
* **v1.3.3** | 2015-11-29 | Bug fix on window resizing
* **v1.3.2** | 2015-10-04 | Added files to `bower.json` ignore
* **v1.3.1** | 2015-10-04 | Bumped version due to NPM versioning conflict
* **v1.3.0** | 2015-10-04 | Added NPM and Bower releases
* **v1.2.1** | 2015-10-04 | Minor README fixes
* **v1.2.0** | 2015-10-04 | Replaced `bgColor` option with `background`, added `speed` option, and is now responsive
* **v1.1.0** | 2015-08-18 | Added minified release
* **v1.0.0** | 2015-08-17 | Initial release

## License

The MIT License (MIT)

Copyright (c) 2015 Julian Laval

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

