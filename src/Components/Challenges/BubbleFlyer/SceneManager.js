function SceneManager()
{
	this.x = game.screenWidth/2 -240;
	this.y = game.screenHeight/2 -300;

	this.imageWidth = 445;
	this.imageHeight = 69;

	this.soundOn = true;

	this.time = 0;

	this.multiplayer = false;
}

SceneManager.prototype.Update = function(sceneNo)
{
	this.time += 1;
	if(this.time >= 120 && sceneNo < 3)
	{
		sceneNo = 2;
	}

	this.Draw(sceneNo);
}

SceneManager.prototype.Key = function(e)
{
	if(e.keyCode == 32)// Space key
	{
		if(sceneNo < 3)
		{
			sceneNo = 3;
			game.startTime = Date.now();
			this.multiplayer = true;
		}
	}
	if(e.keyCode == 77) // 'M' for multiplayer
	{
		if(sceneNo < 3)
		{
			sceneNo = 3;
			game.startTime = Date.now();
			this.multiplayer = true;
		}
	}
	if(e.keyCode == 79)// O
	{
		sceneNo = 4;// Options scene
	}
	if(e.keyCode == 82)// R
	{
		sceneNo = 2;// Main menu
	}

	if(e.keyCode == 84)// T
	{
		this.soundOn = true;
	}
	else if(e.keyCode == 70)// F
	{
		this.soundOn = false;
	}
}

SceneManager.prototype.TouchKey = function()
{
	if(sceneNo < 3)
	{
		sceneNo = 3;
		game.startTime = Date.now();
		this.multiplayer = true;
	}
}

SceneManager.prototype.Draw = function(sceneNo)
{
	if(sceneNo == 1)
	{
		game.ctx.drawImage(document.getElementById('sky'), 0, 0, 2000, 1200);
		game.ctx.drawImage(document.getElementById('grass'), 0, game.screenHeight-50, 3000, 150);
		game.ctx.drawImage(document.getElementById('bubblemenu'), game.screenWidth/2 -150, game.screenHeight/2 -200, 234, 209);
		game.ctx.drawImage(document.getElementById('created'), 100, game.screenHeight-150, 481, 24*2);
		game.ctx.drawImage(document.getElementById('maintext'), this.x, this.y, this.imageWidth, this.imageHeight);
	}
	if(sceneNo == 2)
	{
		game.ctx.drawImage(document.getElementById('sky'), 0, 0, 2000, 1200);
		game.ctx.drawImage(document.getElementById('grass'), 0, game.screenHeight-50, 3000, 150);
		game.ctx.drawImage(document.getElementById('maintext'), this.x, this.y, this.imageWidth, this.imageHeight);

		game.ctx.drawImage(document.getElementById('startbutton'), game.screenWidth/2 -130, game.screenHeight/2 -200, 207, 38);
		game.ctx.drawImage(document.getElementById('MultiplayerBtn'), game.screenWidth/2 -250, game.screenHeight/2 -60, 463, 37);
		game.ctx.drawImage(document.getElementById('optionsbutton'), game.screenWidth/2 -100, game.screenHeight/2 + 80, 142, 38);
	}
	if(sceneNo == 4)
	{
		game.ctx.drawImage(document.getElementById('sky'), 0, 0, 2000, 1200);
		game.ctx.drawImage(document.getElementById('grass'), 0, game.screenHeight-50, 3000, 150);
		game.ctx.drawImage(document.getElementById('maintext'), this.x, this.y, this.imageWidth, this.imageHeight);

		if(this.soundOn == true)
		{
			game.ctx.fillText("Sound:", game.screenWidth/2 -270, game.screenHeight/2 -100);
			game.ctx.drawImage(document.getElementById('onClicked'), game.screenWidth/2 -100, game.screenHeight/2 - 125, 53, 30);
			game.ctx.fillText("/", game.screenWidth/2 -30, game.screenHeight/2 -100);
			game.ctx.drawImage(document.getElementById('offNotClicked'), game.screenWidth/2, game.screenHeight/2 - 125, 57, 30);
			game.ctx.fillText("Return to main menu", 50, game.screenHeight -100);
		}
		else if(this.soundOn == false)
		{
			game.ctx.fillText("Sound:", game.screenWidth/2 -270, game.screenHeight/2 -100);
			game.ctx.drawImage(document.getElementById('onNotClicked'), game.screenWidth/2 -100, game.screenHeight/2 - 125, 53, 30);
			game.ctx.fillText("/", game.screenWidth/2 -30, game.screenHeight/2 -100);
			game.ctx.drawImage(document.getElementById('offClicked'), game.screenWidth/2, game.screenHeight/2 - 125, 57, 30);
			game.ctx.fillText("Return to main menu", 50, game.screenHeight -100);
		}
	}
	
}