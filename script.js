function createNewElement() {
  // First create a DIV element.
	var txtNewInputBox = document.createElement('div');
  txtNewInputBox.classList.add("draggable");
  //set divCount to # of draggable divs
  var divcount = document.querySelectorAll('.draggable').length;
  
  // Then add the content (a new input box) of the element.
	txtNewInputBox.innerHTML = "<input draggable = 'true' type='text' id='drag" + 
    divcount + "' ondragstart='drag(event)' type='text' id='fname' name='fname' value='Create Element' ondblclick='deleteBox();'>";

  // Finally put it where it is supposed to appear.
	document.getElementById("inputBoard").appendChild(txtNewInputBox);
}

//to do 
//when creating new textbox, change id of input to be drag(num of )