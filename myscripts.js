let errorBorderElements = document.getElementsByClassName('required');
let signIn = document.getElementById('sign-in');

//dummy link for registered members
signIn.addEventListener('click',
    () => {
        alert("This doesn't go anywhere...yet");
    },
    false
);

//loops class 'required' to add event listener
for(let i=0; i<errorBorderElements.length; i++) {
    errorBorderElements[i].addEventListener('focusout', function(){
    focusOut(errorBorderElements[i]);
    }, false);
}

//checks to see if text is already added to required fields. If so, removes highlighted border.
function focusOut(removedHighlight) {
(removedHighlight.value != '') ? removedHighlight.classList.remove('error') : removedHighlight.classList.add('error')
}

function checkPasswordMatch() {
    let pwd = document.getElementById('pwd').value;
    let pwd2 = document.getElementById('pwd2').value;
    if(pwd!==pwd2) alert('passwords do not match');
    return false;
}