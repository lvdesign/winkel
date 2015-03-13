/*
Auto Maximize Window Script- By Nick Lowe (nicklowe@ukonline.co.uk)
For full source code, 100's more free DHTML scripts, and Terms Of Use
Visit http://www.dynamicdrive.com
*/
function displayTotal(){
top.window.moveTo(0,0);
if (document.all) {
top.window.resizeTo(screen.availWidth,screen.availHeight);
}
else if (document.layers||document.getElementById) {
if (top.window.outerHeight<screen.availHeight||top.window.outerWidth<screen.availWidth){
top.window.outerHeight = screen.availHeight;
top.window.outerWidth = screen.availWidth;
}
}

}

//liaison popup
function prepareLinks() {
    if (! document.getElementsByTagName ) return false;
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        if (links[i].className == "popup") {
            links[i].onclick = function () {
                popUp(this .getAttribute("href"));
                return false;
            }
        }
    }
}

function popUp(winURL) {
    window.open(winURL, "popup", "toolbar=0, location=1, directories=0, scrollbars=1");
}

//
function highlightPage() {
    if (! document.getElementsByTagName) return false;
    if (! document.getElementById) return false;
    if (! document.getElementById("nav")) return false;
    
    var nav = document.getElementById("nav");
    var links = nav.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        var linkurl = links[i].getAttribute("href");
        var currenturl = window.location.href;
        if (currenturl.indexOf(linkurl) != - 1) {
            links[i].className = "here";
            var linktext = links[i].lastChild.nodeValue.toLowerCase();
            document.body.setAttribute("id", linktext);
        }
    }
}

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

addLoadEvent(displayTotal);
addLoadEvent(prepareLinks);