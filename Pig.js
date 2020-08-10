class Pig {
  constructor(x, y, w, h) {
    const options = {
    'restitution': 0,
      'friction':15
    };
    this.body = Bodies.rectangle(x, y, w, h, options);
    World.add(world, this.body);
    this.w = w;
    this.h = h;
    this.Visiblity = 255;

 

  }


  display() {
    const pos = this.body.position;
    const angle = this.body.angle;
    console.log(this.body.speed);
    if(this.body.speed < 13){
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(box1Img,0, 0, this.w, this.h);
      pop();
    }
    else{
      push();
      World.remove(world, this.body);
      this.Visiblity = this.Visiblity - 10;
      tint(255,this.Visiblity);
      image(box1Img, this.body.position.x, this.body.position.y, 50, 50);
      pop();

    }
    
  }
}
