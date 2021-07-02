class ComputerArcher {
    constructor (x, y, width, height, angle) {
        var options = {
            isStatic: true
          };
          
this.x = x;
this.y = y;
this.width = width;
this.height = height;
this.angle = angle;
this.body = Bodies.rectangle(x, y, this.width, this.height, options);
this.image = loadImage("./assets/playerArcher.png");
Matter.Body.setAngle(this.body,PI/2);
World.add(world, this.body);

    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
    
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}