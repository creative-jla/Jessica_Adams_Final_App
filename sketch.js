var rectColor = [0,0,0];
var d;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  d = select('.div-block');
  d.position(0,0);
  
  gui = new Gui();
  
  let gui_setup = new dat.GUI();
  gui_setup.add(gui,'description').onChange(description);
  gui_setup.add(gui,'size',50,1500).step(1).onChange(update);
  gui_setup.add(gui,'squares',1,10).step(1).onChange(update);
  gui_setup.add(gui,'stroke',1,5).step(1).onChange(update);
  gui_setup.add(gui,'nostroke').onChange(update);
  gui_setup.addColor(gui,'strokecolor').onChange(update);
  gui_setup.add(gui,'colorfill').onChange(update);
  gui_setup.addColor(gui,'backcolor').onChange(update);
  
  rectColor[0] = random(0,255);
  rectColor[1] = random(0,255);
  rectColor[2] = random(0,255);

}

function draw() {
  noLoop();
  background(gui.backcolor);
  rectFormat();
  rectStroke();
  
  //if statements
  if (gui.squares == 1){
    //tl
    rect(0,0,gui.size,gui.size,15);
    //tr
    rect(windowWidth-gui.size,0,gui.size,gui.size,15);
    //bl
    rect(0,windowHeight-gui.size,gui.size,gui.size,15);
    //br
    rect(windowWidth-gui.size,windowHeight-gui.size,gui.size,gui.size,15);

  }
  if (gui.squares == 2){
    //tl
    rect(0,0,gui.size,gui.size,15);
    rect(0,0,gui.size+25,gui.size+25,15);
    //tr
    rect(windowWidth-gui.size,0,gui.size,gui.size,15);
    rect(windowWidth-gui.size-25,0,gui.size+25,gui.size+25,15);
    //bl
    rect(0,windowHeight-gui.size,gui.size,gui.size,15);
    rect(0,windowHeight-gui.size-25,gui.size+25,gui.size+25,15);
    //br
    rect(windowWidth-gui.size,windowHeight-gui.size,gui.size,gui.size,15);
    rect(windowWidth-gui.size-25,windowHeight-gui.size-25,gui.size+25,gui.size+25,15);
  }
  if (gui.squares == 3){
    //tl
    rect(0,0,gui.size,gui.size,15);
    rect(0,0,gui.size+25,gui.size+25,15);
    rect(0,0,gui.size+50,gui.size+50,15);
    //tr
    rect(windowWidth-gui.size,0,gui.size,gui.size,15);
    rect(windowWidth-gui.size-25,0,gui.size+25,gui.size+25,15);
    rect(windowWidth-gui.size-50,0,gui.size+50,gui.size+50,15);
    //bl
    rect(0,windowHeight-gui.size,gui.size,gui.size,15);
    rect(0,windowHeight-gui.size-25,gui.size+25,gui.size+25,15);
    rect(0,windowHeight-gui.size-50,gui.size+50,gui.size+50,15);
    //br
    rect(windowWidth-gui.size,windowHeight-gui.size,gui.size,gui.size,15);
    rect(windowWidth-gui.size-25,windowHeight-gui.size-25,gui.size+25,gui.size+25,15);
    rect(windowWidth-gui.size-50,windowHeight-gui.size-50,gui.size+50,gui.size+50,15);
  }
  if (gui.squares == 4){
    //tl
    rect(0,0,gui.size,gui.size,15);
    rect(0,0,gui.size+25,gui.size+25,15);
    rect(0,0,gui.size+50,gui.size+50,15);
    rect(0,0,gui.size+75,gui.size+75,15);
    //tr
    rect(windowWidth-gui.size,0,gui.size,gui.size,15);
    rect(windowWidth-gui.size-25,0,gui.size+25,gui.size+25,15);
    rect(windowWidth-gui.size-50,0,gui.size+50,gui.size+50,15);
    rect(windowWidth-gui.size-75,0,gui.size+75,gui.size+75,15);
    //bl
    rect(0,windowHeight-gui.size,gui.size,gui.size,15);
    rect(0,windowHeight-gui.size-25,gui.size+25,gui.size+25,15);
    rect(0,windowHeight-gui.size-50,gui.size+50,gui.size+50,15);
    rect(0,windowHeight-gui.size-75,gui.size+75,gui.size+75,15);
    //br
    rect(windowWidth-gui.size,windowHeight-gui.size,gui.size,gui.size,15);
    rect(windowWidth-gui.size-25,windowHeight-gui.size-25,gui.size+25,gui.size+25,15);
    rect(windowWidth-gui.size-50,windowHeight-gui.size-50,gui.size+50,gui.size+50,15);
    rect(windowWidth-gui.size-75,windowHeight-gui.size-75,gui.size+75,gui.size+75,15);
  }
  if (gui.squares == 5){
    //tl
    rect(0,0,gui.size,gui.size,15);
    rect(0,0,gui.size+25,gui.size+25,15);
    rect(0,0,gui.size+50,gui.size+50,15);
    rect(0,0,gui.size+75,gui.size+75,15);
    rect(0,0,gui.size+100,gui.size+100,15);
    //tr
    rect(windowWidth-gui.size,0,gui.size,gui.size,15);
    rect(windowWidth-gui.size-25,0,gui.size+25,gui.size+25,15);
    rect(windowWidth-gui.size-50,0,gui.size+50,gui.size+50,15);
    rect(windowWidth-gui.size-75,0,gui.size+75,gui.size+75,15);
    rect(windowWidth-gui.size-100,0,gui.size+100,gui.size+100,15);
    //bl
    rect(0,windowHeight-gui.size,gui.size,gui.size,15);
    rect(0,windowHeight-gui.size-25,gui.size+25,gui.size+25,15);
    rect(0,windowHeight-gui.size-50,gui.size+50,gui.size+50,15);
    rect(0,windowHeight-gui.size-75,gui.size+75,gui.size+75,15);
    rect(0,windowHeight-gui.size-100,gui.size+100,gui.size+100,15);
    //br
    rect(windowWidth-gui.size,windowHeight-gui.size,gui.size,gui.size,15);
    rect(windowWidth-gui.size-25,windowHeight-gui.size-25,gui.size+25,gui.size+25,15);
    rect(windowWidth-gui.size-50,windowHeight-gui.size-50,gui.size+50,gui.size+50,15);
    rect(windowWidth-gui.size-75,windowHeight-gui.size-75,gui.size+75,gui.size+75,15);
    rect(windowWidth-gui.size-100,windowHeight-gui.size-100,gui.size+100,gui.size+100,15);
  }
  if (gui.squares == 6){
    //tl
    rect(0,0,gui.size,gui.size,15);
    rect(0,0,gui.size+25,gui.size+25,15);
    rect(0,0,gui.size+50,gui.size+50,15);
    rect(0,0,gui.size+75,gui.size+75,15);
    rect(0,0,gui.size+100,gui.size+100,15);
    rect(0,0,gui.size+125,gui.size+125,15);
    //tr
    rect(windowWidth-gui.size,0,gui.size,gui.size,15);
    rect(windowWidth-gui.size-25,0,gui.size+25,gui.size+25,15);
    rect(windowWidth-gui.size-50,0,gui.size+50,gui.size+50,15);
    rect(windowWidth-gui.size-75,0,gui.size+75,gui.size+75,15);
    rect(windowWidth-gui.size-100,0,gui.size+100,gui.size+100,15);
    rect(windowWidth-gui.size-125,0,gui.size+125,gui.size+125,15);
    //bl
    rect(0,windowHeight-gui.size,gui.size,gui.size,15);
    rect(0,windowHeight-gui.size-25,gui.size+25,gui.size+25,15);
    rect(0,windowHeight-gui.size-50,gui.size+50,gui.size+50,15);
    rect(0,windowHeight-gui.size-75,gui.size+75,gui.size+75,15);
    rect(0,windowHeight-gui.size-100,gui.size+100,gui.size+100,15);
    rect(0,windowHeight-gui.size-125,gui.size+125,gui.size+125,15);
    //br
    rect(windowWidth-gui.size,windowHeight-gui.size,gui.size,gui.size,15);
    rect(windowWidth-gui.size-25,windowHeight-gui.size-25,gui.size+25,gui.size+25,15);
    rect(windowWidth-gui.size-50,windowHeight-gui.size-50,gui.size+50,gui.size+50,15);
    rect(windowWidth-gui.size-75,windowHeight-gui.size-75,gui.size+75,gui.size+75,15);
    rect(windowWidth-gui.size-100,windowHeight-gui.size-100,gui.size+100,gui.size+100,15);
    rect(windowWidth-gui.size-125,windowHeight-gui.size-125,gui.size+125,gui.size+125,15);
    }
  if (gui.squares == 7){
    //tl
    rect(0,0,gui.size,gui.size,15);
    rect(0,0,gui.size+25,gui.size+25,15);
    rect(0,0,gui.size+50,gui.size+50,15);
    rect(0,0,gui.size+75,gui.size+75,15);
    rect(0,0,gui.size+100,gui.size+100,15);
    rect(0,0,gui.size+125,gui.size+125,15);
    rect(0,0,gui.size+150,gui.size+150,15);
    //tr
    rect(windowWidth-gui.size,0,gui.size,gui.size,15);
    rect(windowWidth-gui.size-25,0,gui.size+25,gui.size+25,15);
    rect(windowWidth-gui.size-50,0,gui.size+50,gui.size+50,15);
    rect(windowWidth-gui.size-75,0,gui.size+75,gui.size+75,15);
    rect(windowWidth-gui.size-100,0,gui.size+100,gui.size+100,15);
    rect(windowWidth-gui.size-125,0,gui.size+125,gui.size+125,15);
    rect(windowWidth-gui.size-150,0,gui.size+150,gui.size+150,15);
    //bl
    rect(0,windowHeight-gui.size,gui.size,gui.size,15);
    rect(0,windowHeight-gui.size-25,gui.size+25,gui.size+25,15);
    rect(0,windowHeight-gui.size-50,gui.size+50,gui.size+50,15);
    rect(0,windowHeight-gui.size-75,gui.size+75,gui.size+75,15);
    rect(0,windowHeight-gui.size-100,gui.size+100,gui.size+100,15);
    rect(0,windowHeight-gui.size-125,gui.size+125,gui.size+125,15);
    rect(0,windowHeight-gui.size-150,gui.size+150,gui.size+150,15);
    //br
    rect(windowWidth-gui.size,windowHeight-gui.size,gui.size,gui.size,15);
    rect(windowWidth-gui.size-25,windowHeight-gui.size-25,gui.size+25,gui.size+25,15);
    rect(windowWidth-gui.size-50,windowHeight-gui.size-50,gui.size+50,gui.size+50,15);
    rect(windowWidth-gui.size-75,windowHeight-gui.size-75,gui.size+75,gui.size+75,15);
    rect(windowWidth-gui.size-100,windowHeight-gui.size-100,gui.size+100,gui.size+100,15);
    rect(windowWidth-gui.size-125,windowHeight-gui.size-125,gui.size+125,gui.size+125,15);
    rect(windowWidth-gui.size-150,windowHeight-gui.size-150,gui.size+150,gui.size+150,15);
    }
  if (gui.squares == 8){
    //tl
    rect(0,0,gui.size,gui.size,15);
    rect(0,0,gui.size+25,gui.size+25,15);
    rect(0,0,gui.size+50,gui.size+50,15);
    rect(0,0,gui.size+75,gui.size+75,15);
    rect(0,0,gui.size+100,gui.size+100,15);
    rect(0,0,gui.size+125,gui.size+125,15);
    rect(0,0,gui.size+150,gui.size+150,15);
    rect(0,0,gui.size+175,gui.size+175,15);
    //tr
    rect(windowWidth-gui.size,0,gui.size,gui.size,15);
    rect(windowWidth-gui.size-25,0,gui.size+25,gui.size+25,15);
    rect(windowWidth-gui.size-50,0,gui.size+50,gui.size+50,15);
    rect(windowWidth-gui.size-75,0,gui.size+75,gui.size+75,15);
    rect(windowWidth-gui.size-100,0,gui.size+100,gui.size+100,15);
    rect(windowWidth-gui.size-125,0,gui.size+125,gui.size+125,15);
    rect(windowWidth-gui.size-150,0,gui.size+150,gui.size+150,15);
    rect(windowWidth-gui.size-175,0,gui.size+175,gui.size+175,15);
    //bl
    rect(0,windowHeight-gui.size,gui.size,gui.size,15);
    rect(0,windowHeight-gui.size-25,gui.size+25,gui.size+25,15);
    rect(0,windowHeight-gui.size-50,gui.size+50,gui.size+50,15);
    rect(0,windowHeight-gui.size-75,gui.size+75,gui.size+75,15);
    rect(0,windowHeight-gui.size-100,gui.size+100,gui.size+100,15);
    rect(0,windowHeight-gui.size-125,gui.size+125,gui.size+125,15);
    rect(0,windowHeight-gui.size-150,gui.size+150,gui.size+150,15);
    rect(0,windowHeight-gui.size-175,gui.size+175,gui.size+175,15);
    //br
    rect(windowWidth-gui.size,windowHeight-gui.size,gui.size,gui.size,15);
    rect(windowWidth-gui.size-25,windowHeight-gui.size-25,gui.size+25,gui.size+25,15);
    rect(windowWidth-gui.size-50,windowHeight-gui.size-50,gui.size+50,gui.size+50,15);
    rect(windowWidth-gui.size-75,windowHeight-gui.size-75,gui.size+75,gui.size+75,15);
    rect(windowWidth-gui.size-100,windowHeight-gui.size-100,gui.size+100,gui.size+100,15);
    rect(windowWidth-gui.size-125,windowHeight-gui.size-125,gui.size+125,gui.size+125,15);
    rect(windowWidth-gui.size-150,windowHeight-gui.size-150,gui.size+150,gui.size+150,15);
    rect(windowWidth-gui.size-175,windowHeight-gui.size-175,gui.size+175,gui.size+175,15);
    }
  if (gui.squares == 9){
    //tl
    rect(0,0,gui.size,gui.size,15);
    rect(0,0,gui.size+25,gui.size+25,15);
    rect(0,0,gui.size+50,gui.size+50,15);
    rect(0,0,gui.size+75,gui.size+75,15);
    rect(0,0,gui.size+100,gui.size+100,15);
    rect(0,0,gui.size+125,gui.size+125,15);
    rect(0,0,gui.size+150,gui.size+150,15);
    rect(0,0,gui.size+175,gui.size+175,15);
    rect(0,0,gui.size+200,gui.size+200,15);
    //tr
    rect(windowWidth-gui.size,0,gui.size,gui.size,15);
    rect(windowWidth-gui.size-25,0,gui.size+25,gui.size+25,15);
    rect(windowWidth-gui.size-50,0,gui.size+50,gui.size+50,15);
    rect(windowWidth-gui.size-75,0,gui.size+75,gui.size+75,15);
    rect(windowWidth-gui.size-100,0,gui.size+100,gui.size+100,15);
    rect(windowWidth-gui.size-125,0,gui.size+125,gui.size+125,15);
    rect(windowWidth-gui.size-150,0,gui.size+150,gui.size+150,15);
    rect(windowWidth-gui.size-175,0,gui.size+175,gui.size+175,15);
    rect(windowWidth-gui.size-200,0,gui.size+200,gui.size+200,15);
    //bl
    rect(0,windowHeight-gui.size,gui.size,gui.size,15);
    rect(0,windowHeight-gui.size-25,gui.size+25,gui.size+25,15);
    rect(0,windowHeight-gui.size-50,gui.size+50,gui.size+50,15);
    rect(0,windowHeight-gui.size-75,gui.size+75,gui.size+75,15);
    rect(0,windowHeight-gui.size-100,gui.size+100,gui.size+100,15);
    rect(0,windowHeight-gui.size-125,gui.size+125,gui.size+125,15);
    rect(0,windowHeight-gui.size-150,gui.size+150,gui.size+150,15);
    rect(0,windowHeight-gui.size-175,gui.size+175,gui.size+175,15);
    rect(0,windowHeight-gui.size-200,gui.size+200,gui.size+200,15);
    //br
    rect(windowWidth-gui.size,windowHeight-gui.size,gui.size,gui.size,15);
    rect(windowWidth-gui.size-25,windowHeight-gui.size-25,gui.size+25,gui.size+25,15);
    rect(windowWidth-gui.size-50,windowHeight-gui.size-50,gui.size+50,gui.size+50,15);
    rect(windowWidth-gui.size-75,windowHeight-gui.size-75,gui.size+75,gui.size+75,15);
    rect(windowWidth-gui.size-100,windowHeight-gui.size-100,gui.size+100,gui.size+100,15);
    rect(windowWidth-gui.size-125,windowHeight-gui.size-125,gui.size+125,gui.size+125,15);
    rect(windowWidth-gui.size-150,windowHeight-gui.size-150,gui.size+150,gui.size+150,15);
    rect(windowWidth-gui.size-175,windowHeight-gui.size-175,gui.size+175,gui.size+175,15);
    rect(windowWidth-gui.size-200,windowHeight-gui.size-200,gui.size+200,gui.size+200,15);
    }
  if (gui.squares == 10){
    //tl
    rect(0,0,gui.size,gui.size,15);
    rect(0,0,gui.size+25,gui.size+25,15);
    rect(0,0,gui.size+50,gui.size+50,15);
    rect(0,0,gui.size+75,gui.size+75,15);
    rect(0,0,gui.size+100,gui.size+100,15);
    rect(0,0,gui.size+125,gui.size+125,15);
    rect(0,0,gui.size+150,gui.size+150,15);
    rect(0,0,gui.size+175,gui.size+175,15);
    rect(0,0,gui.size+200,gui.size+200,15);
    rect(0,0,gui.size+225,gui.size+225,15);
    //tr
    rect(windowWidth-gui.size,0,gui.size,gui.size,15);
    rect(windowWidth-gui.size-25,0,gui.size+25,gui.size+25,15);
    rect(windowWidth-gui.size-50,0,gui.size+50,gui.size+50,15);
    rect(windowWidth-gui.size-75,0,gui.size+75,gui.size+75,15);
    rect(windowWidth-gui.size-100,0,gui.size+100,gui.size+100,15);
    rect(windowWidth-gui.size-125,0,gui.size+125,gui.size+125,15);
    rect(windowWidth-gui.size-150,0,gui.size+150,gui.size+150,15);
    rect(windowWidth-gui.size-175,0,gui.size+175,gui.size+175,15);
    rect(windowWidth-gui.size-200,0,gui.size+200,gui.size+200,15);
    rect(windowWidth-gui.size-225,0,gui.size+225,gui.size+225,15);
    //bl
    rect(0,windowHeight-gui.size,gui.size,gui.size,15);
    rect(0,windowHeight-gui.size-25,gui.size+25,gui.size+25,15);
    rect(0,windowHeight-gui.size-50,gui.size+50,gui.size+50,15);
    rect(0,windowHeight-gui.size-75,gui.size+75,gui.size+75,15);
    rect(0,windowHeight-gui.size-100,gui.size+100,gui.size+100,15);
    rect(0,windowHeight-gui.size-125,gui.size+125,gui.size+125,15);
    rect(0,windowHeight-gui.size-150,gui.size+150,gui.size+150,15);
    rect(0,windowHeight-gui.size-175,gui.size+175,gui.size+175,15);
    rect(0,windowHeight-gui.size-200,gui.size+200,gui.size+200,15);
    rect(0,windowHeight-gui.size-225,gui.size+225,gui.size+225,15);
    //br
    rect(windowWidth-gui.size,windowHeight-gui.size,gui.size,gui.size,15);
    rect(windowWidth-gui.size-25,windowHeight-gui.size-25,gui.size+25,gui.size+25,15);
    rect(windowWidth-gui.size-50,windowHeight-gui.size-50,gui.size+50,gui.size+50,15);
    rect(windowWidth-gui.size-75,windowHeight-gui.size-75,gui.size+75,gui.size+75,15);
    rect(windowWidth-gui.size-100,windowHeight-gui.size-100,gui.size+100,gui.size+100,15);
    rect(windowWidth-gui.size-125,windowHeight-gui.size-125,gui.size+125,gui.size+125,15);
    rect(windowWidth-gui.size-150,windowHeight-gui.size-150,gui.size+150,gui.size+150,15);
    rect(windowWidth-gui.size-175,windowHeight-gui.size-175,gui.size+175,gui.size+175,15);
    rect(windowWidth-gui.size-200,windowHeight-gui.size-200,gui.size+200,gui.size+200,15);
    rect(windowWidth-gui.size-225,windowHeight-gui.size-225,gui.size+225,gui.size+225,15);
    }
  
  // save("Gradient_Grid.svg"); // give file name
  // print("saved svg");
  // noLoop(); // we just want to export once
}

function Gui(){
  this.description = true;
  this.size = 50;
  this.squares = 1;
  this.stroke = 1;
  this.colorfill = false;
  this.nostroke = false;
  this.strokecolor = '#000000';
  this.backcolor = '#3eacac';
  
}

function update(){
  redraw();
}

function description(){
    if(gui.description){
      d.show();
    } else {
      d.hide();
    }
}



function rectFormat(){
  //color
  if (gui.colorfill == true){
        fill(rectColor[0],rectColor[1],rectColor[2],50);
      }
  if (gui.colorfill == false){
        noFill();
      }
  //stroke
  if (gui.nostroke == true){
        noStroke();
      }
  if (gui.nostroke == false){
        stroke(gui.strokecolor);
      }
}
function rectStroke(){
  if (gui.stroke == 1){
    strokeWeight(1);
  }
  if (gui.stroke == 2){
    strokeWeight(2);
  }
  if (gui.stroke == 3){
    strokeWeight(3);
  }
  if (gui.stroke == 4){
    strokeWeight(4);
  }
  if (gui.stroke == 5){
    strokeWeight(5);
  }
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);  
}