var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var rect1 = createSprite(50,200,100,200);
rect1.shapeColor = "#32cd32";
var rect2 = createSprite(350,200,100,200);
rect2.shapeColor = "orange";
var boundry1 = createSprite(200,100,400,5);
var boundry2 = createSprite(200,300,400,5);
var player = createSprite(50,200,20,20);
player.shapeColor = "blue";
var car1 = createSprite(125,125,10,10);
car1.shapeColor = "purple";
var car2 = createSprite(175,275,10,10);
car2.shapeColor = "purple";
var car3 = createSprite(225,125,10,10);
car3.shapeColor = "purple";
var car4 = createSprite(275,275,10,10);
car4.shapeColor = "purple";
  car1.velocityY = 7;
  car2.velocityY = -7;
  car3.velocityY = 7;
  car4.velocityY = -7;
  

var lives = 0;















function draw() {
  background("white");
  
  createEdgeSprites();
 player.collide(edges);
  
  car1.bounceOff(boundry1);
  car1.bounceOff(boundry2);
  car2.bounceOff(boundry1);
  car2.bounceOff(boundry2);
  car3.bounceOff(boundry1);
  car3.bounceOff(boundry2);
  car4.bounceOff(boundry1);
  car4.bounceOff(boundry2);
  
  if(keyDown("left")){
    player.x = player.x-5;
  }
  
  if(keyDown("right")){
    player.x = player.x+5;
  } 
  
  if(player.isTouching(car1)
  ||player.isTouching(car2)
  ||player.isTouching(car3)
  ||player.isTouching(car4)){
    player.x = 50;
    lives++;
  }
  
  stroke("black");
textSize(20);
text("Lives: " +lives,300,20);
  
 if(player.isTouching(rect2)){
   
   textSize(20);
   text("You Win",200,50);
 }
 
 
 
  
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
