function Health(height)
{
	this.x = game.screenWidth + 200;
	this.y = Math.floor((Math.random() * game.screenHeight - height) + 60);
	while(this.y <= 60 || this.y >= billy.y)
	{
		this.y = Math.floor((Math.random() * game.screenHeight - billy.imageHeight) + 0);
	}

	this.centreX = 0;
	this.centreY = 0;
	this.radius = 0;

	this.health = 25;

	this.xVel = -8;
	this.yVel = 0;

	this.alive = true;

	this.imageWidth = 30;
	this.imageHeight = 30;
}

Health.prototype.UpdateHealth = function(billyXPos, billyYPos, bubbleAlive, height)
{
	// Appear when Billy is in place
	if(billyXPos >= 200)
	{
		this.x += this.xVel;
	}

	if(bubbleAlive == false)
	{
		this.resetHealth(billyXPos, billyYPos, height);
	}


	// If goes off screen, reset position
	if(this.x <= -10)
	{
		this.alive = false;
		this.x = game.screenWidth;
		this.y = Math.floor((Math.random() * game.screenHeight - billy.imageHeight) + 0);
		while(this.y <= 60 || this.y >= billyYPos)
		{
			this.y = Math.floor((Math.random() * game.screenHeight - billy.imageHeight) + 0);
		}
		this.alive = true;
	}

	// Centre and radius of bubble
	 this.centreX = this.x + this.imageWidth/2;
	 this.centreY = this.y + this.imageHeight/2;
	 this.radius = this.imageWidth/2;

	 // Draw if alive
	if(this.alive == true)
	{
		this.DrawHealth();
	}
}

Health.prototype.resetHealth = function(billyXPos, billyYPos, height)
{
	this.x = game.screenWidth + 200;
	this.y = Math.floor((Math.random() * game.screenHeight - height) + 60);
	while(this.y <= 60 || this.y >= billy.y)
	{
		this.y = Math.floor((Math.random() * game.screenHeight - billy.imageHeight) + 0);
	}

	this.centreX = 0;
	this.centreY = 0;
	this.radius = 0;

	this.health = 25;

	this.xVel = -6;
	this.yVel = 0;

	this.alive = true;
}

Health.prototype.DrawHealth = function()
{
	game.ctx.drawImage(document.getElementById('health'), this.x, this.y, this.imageWidth, this.imageHeight);
}