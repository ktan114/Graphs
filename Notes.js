/*
  Fill a rectangle
*/

// Clear it
ctx.fillStyle = 'orange';
ctx.fillRect(0, 60, canvasWidth, canvasHeight);
ctx.font = "30px arial";
ctx.strokeText("My Canvas", 600, 50);

// Compute Connected Components

/* 
  Edges (lines) 
    - beginPath(): Begins a path, or resets the current path
    - closePath(): Line/Path returns to starting point
    - moveTo(): Moves the path to the specified point in the canvas, without creating a line
    - lineTo(): Adds a new point and creates a line to that point from the last specified point in the canvas | use to have multiple lines/edges
    - stroke(): Actually draws the path you have defined
    - https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineTo
    - fill(): fills the current or given path with the current fill style ====== USED FOR COLOR WITH A SHAPE
    - strokeStyle(): same as fill for styling but for stroke
*/

ctx.fillStyle = 'blue';
// ctx.fillRect(200, 60, 200, 180);
ctx.beginPath();
ctx.moveTo(100,200);
ctx.lineTo(50,200);
ctx.lineTo(100,300);
ctx.lineTo(100,200);
ctx.stroke(); 
ctx.fill(); 

/*
  Verts/Nodes (circles) 
    - void ctx.arc(x, y, radius, startAngle, endAngle [, anticlockwise]);
      * x coord of arc's center
      * y coord of arc's center
      * arc's radius
      * startAngle = angle which arc starts measured clockwise from positive x axis and expressed in radians
      * endAngle = angle which arc starts measured clockwise from positive x axis and expressed in radians
      * https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
*/

ctx.fillStyle = 'purple';
ctx.fillRect(400, 350, 100, 100);
ctx.beginPath();
ctx.arc(450, 400, 100, 0, 2 * Math.PI);
ctx.stroke();

/*
  Vert Labels (Text)
    - fillText(text, x, y [, maxWidth]) ======== USED FOR COLOR
      * text - text string to be rendered to context
        Set by: ctx.font, ctx.textAlign, ctx.textBaseline, ctx.direction
      * x - coordinate which drawing begins
      * y - coordinate which drawing begins
      * maxWidth - optional which limits the width based on the value
    - strokeText(text, x, y, [, maxWidth]) 
*/

ctx.fillStyle = 'white';
ctx.fillRect(100, 500, 100, 100);
ctx.font = '40px times-new-roman';
ctx.fillText("Hello World", 100, 480);

// Rainbow - Red
ctx.fillStyle = "red";
ctx.moveTo(600, 200);
ctx.beginPath();
ctx.arc(600, 200, 50, Math.PI, 0);
// ctx.stroke();
ctx.fill();

ctx.moveTo(700, 300);
ctx.beginPath();
ctx.arc(700, 300, 100, 0, 2 * Math.PI);
ctx.stroke();

/* 
  Draw dummy vertex
*/

console.log('this.props.graph ', this.props.graph);
this.props.graph.createDummyGraph();
console.log('called createDummyGraph');

ctx.beginPath(); // Picking up the pen
ctx.arc(40, 40, 20, 0, Math.PI * 2); // Deciding what to draw or imagine
ctx.stroke(); // Putting your pen down and drawing out what was 'imagined'
ctx.beginPath();
ctx.arc(100, 100, 30, 0, 2 * Math.PI);
ctx.stroke();
console.log('called ctx.arc');