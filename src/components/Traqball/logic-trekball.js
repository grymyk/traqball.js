function init() {
	set up the virtual trackball;
	search the viewport-html-element for something to rotate;
	add mousedown- or touchstart-listener to prepare rotation;
	add mouseup- or touchend-listener to finish rotation;
	add mousemove- or touchmove-listener to rotate;
	calculate initial matrix3d from initial angle and rotation axis;
}

function startrotation(){
	track click-position and translate it to trackball;
	store resulting 3d-vector in variable "mouseDownVect";
}

function rotate(){
	track current mouse-position and translate it to trackball;
	store resulting 3d-vector in variable "mouseMoveVect";
	find rotation-axis by determining normal on mouseDownVect and mouseMoveVect;
	find rotation-angle between mouseMoveVect and mouseDownVect;
	apply startmatrix and rotate3d(axis, rotation-angle) to the box;
}

function finishrotation(){
	calculate new matrix3d from last angle and rotation axis;
	combine the last start-matrix and this new matrx to a combined matrix by multiplication;
	make current matrix3d new start-matrix;
}