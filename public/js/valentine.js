function random(min, max) {
    return Math.random() * (max - min) + min;
}

//var max = 453.5;
var max = window.innerHeight;

var $hearts = $(".heart-path");

$hearts.each(function(i, v){
	var _ = $(this);
	var x = random(0, max);
	var y = random(max, max + 10);

	TweenMax.set(_.find("use"), { scale: random(1, 4), fill: "white" });

	TweenMax.fromTo(_, random(5, 8), { 
		attr: { x: x, y: y },
		opacity: 1,
	}, {
		attr: { x: x + (random(-20, 20)), y: random(10, max/2)},
		repeat: -1,
		opacity: 0,
		delay: i * .3,
		ease: Back.easeOut
	});
	
});

var pathTime = 1;
var perc = .2;

var tl = new TimelineMax({
	repeat: -1,
	repeatDelay: 5
});

tl.set(".letter-path", { stroke: "rgba(255, 255, 255, .8)", strokeWidth: "0", transformOrigin: "50% 50%"})
 	.staggerFromTo(".letter-path", pathTime, { drawSVG: "0"}, {drawSVG: "100%", ease: Back.easeIn }, pathTime * perc, "stag")
	.staggerFromTo(".letter-path", pathTime, {fill: "transparent", scale: 1 }, {fill: "white", scale: 1 }, pathTime * perc, "stag+=" + pathTime * .9);