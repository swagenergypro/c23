// class Ground {

//     constructor (x,y,width,height) {
    
//         var options = {
    
//         isStatic : true

     
//         }
    
//         this.width=width;
//         this.height=height;
//         this.body = Bodies.rectangle(x,y,width,height,options);
//         World.add(world,this.body);
    
//     }
    
    
    
//     display(){
        
//         var pos = this.body.position;
//         rectMode(CENTER);
//         fill("orange");
//         rect(pos.x,pos.y,this.width,this.height)
    
        
    
//     }
    
    
    
    
// }

class Ground{

    constructor(x,y,width,height){

        var options = {
            
            isStatic: true
        }

        this.body=Bodies.rectangle(x,y,width,height,options);
        
        this.width = width;
        this.height = height;

    


        World.add(world,this.body);
        }

    display(){

        var pos = this.body.position;
        rectMode(CENTER);
        fill(160);
        rect(pos.x,pos.y,this.width,this.height)
 

        //rec(0,0,this.width,this.height);     



    }






}