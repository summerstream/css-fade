var btn = document.getElementById('btn');
var flag = true;
btn.addEventListener('click',function(e){
    var c = document.getElementsByClassName('container')[0];
    // c.style.display = flag?'block':'none';
    flag = !flag;

    c.className = 'container '+(flag?'fade-in':'fade-out');
});