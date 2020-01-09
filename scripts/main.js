let myImage = document.querySelector('img');

myImage.onmouseover = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/My img.jpg') {
      myImage.setAttribute ('src','images/Also my img.jpg');
    } else {
      myImage.setAttribute ('src','images/My img.jpg');
    }
}