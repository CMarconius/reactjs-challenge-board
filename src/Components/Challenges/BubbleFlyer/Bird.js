
function Bird(posX,  posY)
{
	this.x = posX;
	this.y = posY;

	this.imageWidth = 76;
	this.imageHeight = 86;
	this.frameNumber = 0;

	this.spriteSheet = new Image();
	this.spriteSheet.src = 'Bird1Image.png';

	this.spriteSheet.x = this.x;
	this.spriteSheet.y = this.y;
	this.collidedWithBubble = false;
}

Bird.prototype.UpdateBird = function(bubbleAlive)
{	
	if(bubbleAlive == false)
	{
		this.resetBird();
	}
	if (this.x > -100) 
	{
		this.x -= 5 * Difficulty;
	}
	else
	{
		this.x = 2000;
		this.y = Math.floor((Math.random() * 450) + 10);
	}

	this.drawBird();
}

Bird.prototype.drawBird = function()
{
	game.ctx.drawImage(this.spriteSheet, this.imageWidth*(this.frameNumber), 0, this.imageWidth, this.imageHeight, 
											this.x, this.y, this.imageWidth*1.5, this.imageWidth*1.5);	
}

Bird.prototype.NextFrame = function() {
	this.frameNumber++;
	if (this.frameNumber == 15) {
		this.frameNumber = 0;
	}
}

	// a = circle
	// b = this.
Bird.prototype.CollisionDetection = function(circle_X, circle_Y, bubble_diameter ) {
			//						if (/ 	     R1 		 	R1-width	)
		// return ((circle_X <= this.x && circle_X+bubble_diameter >= this.x) &&
		// 		(circle_Y <= this.y && circle_Y+bubble_diameter >= this.y)) ;

	//return (circle_X < this.x + 114 && this.x < circle_X + bubble_diameter && circle_Y < this.Y + 114);

	return (circle_X 	<= this.x 	+ 114 				&&
	        this.x   	<= circle_X + bubble_diameter 	&&
	        circle_Y+10 <= this.y 	+ 100 				&&
	        this.y  	<= circle_Y + bubble_diameter);


}


Bird.prototype.resetBird = function()
{
	this.x = 2000;
	this.y = (Math.random() * 450) + 10;

	this.spriteSheet = new Image();
	this.spriteSheet.src = 'Bird1Image.png';

	this.spriteSheet.x = this.x;
	this.spriteSheet.y = this.y;

}

Bird.prototype.killBird = function(shockSound)
{
	this.resetBird();
	shockSound.currentTime = 0;
	shockSound.play();
}




Bird.prototype.GetCollided = function() {
	return this.collidedWithBubble;
}


