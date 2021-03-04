class Hammer{
    constructor(x,y,width,height){
    var options = {
    'density' : 2
    'friction' : 1.0
    'restitution' 0.5
    };
    this.body = Bodies.rectangle(x ,y,width,height,body_options);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
    }   
    display(){
    var pos = this.body.position;
    fill(255);
    rectMode(CENTER);
    rect(pos.x,pos.y,this.width,this.height);  
    }
    }