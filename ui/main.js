console.log('Loaded!');
//change the text of the main-text div
var element = document.getElementById('main-text');
element.innerHTML = 'new value 1';
//move the image
var img=document.getElementById('madi');

var marginleft = 0;
function moveright(){
    marginleft =marginleft + 10;
    img.style.marginleft = marginleft + 'px';
}
img.onclick = function(){
    var interval = SetInterval(moveright,100);
};