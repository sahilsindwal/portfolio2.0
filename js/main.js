let win = document.querySelector('.cvPermissions');

function closeWindow() {
    win.style.cssText = 'display: none;';
}


function cvWindow() {
    win.style.cssText = 'display: block;';
}

function getVal() {
    let token = document.querySelector('#token');
    let cvbtn = document.querySelector('#cvbtn');
    let cvsub = document.querySelector('.cvsub');

    if (token.value == 512) {

        let cvText = document.querySelector('#cvText');
        cvText.textContent = 'You can download ';
        token.style.cssText = 'display: none;';
        cvsub.style.cssText = 'display: none;';
        cvbtn.style.cssText = 'display: block;';
        cvText.style.cssText = 'color:green';

    }

    else {
        cvText.style.cssText = 'color:red';
        cvText.textContent = `you don't have permissions`;
    }
}
