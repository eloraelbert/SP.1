function createNewElement() {
    // First create a DIV element.
	var txtNewInputBox = document.createElement('div');

    // Then add the content (a new input box) of the element.
	txtNewInputBox.innerHTML = "<input draggable = 'true' type='text' id='drag1' ondragstart='drag(event)' type='text' id='fname' name='fname' value='Create Element' ondblclick='deleteBox();'>";

    // Finally put it where it is supposed to appear.
	document.getElementById("inputBoard").appendChild(txtNewInputBox);
}