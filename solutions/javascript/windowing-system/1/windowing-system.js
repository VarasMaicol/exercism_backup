// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */
//task 1
export class Size{
  constructor(width =80, height = 60){
    this.width = width;
    this.height = height;
  }
  resize(width, height){
    this.width = width;
    this.height = height;
  }
}
//task2
export class Position{
  constructor(x = 0 , y = 0){
    this.x = x;
    this.y = y
  }
  move(newX, newY){
    this.x = newX;
    this.y = newY;
  }
}
//task 3
export class ProgramWindow{
  constructor(){
    this.screenSize = new Size(800,600);
    this.size = new Size();
    this.position = new Position();
  }
  //task 4
  resize(newSize){
    const maxWidth = this.screenSize.width - this.position.x
    const maxHeight = this.screenSize.height - this.position.y   

    const newWidth = Math.max(1, Math.min(newSize.width, maxWidth))
    const newHeight = Math.max(1, Math.min(newSize.height, maxHeight))
    this.size.resize(newWidth, newHeight)
  }
  //task 5
  move(newPosition){
    const maX = this.screenSize.width - this.size.width;
    const maY = this.screenSize.height - this.size.height;
      
    const newX = Math.max(0, Math.min(newPosition.x, maX));
    const newY = Math.max(0, Math.min(newPosition.y, maY));
    this.position.move(newX, newY);
  }       
  }

//task 6
export function changeWindow(programWindow) {
  programWindow.move(new Position());

  
  programWindow.resize(new Size(400,300));
  programWindow.move(new Position(100, 150));
  return programWindow;
}