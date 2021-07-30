var game;
var Difficulty;

var url = "ws://149.153.102.21:8080/test"; // Websocket
var ws = new WebSocket(url);

var message = {}
message.type = "join"

var scoremessage = {}
scoremessage.type = "updateScore"

var player={};
var player1={};
var player2 = {};

var gamestarted = 0;

// onopen occurs when
ws.onopen = function()
{
	//ws.send(JSON.stringify(message));
}

ws.onmessage = function(event)
{
	//this.msg = JSON.parse(event.data);
	//player.data = this.msg["data"];

	//alert(event.data);
}

function Game()
{	
	// Objects
	var billy;
	var mScene;
	var bird1;
	var bubble;
	var score;
	var health;
	var sceneManager;

	var audio;
	var audio2;
	var shockSound;
	var backGroundMusic;

	this.screenWidth = window.innerWidth;
	this.screenHeight = window.innerHeight;

	// For time
	this.startTime = 0;

	// Scene manager
	sceneNo = 3;
	this.level = 1;
	this.time2 = 0;
	HUDTime = 0;

	collisionTimeout = false;

	shockBubbleOn = false;

	lobbyFull = false;
	loaded = false;

	countDone = false;

	player2Score = 0;


}

Game.prototype.initCanvas = function()
{
	this.canvas = document.createElement('canvas');
	this.ctx = this.canvas.getContext('2d');
	document.body.appendChild(this.canvas);
	this.canvas.width = this.screenWidth;
	this.canvas.height = this.screenHeight;

	// For text
	this.ctx.font = 'italic 40pt Calibri';
	this.ctx.fillStyle = 'Yellow';

}

Game.prototype.gameLoop = function()
{
	if (gamestarted == 0) {
		this.timer2 = setTimeout(function(){ resetScore() }, 0);
		this.startTime = Date.now();
		game.time2 = 0;
		HUDTime = 0;
		if (sceneManager.soundOn == true) {
			backGroundMusic.currentTime = 0;
			backGroundMusic.play();
		}
		gamestarted = 1;
	}
	game.ctx.clearRect(0, 0, game.canvas.width, game.canvas.height);
	//console.log("GameLoop");

	window.requestAnimationFrame(game.gameLoop)


	/////Update and Draw here/////
	
	// Go through start screen and menu
	sceneManager.Update(sceneNo);

	// if(sceneNo == 3 && loaded == false)
	// {
	// 	ws.send(JSON.stringify(message));
	// 	loaded = true;
	// }

	// Update play scene
	//if(sceneNo == 3)
	//{
		mScene.UpdateScene();
		//if( lobbyFull == true )//&& countDone == true)
		//{
			billy.UpdateBilly(bubble.alive);
			bird1.UpdateBird(bubble.alive);

			player2Score = player.data;
			//bubble.y = game.screenHeight/2;
		//}
		if (collisionTimeout == false) {
			if (bird1.CollisionDetection(bubble.XPos(), bubble.YPos(), 18.375)) {
				if (shockBubbleOn == false) {
					bubble.DecreaseHealth();
					collisionTimeout = true;
				}
				else {
					bird1.killBird(shockSound);
					score.IncreaseScore();
					if ((score.score % 20) == 0) {
						NextLevel();
					}
				}

				this.timer = setTimeout(function(){ setCollisionTimeout(false) }, 500);
			}
		}
		score.UpdateScore(billy.x, billy.y, bubble.alive, billy.imageHeight);
		health.UpdateHealth(billy.x, billy.y, bubble.alive, billy.imageHeight);
		bubble.UpdateBubble(billy.x, billy.y, audio, sceneManager.soundOn, HUDTime, shockBubbleOn);

		// For optimisation
		if(score.x < billy.x + 100)
		{
			ScoreCollision();
		}
		if(health.x < billy.x + 100)
		{
			HealthCollision();
		}

		// Reset Time
		if(bubble.alive == true)
		{
			game.time2 = Date.now();
			HUDTime = (game.time2-this.startTime)/1000;
		}
		else 
		{
			this.timer2 = setTimeout(function(){ resetScore() }, 1500);
			this.startTime = Date.now();
			game.time2 = 0;
			HUDTime = 0;
			if (sceneManager.soundOn == true) {
				backGroundMusic.currentTime = 0;
				backGroundMusic.play();
			}
		}

		// Check if lobby is full
		//if( player.data == "STARTING GAME")
		//{
		//	lobbyFull = true;
		//}

		// if(lobbyFull == true)
		// {
			// HUD Text
			game.ctx.fillText("Score: " + score.score, 10, 40);
			//game.ctx.fillText("P2: " + player2Score, 200, 40); 
			game.ctx.fillText("Level " + game.level, game.screenWidth/2-100, 40);
			game.ctx.fillText("Time: " + (Date.now()-this.startTime)/1000, game.screenWidth-250, 40);
		// }
		// else
		// {
		// 	game.ctx.fillText("NEED 1 MORE PLAYER", game.screenWidth/2 -225, 40);
		// }

		// Countdown timer
		if( sceneNo == 3 && lobbyFull == true && countDone == false )
		{
			//game.ctx.fillText("Game starting in......" + player.data, game.screenWidth/2-150, game.screenHeight/2);
			if(player.data <= 0)
			{
				countDone = true;
			}
		}
	//}
	
	/////End Update and Draw//////
}

function main()
{
	Difficulty = 3;
	// Create new objects
	game = new Game();
	billy = new Billy(-250, 550);
	mScene = new Scene(this.screenHeight);
	bird1 = new Bird(this.screenWidth + 20, 50)
	bubble = new Bubble(200, 200, 0, -6.0, billy.x, billy.y);
	score = new Score(billy.imageHeight);
	health = new Health(billy.imageHeight);
	sceneManager = new SceneManager();

	game.initCanvas();

	window.setInterval(function () {billyNextFrame()}, 90);

	window.setInterval(function () {bird1NextFrame()}, 50);

	window.setInterval(function () {IncreaseDifficulty()}, 100);

	// Key event
	document.addEventListener("keydown", keyDownHandler)

	touchable = 'createTouch' in document;
	if(touchable) {
        document.addEventListener( 'touchstart', handleStartOfTouch, false );
        //document.addEventListener( 'touchmove', onTouchMove, false );
        //document.addEventListener( 'touchend', onTouchEnd, false );
  	}

  	//document.addEventListener("touchstart", handleStartOfTouch, false);


	audio = new Audio('BubblePop.mp3');
 	audio2 = new Audio('pickup.mp3');
 	shockSound = new Audio('ElectricShock.mp3');
 	backGroundMusic = new Audio('BackGroundMusic.mp3');
	game.gameLoop();
}

function IncreaseDifficulty()
{
	Difficulty += 0.004;
}

function billyNextFrame()
{
	billy.NextFrame();
}

function bird1NextFrame()
{
	bird1.NextFrame();
}

function keyDownHandler(e)
{
	console.log(e.keyCode);

	sceneManager.Key(e);

	bubble.Impulse(e);
}

function playSound()
{
	if(sceneManager.soundOn == true)
	{
		audio2.currentTime = 0;
		audio2.play();
	}
}

function ScoreCollision()
{
	// Circle collision method
	this.distanceX = (score.centreX - bubble.centreX);
	this.distanceY = (score.centreY - bubble.centreY);
	this.radiusSum = bubble.radius + score.radius;

	if( distanceX <= radiusSum && distanceX >= -radiusSum && distanceY <= radiusSum && distanceY >= -radiusSum && score.alive == true)
	{
		playSound();

		score.alive = false;
		score.IncreaseScore();
		if ((score.score % 20) == 0) 
		{
			this.NextLevel();
		}
		score.x = game.screenWidth;
		score.y = Math.floor((Math.random() * game.screenHeight - billy.imageHeight) + 60);
		while(score.y <= 60 || score.y >= billy.y)
		{
			score.y = Math.floor((Math.random() * game.screenHeight - billy.imageHeight) + 0);
		}
		score.alive = true;

		scoremessage.data = {"value": score.score};
		ws.send(JSON.stringify(scoremessage));
	}
}
function HealthCollision()
{
	// Circle collision method
	this.distanceX = (health.centreX - bubble.centreX);
	this.distanceY = (health.centreY - bubble.centreY);
	this.radiusSum = health.radius + score.radius;

	if( distanceX <= radiusSum && distanceX >= -radiusSum && distanceY <= radiusSum && distanceY >= -radiusSum && score.alive == true )
	{

		playSound();

		health.alive = false;
		bubble.IncreaseHealth();
		health.x = game.screenWidth;
		health.y = Math.floor((Math.random() * game.screenHeight - billy.imageHeight) + 60);
		while(health.y <= 60 || health.y >= billy.y)
		{
			health.y = Math.floor((Math.random() * game.screenHeight - billy.imageHeight) + 0);
		}
		health.alive = true;
	}
}

function setCollisionTimeout(bool) {
	this.collisionTimeout = bool;
}

function handleStartOfTouch() {
	sceneManager.TouchKey();
	bubble.TouchImpulse();
}

function resetScore() {
	score.score = 0;
	game.level = 1;
}

function NextLevel() {
	game.level++;
	if (shockBubbleOn == false) {
		shockBubbleOn = true;
	}
	else
		shockBubbleOn = false;
}