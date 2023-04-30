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
(removedHighlight.value != '') ? removedHighlight.classList.remove('error') : removedHighlight.classList.add('error')
}

/*
let stuff = Array.from(errorBorderElements);
stuff.forEach((element) => {
    element.addEventListener('focusout',focusOut(element), false);
});
*/
