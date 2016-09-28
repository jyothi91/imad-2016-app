console.log('Loaded!');
//change the text of the main-text div
var element = document.getElementById('main-text');
element.innerHTML = 'new value ';
//move the image
var img=document.getElementById('madi');

//var marginleft = 0;
//function moveright(){
 //   marginleft =marginleft + 10;
   // img.style.marginleft = marginleft + 'px';
//}
img.onClick = function(){
     img.style.marginleft =  '200px';
     alert('hi');
  //  var interval = SetInterval(moveright,100);
};