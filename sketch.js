const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;



var engine, world;
var box1

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(200,390,400,20)
    box1 = new Box(120,100,50,50)
    box2 = new Box(100,50,50,100)
//  // render start
//      var render = Render.create({
//         element:document.body,
//         engine: engine,
//         options: {
//           width: 400,
//           height: 400,
//           wireframes:false,
//         },
       
//       });
//       Render.run(render);

//       //render end
}

function draw(){
    background(0);
    Engine.update(engine);
     
    box1.display()
    ground.display()
    box2.display()
}