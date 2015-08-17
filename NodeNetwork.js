// Create Node class
Node = function(parent){

	this.canvas = parent.canvas;
	this.ctx = parent.ctx;
	this.nodeColor = parent.options.nodeColor;

	this.x = Math.random() * this.canvas.width;
	this.y = Math.random() * this.canvas.height;
	this.velocity = {
		x: Math.random() - 0.5,
		y: Math.random() - 0.5
	};
}
Node.prototype.update = function(){

	// Change dir if outside map
	if(this.x > this.canvas.width + 20 || this.x < - 20){
		this.velocity.x = -this.velocity.x;
	}
	if(this.y > this.canvas.height + 20 || this.y < - 20){
		this.velocity.y = -this.velocity.y;
	}

	// Update position
	this.x += this.velocity.x;
	this.y += this.velocity.y;
}
Node.prototype.draw = function(){

	// Draw node
	this.ctx.beginPath();
	this.ctx.fillStyle = this.nodeColor;
	this.ctx.globalAlpha = 0.7;
	this.ctx.arc(this.x, this.y, 1.5, 0, 2 * Math.PI);
	this.ctx.fill();
}

// Create NodeNetwork class
NodeNetwork = function(canvas, options){

	// Create canvas context
	this.canvas = canvas;
	this.ctx = this.canvas.getContext("2d");

	// Set options
	options = options !== undefined ? options : {};
	this.options = {
		nodeColor: options.nodeColor || '#fff',
		bgColor: options.bgColor || '#1a252f'
	};

	// Initialise nodes
	this.nodes = [];
	for (var i = 0; i < this.canvas.width * this.canvas.height / 10000; i++) {
	  this.nodes.push(new Node(this));
	}
	// Add mouse node
	this.mouseNode = new Node(this);
	this.mouseNode.velocity = { x: 0, y: 0 };
	this.nodes.push(this.mouseNode);

	// Update canvas
	requestAnimationFrame(this.update.bind(this));

	// Mouse event listeners
	this.canvas.addEventListener('mousemove', function(e){
		this.mouseNode.x = e.clientX - this.canvas.offsetLeft;
		this.mouseNode.y = e.clientY - this.canvas.offsetTop;
	}.bind(this));
	this.canvas.addEventListener('mouseup', function(e){
		this.mouseNode.velocity = {
			x: Math.random() - 0.5,
			y: Math.random() - 0.5
		};
		this.mouseNode = new Node(this);
		this.mouseNode.velocity = { x: 0, y: 0 };
		this.nodes.push(this.mouseNode);
	}.bind(this));
};
NodeNetwork.prototype.update = function(){
	this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	this.ctx.fillStyle = this.options.bgColor;
	this.ctx.globalAlpha = 1;
	this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

	// Draw nodes
	for(var i = 0; i < this.nodes.length; i++){
		this.nodes[i].update();
		this.nodes[i].draw();

		// Draw connections
		for(var j = this.nodes.length - 1; j > i; j--){
			var distance = Math.sqrt(
				Math.pow(this.nodes[i].x - this.nodes[j].x, 2) +
				Math.pow(this.nodes[i].y - this.nodes[j].y, 2)
			);
	        if (distance > 120){
	        	continue;
	        }

	        this.ctx.beginPath();
			this.ctx.strokeStyle = this.options.nodeColor;
			this.ctx.globalAlpha = (120 - distance) / 120;
			this.ctx.lineWidth = 0.7;
			this.ctx.moveTo(this.nodes[i].x, this.nodes[i].y);
			this.ctx.lineTo(this.nodes[j].x, this.nodes[j].y);
			this.ctx.stroke();
		}
	}
	
	requestAnimationFrame(this.update.bind(this));
};