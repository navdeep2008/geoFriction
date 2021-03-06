class Rubber{
    constructor(x,y,radius){
    var options = {
    'density' : 1,
    'friction' : 5,
    'restitution' :0.3
    };
    this.body = Bodies.circle(x ,y ,radius);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
    }   
    display(){
    var pos = this.body.position;
    rectMode(CENTER);
    rect(pos.x,pos.y,this.width,this.height);  
    }
    }