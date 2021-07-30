function Scene()
{
	//GrassImage//
	this.grass1 = new Image();
	this.grass1.src = 'GrassImage1.png';
	this.grass_x1 = -2500;
	this.grass_x2 = 500;
	this.grass_y1 = 640;
	this.grass_y2 = 640;
	//----------//

	//ScrollingTrees//
	this.ScrollingTrees = new Image();
	this.ScrollingTrees.src = 'TreesImage1.png';
	this.Trees_x1 = -2700;
	this.Trees_x2 = 100;
	this.Trees_y1 = 410;
	this.Trees_y2 = 410;
	//--------------//

	//ScrollingSky//
	this.ScrollingSky = new Image();
	this.ScrollingSky.src = 'SkyImage1.png';
	this.Sky_x1 = -1800;
	this.Sky_x2 = 200;
	this.Sky_y1 = 0;
	this.Sky_y2 = 0;
	//--------------//

	this.sceneScrolling = false;
}

//===============================================================================//
//===============================================================================//

Scene.prototype.drawScene = function()
{
	//GrassImage//
	game.ctx.drawImage(this.ScrollingSky, this.Sky_x1, this.Sky_y1);
	game.ctx.drawImage(this.ScrollingSky, this.Sky_x2, this.Sky_y2);
	//----------//

	//ScrollingTrees//
	game.ctx.drawImage(this.ScrollingTrees, this.Trees_x1, this.Trees_y1);
	game.ctx.drawImage(this.ScrollingTrees, this.Trees_x2, this.Trees_y2);
	//--------------//

	//GrassImage//
	game.ctx.drawImage(this.grass1, this.grass_x1, this.grass_y1);
	game.ctx.drawImage(this.grass1, this.grass_x2, this.grass_y2);
	//----------//

	game.ctx.drawImage(document.getElementById('grass'), 0, -100, 3000, 150);
}

//===============================================================================//
//===============================================================================//

Scene.prototype.UpdateScene = function()
{
	this.UpdateSky();
	this.UpdateGrass();
	this.UpdateTrees();

	this.drawScene();
}

//===============================================================================//
//===============================================================================//

Scene.prototype.SetMoving = function(mBool)
{
	this.sceneScrolling = mBool;
}

//===============================================================================//
//===============================================================================//

Scene.prototype.UpdateGrass = function()
{	
	if (this.sceneScrolling == true)
	{
		this.grass_x1 -= 5 * Difficulty;
		this.grass_x2 -= 5 * Difficulty;
	}
	if (this.grass_x1 <= -3050)
	{
		this.grass_x1 = this.grass_x2 + 3000;
	}
	if (this.grass_x2 <= -3050)
	{
		this.grass_x2 = this.grass_x1 + 3000;
	}
}

//===============================================================================//
//===============================================================================//

Scene.prototype.UpdateTrees = function()
{	
	if (this.sceneScrolling == true)
	{
		this.Trees_x1 -= 3 * Difficulty;
		this.Trees_x2 -= 3 * Difficulty;
	}
	if (this.Trees_x1 <= -2850)
	{
		this.Trees_x1 = this.Trees_x2 + 2800;
	}
	if (this.Trees_x2 <= -2850)
	{
		this.Trees_x2 = this.Trees_x1 + 2800;
	}
}

//===============================================================================//
//===============================================================================//

Scene.prototype.UpdateSky = function()
{	
	if (this.sceneScrolling == true)
	{
		this.Sky_x1 -= 1 * Difficulty;
		this.Sky_x2 -= 1 * Difficulty;
	}
	if (this.Sky_x1 <= -2050)
	{
		this.Sky_x1 = this.Sky_x2 + 2000;
	}
	if (this.Sky_x2 <= -2050)
	{
		this.Sky_x2 = this.Sky_x1 + 2000;
	}
}