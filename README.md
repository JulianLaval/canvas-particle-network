# Canvas Particle Network

### Overview

In this experiment, I set out to build a sexy, simple, interactive, and animated particle network using Canvas and JavaScript. Fully plug n' play, modular, and customisable, just drop it in any webpage.

Fork the repo and open `demo.html` to give it a whirl, or check it out on [CodePen](http://codepen.io/JulianLaval/pen/KpLXOO/); the minified version comes in at a cheeky 2KB!

### Usage

For a barebones implementation, simply add the JavaScript file to the end of your `body` and create a ParticleNetwork instance using your canvas ID.

```
var particleCanvas = new ParticleNetwork(document.getElementById('particle-canvas'));
``` 

Additionally, you can specify a number of options.

---
**particleColor**  
Type: `string`  
Default: `#fff`  
Hex color of individual particles   

**bgColor**  
Type: `string`  
Default: `#1a252f`  
Hex background color

**interactive**  
Type: `boolean`  
Default: `true`  
Show an additional node on mousehover and add it to the graph on click

--- 

Simply append it to your arguments on creation.

```
var options = {
	particleColor: '#fff',
	bgColor: '#1a252f',
	interactive: true
};
var particleCanvas = new ParticleNetwork(document.getElementById('particle-canvas'), options);
```

### To-do

* Add a `density` option
* Better responsiveness
* Further optimisations & cross-browser stability improvements

### Acknowledgements

This experiment was inspired by the following resources:

* "About the squad", Nick Ano - [https://dribbble.com/shots/2188571-About-the-squad](https://dribbble.com/shots/2188571-About-the-squad)
* "Particle Network Animations in JS", Alex Wendland - [http://blog.alexwendland.com/2015/particle-network-js-animations/](http://blog.alexwendland.com/2015/particle-network-js-animations/)


### Release History

* **v1.0.0** | 2015-08-17 | Initial release
* **v1.1.0** | 2015-08-18 | Added minified release

### License

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

