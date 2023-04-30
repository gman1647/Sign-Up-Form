/*
Compare text input of confirm password with the password box.
If boxes match, allow submit
If boxes do not match, throw error message

Alert successful form submission (with disclaimer that it was not submitted)

Remove "error" class when text entered
*/

let errorBorderElements = document.getElementsByClassName('required');

for(let i=0; i<errorBorderElements.length; i++)
{
    errorBorderElements[i].addEventListener('focusout', function(){
    focusOut(errorBorderElements[i]);
    }, false);
}

function focusOut(removedHighlight) {
    if (removedHighlight.value != '') {
        console.log(removedHighlight.value);
        removedHighlight.classList.remove('error');
    } else if(removedHighlight.value == '') {
        console.log("no text");
        removedHighlight.classList.add('error');
    }
} 