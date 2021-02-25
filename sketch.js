function setup(){

createCanvas(800,400);
createSprite(400,200,50,50);	
}

function draw(){
    background(255,255,255);
	
	block8 = new Block(330,235,30,40);
	block9 = new block(360,235,30,40);
	block10 = new block(390,235,30,40);
	block11 = new block(420,235,30,40);
	block12 = new block(450,235,30,40);
	
	block13 = new block (360,195,30,40);
	block14 = new block(390,195,30,40);
	block15 = new block(420,195,30,40);
	
	block16 = new block(390,155,30,40);
	
	
	ploygon = bodies.circle(50,200,20);
	world.add(world,polygon);
	
	slingShot = new slingshot(this.poygon,{x:100,y:200});
	
	imageMode(CENTER)
	image(polygon_img,polygon.position.x,polygon.posiyion.y,40,40);
	
	
	drawSprites();  
}

