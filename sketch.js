var starImg,bgImg;
var star, starBody;

//criar variável para sprite de fada e imgFada
var fada,fadaimg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    //carregar animação de fada 
    fadaimg = loadAnimation("images/fairyImage1.png,fairyImage2.png")

}

function setup() {
    createCanvas(800, 750);

    //escrever código para tocar o som vozFada

    //criar sprite de fada e adicionar animação para fada

    fada = createSprite(50,700,50,50)
    fada.addAnimation(fadaimg)


    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);



}
function draw() {

background(bgImg)





}
