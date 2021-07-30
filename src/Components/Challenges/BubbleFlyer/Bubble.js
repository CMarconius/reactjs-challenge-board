function Bubble(xPos, yPos, xVelocity, yVelocity, billyXPos, billyYPos)
{
	this.x = 0;
	this.y = 0;

	this.centreX = 0;
	this.centreY = 0;
	this.radius  = 0;

	this.yVel = yVelocity;

	this.imageWidth  = 12.25;
	this.imageHeight = 12.5;

	this.alive  = true;

	this.health = 100;
}

Bubble.prototype.UpdateBubble = function(billyXPos, billyYPos, audio, soundOn, HUDTime, shockOn)
{

	if(this.alive == false)
	{
		this.resetBubble();
	}

	if(this.health <= 0)
	{
		audio.currentTime = 0;
		audio.play();
		this.alive = false;
	}

	// Track position of ball to Billy
	if(billyXPos < 200)
	{
		this.x = billyXPos + 92;
		this.y = billyYPos + 15;
	}

	// Increase size
	if (billyXPos >= 200) 
	{
		if(this.imageWidth   <= 24.5)
		{
			this.imageWidth  += 1;
		}
		if(this.imageHeight  <= 25)
		{
			this.imageHeight += 1;
		}
	}

	// Move 
	this.y += this.yVel;
	//this.yVel += this.gravity;

	// If hit top
	 if(this.y <= 50)
	 {
	 	this.y = 50;
	 	this.yVel *= -1.0;
	 }

	 // If goes below machine
	 if(this.y >= billyYPos + 20)
	 {
	 	if(this.alive == true && soundOn == true)
	 	{
	 		audio.play();
	 	}
	 	this.alive = false;
	 }

	 // Centre of bubble
	 this.centreX = this.x + (this.imageWidth  * 1.5 ) / 2;
	 this.centreY = this.y + (this.imageHeight * 1.5 ) / 2;
	 this.radius  = (this.imageWidth * 1.5 ) / 2 ;

	 // Draw when Billy is in place
	  if(billyXPos >= 200 && this.alive == true)
	  {
	  	this.DrawBubble(billyXPos, shockOn);
	  }
}

Bubble.prototype.resetBubble = function()
{
	this.x = 0;
	this.y = 0;

	this.centreX = 0;
	this.centreY = 0;
	this.radius = 0;

	this.xVel = 0;
	this.yVel = -6.0;

	this.imageWidth = 12.25;
	this.imageHeight = 12.5;

	this.health = 100;

	this.alive = true;

	Difficulty = 3;
}

Bubble.prototype.DrawBubble = function(billyXPos, shockOn)
{
	if (shockOn == true)
		game.ctx.drawImage(document.getElementById('bubbleE'), this.x, this.y, this.imageWidth*1.5, this.imageHeight*1.5);
	else if (this.health == 100) 
		game.ctx.drawImage(document.getElementById('bubbleG'), this.x, this.y, this.imageWidth*1.5, this.imageHeight*1.5);
	else if (this.health == 75) 
		game.ctx.drawImage(document.getElementById('bubbleY'), this.x, this.y, this.imageWidth*1.5, this.imageHeight*1.5);
	else if (this.health == 50) 
		game.ctx.drawImage(document.getElementById('bubbleO'), this.x, this.y, this.imageWidth*1.5, this.imageHeight*1.5);
	else if (this.health == 25) 
		game.ctx.drawImage(document.getElementById('bubbleR'), this.x, this.y, this.imageWidth*1.5, this.imageHeight*1.5);
}

Bubble.prototype.Impulse = function(e)
{
	if(e.keyCode    ==  32)// Spacebar
	{
		this.yVel   *=  -1;
	} 
	if(e.keyCode    ==  38)
	{
		this.health +=  25;
	}
	if(e.keyCode    ==  40)
	{
		this.health -=  25;
	}
}
Bubble.prototype.TouchImpulse = function()
{
	this.yVel   *=  -1;
}
Bubble.prototype.XPos = function(e)
{
	return this.x;
}

Bubble.prototype.YPos = function(e)
{
	return this.y;
}

Bubble.prototype.IncreaseHealth = function()
{

		console.log("healthincrease");
		if (this.health < 100 ) {
			this.health += 25;	
		}		
}
Bubble.prototype.DecreaseHealth = function()
{
	this.health -= 50;
}

Bubble.prototype.GetHealth = function() 
{
	return this.health;
}