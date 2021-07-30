function Score(height)
{
	this.x = game.screenWidth + 100;
	this.y = Math.floor((Math.random() * game.screenHeight - height) + 60);
	while(this.y <= 60 || this.y >= billy.y)
	{
		this.y = Math.floor((Math.random() * game.screenHeight - billy.imageHeight) + 0);
	}

	this.centreX = 0;
	this.centreY = 0;
	this.radius = 0;

	this.score = 0;

	this.xVel = -12;
	this.yVel = 0;

	this.alive = true;

	this.imageWidth = 30;
	this.imageHeight = 30;
}

Score.prototype.UpdateScore = function(billyXPos, billyYPos, bubbleAlive, height)
{
	// Appear when Billy is in place
	if(billyXPos >= 200)
	{
		this.x += this.xVel;
	}

	if(bubbleAlive == false)
	{
		this.resetScore(bubbleAlive, height);
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
		this.DrawScore();
	}
}

Score.prototype.resetScore = function(bubbleAlive, height)
{
	this.x = game.screenWidth + 100;
	this.y = Math.floor((Math.random() * game.screenHeight - height) + 60);
	while(this.y <= 60 || this.y >= billy.y)
	{
		this.y = Math.floor((Math.random() * game.screenHeight - billy.imageHeight) + 0);
	}

	this.centreX = 0;
	this.centreY = 0;
	this.radius = 0;

	this.xVel = -12;
	this.yVel = 0;

	this.alive = true;
}

Score.prototype.DrawScore = function()
{
	game.ctx.drawImage(document.getElementById('coin'), this.x, this.y, this.imageWidth, this.imageHeight);
}

Score.prototype.IncreaseScore = function()
{
	this.score += 5;
	
}