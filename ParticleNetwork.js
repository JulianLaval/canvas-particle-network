// Create Particle class
var Particle = function (parent) {

  this.canvas = parent.canvas;
  this.ctx = parent.ctx;
  this.particleColor = parent.options.particleColor;

  this.x = Math.random() * this.canvas.width;
  this.y = Math.random() * this.canvas.height;
  this.velocity = {
    x: Math.random() - 0.5,
    y: Math.random() - 0.5
  };
};
Particle.prototype.update = function () {

  // Change dir if outside map
  if (this.x > this.canvas.width + 20 || this.x < -20) {
    this.velocity.x = -this.velocity.x;
  }
  if (this.y > this.canvas.height + 20 || this.y < -20) {
    this.velocity.y = -this.velocity.y;
  }

  // Update position
  this.x += this.velocity.x;
  this.y += this.velocity.y;
};
Particle.prototype.draw = function () {

  // Draw particle
  this.ctx.beginPath();
  this.ctx.fillStyle = this.particleColor;
  this.ctx.globalAlpha = 0.7;
  this.ctx.arc(this.x, this.y, 1.5, 0, 2 * Math.PI);
  this.ctx.fill();
};

// Create ParticleNetwork class
var ParticleNetwork = function (canvas, options) {

  // Create canvas context
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');

  // Set options
  options = options !== undefined ? options : {};
  this.options = {
    particleColor: options.particleColor || '#fff',
    bgColor: options.bgColor || '#1a252f',
    interactive: options.interactive || true
  };

  // Initialise particles
  this.particles = [];
  for (var i = 0; i < this.canvas.width * this.canvas.height / 10000; i++) {
    this.particles.push(new Particle(this));
  }

  if (this.options.interactive) {

    // Add mouse particle if interactive
    this.mouseParticle = new Particle(this);
    this.mouseParticle.velocity = {
      x: 0,
      y: 0
    };
    this.particles.push(this.mouseParticle);

    // Mouse event listeners
    this.canvas.addEventListener('mousemove', function (e) {
      this.mouseParticle.x = e.clientX - this.canvas.offsetLeft;
      this.mouseParticle.y = e.clientY - this.canvas.offsetTop;
    }.bind(this));

    this.canvas.addEventListener('mouseup', function (e) {
      this.mouseParticle.velocity = {
        x: Math.random() - 0.5,
        y: Math.random() - 0.5
      };
      this.mouseParticle = new Particle(this);
      this.mouseParticle.velocity = {
        x: 0,
        y: 0
      };
      this.particles.push(this.mouseParticle);
    }.bind(this));
  }

  // Update canvas
  requestAnimationFrame(this.update.bind(this));
};
ParticleNetwork.prototype.update = function () {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  this.ctx.fillStyle = this.options.bgColor;
  this.ctx.globalAlpha = 1;
  this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

  // Draw particles
  for (var i = 0; i < this.particles.length; i++) {
    this.particles[i].update();
    this.particles[i].draw();

    // Draw connections
    for (var j = this.particles.length - 1; j > i; j--) {
      var distance = Math.sqrt(
        Math.pow(this.particles[i].x - this.particles[j].x, 2)
        + Math.pow(this.particles[i].y - this.particles[j].y, 2)
      );
      if (distance > 120) {
        continue;
      }

      this.ctx.beginPath();
      this.ctx.strokeStyle = this.options.particleColor;
      this.ctx.globalAlpha = (120 - distance) / 120;
      this.ctx.lineWidth = 0.7;
      this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
      this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
      this.ctx.stroke();
    }
  }

  requestAnimationFrame(this.update.bind(this));
};
