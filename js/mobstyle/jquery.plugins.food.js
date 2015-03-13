/*
 * jQuery Cycle Lite Plugin
 * http://malsup.com/jquery/cycle/lite/
 * Copyright (c) 2008 M. Alsup
 * Version: 1.0 (06/08/2008)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * Requires: jQuery v1.2.3 or later
 */
(function(D){var A="Lite-1.0";D.fn.cycle=function(E){return this.each(function(){E=E||{};if(this.cycleTimeout){clearTimeout(this.cycleTimeout)}this.cycleTimeout=0;this.cyclePause=0;var I=D(this);var J=E.slideExpr?D(E.slideExpr,this):I.children();var G=J.get();if(G.length<2){if(window.console&&window.console.log){window.console.log("terminating; too few slides: "+G.length)}return }var H=D.extend({},D.fn.cycle.defaults,E||{},D.metadata?I.metadata():D.meta?I.data():{});H.before=H.before?[H.before]:[];H.after=H.after?[H.after]:[];H.after.unshift(function(){H.busy=0});var F=this.className;H.width=parseInt((F.match(/w:(\d+)/)||[])[1])||H.width;H.height=parseInt((F.match(/h:(\d+)/)||[])[1])||H.height;H.timeout=parseInt((F.match(/t:(\d+)/)||[])[1])||H.timeout;if(I.css("position")=="static"){I.css("position","relative")}if(H.width){I.width(H.width)}if(H.height&&H.height!="auto"){I.height(H.height)}var K=0;J.css({position:"absolute",top:0,left:0}).hide().each(function(M){D(this).css("z-index",G.length-M)});D(G[K]).css("opacity",1).show();if(D.browser.msie){G[K].style.removeAttribute("filter")}if(H.fit&&H.width){J.width(H.width)}if(H.fit&&H.height&&H.height!="auto"){J.height(H.height)}if(H.pause){I.hover(function(){this.cyclePause=1},function(){this.cyclePause=0})}D.fn.cycle.transitions.fade(I,J,H);J.each(function(){var M=D(this);this.cycleH=(H.fit&&H.height)?H.height:M.height();this.cycleW=(H.fit&&H.width)?H.width:M.width()});J.not(":eq("+K+")").css({opacity:0});if(H.cssFirst){D(J[K]).css(H.cssFirst)}if(H.timeout){if(H.speed.constructor==String){H.speed={slow:600,fast:200}[H.speed]||400}if(!H.sync){H.speed=H.speed/2}while((H.timeout-H.speed)<250){H.timeout+=H.speed}}H.speedIn=H.speed;H.speedOut=H.speed;H.slideCount=G.length;H.currSlide=K;H.nextSlide=1;var L=J[K];if(H.before.length){H.before[0].apply(L,[L,L,H,true])}if(H.after.length>1){H.after[1].apply(L,[L,L,H,true])}if(H.click&&!H.next){H.next=H.click}if(H.next){D(H.next).bind("click",function(){return C(G,H,H.rev?-1:1)})}if(H.prev){D(H.prev).bind("click",function(){return C(G,H,H.rev?1:-1)})}if(H.timeout){this.cycleTimeout=setTimeout(function(){B(G,H,0,!H.rev)},H.timeout+(H.delay||0))}})};function B(J,E,I,K){if(E.busy){return }var H=J[0].parentNode,M=J[E.currSlide],L=J[E.nextSlide];if(H.cycleTimeout===0&&!I){return }if(I||!H.cyclePause){if(E.before.length){D.each(E.before,function(N,O){O.apply(L,[M,L,E,K])})}var F=function(){if(D.browser.msie){this.style.removeAttribute("filter")}D.each(E.after,function(N,O){O.apply(L,[M,L,E,K])})};if(E.nextSlide!=E.currSlide){E.busy=1;D.fn.cycle.custom(M,L,E,F)}var G=(E.nextSlide+1)==J.length;E.nextSlide=G?0:E.nextSlide+1;E.currSlide=G?J.length-1:E.nextSlide-1}if(E.timeout){H.cycleTimeout=setTimeout(function(){B(J,E,0,!E.rev)},E.timeout)}}function C(E,F,I){var H=E[0].parentNode,G=H.cycleTimeout;if(G){clearTimeout(G);H.cycleTimeout=0}F.nextSlide=F.currSlide+I;if(F.nextSlide<0){F.nextSlide=E.length-1}else{if(F.nextSlide>=E.length){F.nextSlide=0}}B(E,F,1,I>=0);return false}D.fn.cycle.custom=function(K,H,I,E){var J=D(K),G=D(H);G.css({opacity:0});var F=function(){G.animate({opacity:1},I.speedIn,I.easeIn,E)};J.animate({opacity:0},I.speedOut,I.easeOut,function(){J.css({display:"none"});if(!I.sync){F()}});if(I.sync){F()}};D.fn.cycle.transitions={fade:function(F,G,E){G.not(":eq(0)").css("opacity",0);E.before.push(function(){D(this).show()})}};D.fn.cycle.ver=function(){return A};D.fn.cycle.defaults={timeout:4000,speed:1000,next:null,prev:null,before:null,after:null,height:"auto",sync:1,fit:0,pause:0,delay:0,slideExpr:null}})(jQuery)







// calls to all of the above plugins
jQuery(function(){
//methode jquery
 $(document).ready(function(){
 $.get('../food/doc_food/bmwFoodCm.xml', function(data){
 var nb = $(data).find('nbVignette').text();
 //la chaine qui va recevoir les infos
var featurePics = new Array;
//avec cette boucle on assure la length du xml
var i = 0;
do{
//variable qui structure le lien vers dossier image
var lien  ="../food/doc_food/food_slides/f"+ i + ".jpg";
//regroupe tous les elements liens
featurePics.push(lien);
i++;
//nb selon le fichier le nb de vignette ds le theme xml charge
}while(i<nb);

		/*var featurePics = new Array("../doc_food/food_slides/f0.jpg",);*/
	
	// loop through them all
	for(var x=0; x<featurePics.length; x++){
		// create a placeholder anchor and empty image for the cycle script to be able to act on
		var newImage = jQuery('<a href="#d"><img></a>');

		// add the needed data for later use
		newImage.data("pic",featurePics[x])
        //.data("text",featureText[x])
			// bind an event that we can trigger later
			.bind("loadImage",function(){
				var self = this;
				//console.debug("loading image "+$(this).data("pic"));
				// find the empty img and bind a load event to that so that when the image is done loading we will move on to the next image and load it
				jQuery(this).find("img").hide().bind("load",function(){
					 //console.debug("loaded",this);
					// trigger the load of the next image
					jQuery(this).fadeIn("slow");
					jQuery(self).next().trigger("loadImage");
				})
				// now that we have the trigger, lets add the src and alt for the image. the above load will fire when this is done
				.attr("src",$(self).data("pic"))
     
			})
             
                                            		
		jQuery("#carousel-photos-bmw").append(newImage);
        
	}
	/*
	jQuery Cycle Lite is used for the big image slider
	http://malsup.com/jquery/cycle/lite/
	*/
	jQuery('#carousel-photos-bmw').cycle({ 
		delay:		10, // how long to wait till doing first automatic slide
		speed:		1000, // transition time
		prev:		'#prev', // ID of what to use for prev button
		next:		'#next', // ID of what to use for next button
		timeout: 	3000, // how long to stay on a slide
		pause:		1, // should the fade pause while the mouse is over (1 for yes 0 for no)
       
	});
    
         	
	// delay the start of the "ajax" load just a touch so we don't get the loading indicator in the browser
	setTimeout(function(){
		jQuery("#carousel-photos-bmw a img:eq(1)").trigger('loadImage');
	},10)
});	
//****fin chargement et boucle presque mais suite 
});//fin while
}); //fin load xml
