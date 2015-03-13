function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}

//cache barre lien
function hideBar()
{
    if (navigator.userAgent.indexOf('iPhone') != -1 )
    {
    addEventListener("load", function() 
        {
        setTimeout(hideURLbar, 0);}, 
        false);
 
        function hideURLbar() 
        {
        window.scrollTo(0,1);
        }
        
        }
}

//hoverSubstitution
function hoverSub()
{
    if(!document.getElementById) return false;
    if(!document.getElementsByTagName) return false;
    var base = document.getElementById ('navigation');
    var myLinks = base.getElementsByTagName('a');
    for (var i = 0; i < myLinks.length; i++){
   myLinks[i].addEventListener('touchstart', function(){this.className = 'hover';}, false);
   
   myLinks[i].addEventListener('touchend', function(){this.className = '';}, false);
    }
}
//
addLoadEvent(hideBar);
addLoadEvent(hoverSub);