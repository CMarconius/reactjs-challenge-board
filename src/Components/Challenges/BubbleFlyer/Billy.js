
function Billy(posX,  posY)
{
	this.x = posX;
	this.y = posY;

	this.imageWidth = 96;
	this.imageHeight = 103;
	this.frameNumber = 9;

	this.spriteSheet = new Image();
	this.spriteSheet.src = 'SpriteSheet_Run_Charged.png';

	this.spriteSheet.x = this.x;
	this.spriteSheet.y = this.y;
}

Billy.prototype.UpdateBilly = function(bubbleAlive)
{
	if(bubbleAlive == false)
	{
		this.resetBilly();
	}
	
	this.drawBilly();
}

Billy.prototype.drawBilly = function()
{
	if (this.x < 200) 
	{
		this.x += 5;
	}
	else
	{
		mScene.SetMoving(true);
	}
	game.ctx.drawImage(this.spriteSheet, this.imageWidth*(this.frameNumber), 0, this.imageWidth, this.imageHeight, 
											this.x, this.y, this.imageWidth*1.5, this.imageWidth*1.5);
	
}


Billy.prototype.resetBilly = function()
{
	this.x = -250;
	this.y = 550;

	this.spriteSheet = new Image();
	this.spriteSheet.src = 'SpriteSheet_Run_Charged.png';

	this.spriteSheet.x = this.x;
	this.spriteSheet.y = this.y;

	mScene.SetMoving(false);
}

Billy.prototype.NextFrame = function() {
	this.frameNumber--;
	if (this.frameNumber == 0) {
		this.frameNumber = 9;
	}

}