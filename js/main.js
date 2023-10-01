
// loader script
document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector(
            "body").style.visibility = "hidden";
        document.querySelector(
            "#loader").style.visibility = "visible";
        document.querySelector(
            "#wait").style.visibility = "visible";
    } else {
        document.querySelector(
            "#loader").style.display = "none";
        document.querySelector(
            "body").style.visibility = "visible";
        document.querySelector(
            "#wait").style.display = "none";
    }
};

// cv permissions code

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

// video speed rate handle
document.querySelector('video').playbackRate = 0.6;

