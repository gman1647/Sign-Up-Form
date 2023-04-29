/*
Compare text input of confirm password with the password box.
If boxes match, allow submit
If boxes do not match, throw error message

Alert successful form submission (with disclaimer that it was not submitted)

Remove "error" class when text entered
*/



//let emptyField = document.getElementsByClassName('error')[0].value;

function focusOut() {
    let removedHighligth = document.getElementById('first_name');
    if (removedHighligth.value != '') {
        console.log(removedHighligth.value);
        removedHighligth.classList.remove('error');
    } else if(removedHighligth.value == '') {
        console.log("no text");
        removedHighligth.classList.add('error');
    }
} 

let hilightedElements = document.getElementById('first_name');
hilightedElements.addEventListener('focusout', focusOut);

/*
function focusOut() {
    let removedHighligth = document.getElementsByClassName('required');
    if (removedHighligth.value != '') {
        console.log(removedHighligth.value);
        removedHighligth.classList.remove('error');
    } else if(removedHighligth.value == '') {
        console.log("no text");
        removedHighligth.classList.add('error');
    }
} 

let hilightedElements = document.getElementsByClassName('required');
for(i = 0; i < hilightedElements.length; i++) {
    hilightedElements[i].addEventListener('focusout', focusOut);
}
*/