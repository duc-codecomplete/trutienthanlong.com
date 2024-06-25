(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 241,
	height: 130,
	fps: 24,
	color: "#000000",
	manifest: [
		{src:"/images/Layer675copy3.png", id:"Layer675copy3"},
		{src:"/images/Layer679.png", id:"Layer679"},
		{src:"/images/Layer680.png", id:"Layer680"},
		{src:"/images/Layer681.png", id:"Layer681"},
		{src:"/images/tam.png", id:"tam"}
	]
};



// symbols:



(lib.Layer675copy3 = function() {
	this.initialize(img.Layer675copy3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,241,130);


(lib.Layer679 = function() {
	this.initialize(img.Layer679);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,221,110);


(lib.Layer680 = function() {
	this.initialize(img.Layer680);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,32);


(lib.Layer681 = function() {
	this.initialize(img.Layer681);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,9);


(lib.tam = function() {
	this.initialize(img.tam);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,233,40);


(lib.Symbol8 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AyLJaIAAyzMAkXAAAIAASzg");
	this.shape.setTransform(0,0.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-116.4,-59.5,233,120.5);


(lib.Symbol7 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Layer675copy3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,241,130);


(lib.Symbol4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Layer680();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,131,32);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,204,0.008)").s().p("Ay0J2IAAzrMAlpAAAIAATrg");
	this.shape.setTransform(120.5,63);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,241,126);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Layer681();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,120,9);


(lib.tam_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.tam();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,233,40);


(lib.Layer679_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Layer679();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,221,110);


(lib.shape8 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0.275)","rgba(255,255,255,0)"],[0,0.349,1],0,0,0,0,0,8.8).s().p("Ag3A4QgYgYAAggQAAggAYgXQAXgYAgAAQAgAAAYAYQAXAXABAgQgBAggXAYQgYAXggABQgggBgXgXg");
	this.shape.setTransform(8,8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16,16);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Layer679_1();
	this.instance.setTransform(0,0,1,1,0,0,0,110.5,55);
	this.instance.compositeOperation = "lighter";

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-110.5,-55,221,110);


(lib.Layer681_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApgA3IAAhtITBAAIAABtg");
	mask.setTransform(60,4);

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.setTransform(60,-13.5,1,1,0,0,0,60,4.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-9.9},0).wait(1).to({y:-6.3},0).wait(1).to({y:-2.7},0).wait(1).to({y:0.9},0).wait(1).to({y:4.5},0).wait(10).to({y:7.8},0).wait(1).to({y:11.1},0).wait(1).to({y:14.4},0).wait(1).to({y:17.7},0).wait(1).to({y:21},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Layer675copy3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Symbol7();
	this.instance.setTransform(120.5,65,1,1,0,0,0,120.5,65);
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";
	this.instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.016},0).wait(1).to({alpha:0.032},0).wait(1).to({alpha:0.047},0).wait(1).to({alpha:0.063},0).wait(1).to({alpha:0.079},0).wait(1).to({alpha:0.095},0).wait(1).to({alpha:0.111},0).wait(1).to({alpha:0.126},0).wait(1).to({alpha:0.142},0).wait(1).to({alpha:0.158},0).wait(1).to({alpha:0.174},0).wait(1).to({alpha:0.189},0).wait(1).to({alpha:0.205},0).wait(1).to({alpha:0.221},0).wait(1).to({alpha:0.237},0).wait(1).to({alpha:0.253},0).wait(1).to({alpha:0.268},0).wait(1).to({alpha:0.284},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.271},0).wait(1).to({alpha:0.257},0).wait(1).to({alpha:0.243},0).wait(1).to({alpha:0.229},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.186},0).wait(1).to({alpha:0.171},0).wait(1).to({alpha:0.157},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.129},0).wait(1).to({alpha:0.114},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.086},0).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.057},0).wait(1).to({alpha:0.043},0).wait(1).to({alpha:0.029},0).wait(1).to({alpha:0.014},0).wait(1).to({alpha:0},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.Layer675copy3();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,241,130);


(lib.sprite9 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape8("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16,16);


(lib.sprite10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sprite9();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.289},5).wait(1).to({alpha:0.141},0).wait(2).to({alpha:0.551},0).wait(1).to({alpha:0.141},1).to({alpha:1},2).wait(1).to({alpha:0.551},0).wait(2).to({alpha:0.141},0).wait(3).to({alpha:1},0).wait(4).to({alpha:0.551},0).wait(2).to({alpha:0.141},0).wait(1).to({alpha:1},1).to({alpha:0.551},1).to({alpha:0},7).to({_off:true},1).wait(10).to({_off:false,alpha:1},0).wait(1).to({alpha:0.551},0).wait(2).to({alpha:0.141},0).wait(3).to({alpha:1},0).wait(4).to({alpha:0},11).to({_off:true},1).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16,16);


(lib.sprite11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 9
	this.instance = new lib.sprite10();
	this.instance.setTransform(0.3,0.4,0.297,0.297,-22.7);
	this.instance.alpha = 0.469;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(57).to({_off:false},0).to({scaleX:0.3,scaleY:0.3,rotation:-22.6,guide:{path:[0.3,0.3,-13.2,-1.4,-17.3,-4.9,-17.3,-4.9,-17.3,-4.9]}},28).to({scaleX:0.3,scaleY:0.3,guide:{path:[-17.4,-4.9,-17.9,-5.4,-18.3,-6,-18.3,-6,-18.4,-6]}},1).to({scaleX:0.3,scaleY:0.3,rotation:-22.5,guide:{path:[-18.4,-6.3,-18.4,-6.3,-18.4,-6.3,-21.1,-10.7,-18.2,-16.6,-18.2,-16.6,-18.2,-16.6]}},7).to({scaleX:0.3,scaleY:0.3,rotation:-22.7,guide:{path:[-18.2,-16.5,-18.2,-16.7,-18.2,-16.7,-17.5,-17.9,-16.9,-19.2,-16.9,-19.2,-16.9,-19.2]}},2).to({scaleX:0.3,scaleY:0.3,rotation:-22.6,guide:{path:[-16.9,-19.1,-14.3,-24,-10.8,-29.5,-9,-32.1,-8.4,-34.8,-8.4,-34.8,-8.4,-34.8]}},19).to({scaleX:0.3,scaleY:0.3,guide:{path:[-8.2,-34.8,-7.9,-35.6,-7.8,-36.1,-7.8,-36.1,-7.8,-36.1]}},1).to({scaleX:0.3,scaleY:0.3,rotation:-22.5,guide:{path:[-7.8,-36.2,-7.5,-37.1,-7.5,-37.5,-7.5,-37.5,-7.5,-37.5]}},1).to({scaleX:0.3,scaleY:0.3,rotation:-22.6,guide:{path:[-7.6,-37.6,-7.5,-38.2,-7.4,-38.9,-7.4,-38.9,-7.4,-38.9]}},1).to({scaleX:0.3,scaleY:0.3,rotation:-22.5,guide:{path:[-7.4,-38.9,-7.3,-39.3,-7.4,-40.3,-7.4,-40.4,-7.4,-40.4]}},1).to({scaleX:0.3,scaleY:0.3,rotation:-22.7,guide:{path:[-7.5,-40.3,-7.5,-41.6,-7.9,-43.2]}},2).to({guide:{path:[-8.1,-43.4,-9.2,-47.8,-12.1,-51,-15.1,-53.9,-18.6,-56.6,-21.9,-59.2,-25.4,-62,-28.9,-64.6,-31.1,-68.4,-33.4,-72.2,-34.2,-76.4,-35,-80.8,-35.5,-85.1,-36.1,-89.4,-37.2,-93.5,-38.2,-97.7,-41.1,-101.4]}},62).wait(1));

	// Layer 7
	this.instance_1 = new lib.sprite10();
	this.instance_1.setTransform(0.3,0.5,0.297,0.297,-45);
	this.instance_1.alpha = 0.469;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).to({rotation:0,skewX:-44.9,skewY:-45,x:-22.6,y:-34.3},73).to({rotation:-45,skewX:0,skewY:0,x:-106.7,y:-104},98).wait(1));

	// Layer 5
	this.instance_2 = new lib.sprite10();
	this.instance_2.setTransform(0.7,0.4,0.297,0.297,0,15,-165);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({skewX:14.8,x:1.4,y:-0.6},1).to({skewX:15,x:16,y:-26.6},33).to({x:3.5,y:-39.9},23).to({x:39.9,y:-146.5},116).to({_off:true},1).wait(9));

	// Layer 3
	this.instance_3 = new lib.sprite10();
	this.instance_3.setTransform(0.7,0.2,0.567,0.567,0,-24.9,155.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(28).to({_off:false},0).to({scaleX:0.56,scaleY:0.56,skewX:-24.8,skewY:155.2,x:3.2,y:-4.2},2).to({x:-40.1,y:-59.9},60).to({scaleX:0.57,scaleY:0.57,skewX:-24.9,skewY:155.1,x:-44.7,y:-62},2).to({scaleX:0.56,scaleY:0.56,skewX:-24.8,skewY:155.2,x:-48.7,y:-65.8},2).to({scaleX:0.57,scaleY:0.57,skewX:-24.9,skewY:155.1,x:-97.3,y:-242.1},88).wait(1));

	// Layer 1
	this.instance_4 = new lib.sprite10();
	this.instance_4.setTransform(0,0,0.625,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:-2.3,y:7.7},1).to({x:22.1,y:-128.9},53).to({guide:{path:[22,-129,26.9,-133.7,29.6,-141.3,34.9,-156.5,30.8,-170.5,26.7,-184.6,19,-198.2,11.3,-211.7,3.3,-225.1,-4.9,-238.5,-7.8,-252.4,-10.2,-263.9,-8.1,-275,-6,-286.1,-2.5,-297.1,0.9,-308.1,4.3,-319.1,7.6,-330.1,7.7,-341.6,8.3,-368.4,1,-387.7,-6.4,-406.9,-12.2,-424.9,-18,-443,-17.2,-463,-16.4,-483,0.6,-511.4]}},119).to({_off:true},1).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.1,-0.8,15.2,12);


(lib.sprite12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_69 = function() {
		/* stop ();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(69).call(this.frame_69).wait(1));

	// Layer 31
	this.instance = new lib.sprite11();
	this.instance.setTransform(3.3,4.5,0.809,0.809,-7.2);
	this.instance.alpha = 0.629;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(28).to({_off:false},0).wait(42));

	// Layer 21
	this.instance_1 = new lib.sprite11();
	this.instance_1.setTransform(10.8,8.1,0.607,0.607,0,-30.7,149.3);
	this.instance_1.alpha = 0.469;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).wait(58));

	// Layer 11
	this.instance_2 = new lib.sprite11();
	this.instance_2.setTransform(17.2,1.4,0.862,0.862,0,-12.5,167.5);
	this.instance_2.alpha = 0.5;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(38).to({_off:false},0).wait(32));

	// Layer 1
	this.instance_3 = new lib.sprite11();
	this.instance_3.setTransform(5.2,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15.2,12.1);


(lib.sprite13Up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_11 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(11).call(this.frame_11).wait(7));

	// Layer 33
	this.instance = new lib.sprite12();
	this.instance.setTransform(58.3,0.3,0.33,0.328,0,11.5,-168.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).wait(11));

	// Layer 1
	this.instance_1 = new lib.sprite12();
	this.instance_1.setTransform(42,1,0.601,0.601,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},16).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(41.5,1.2,9.4,8.8);


(lib.tg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 680
	this.instance = new lib.Symbol4();
	this.instance.setTransform(120.5,62,1,1,0,0,0,65.5,16);

	this.instance_1 = new lib.Layer680();
	this.instance_1.setTransform(55,49);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// Layer 681
	this.instance_2 = new lib.Layer681();
	this.instance_2.setTransform(61,82);

	this.instance_3 = new lib.Layer681_1();
	this.instance_3.setTransform(121,89.5,1,1,0,0,0,60,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).wait(1));

	// tam
	this.instance_4 = new lib.tam_1();
	this.instance_4.setTransform(120.5,106,1,1,0,0,0,116.5,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2));

	// Layer 679
	this.instance_5 = new lib.Layer679_1();
	this.instance_5.setTransform(120.5,65,1,1,0,0,0,110.5,55);

	this.instance_6 = new lib.Symbol1();
	this.instance_6.setTransform(120.5,65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.instance_6}]},1).wait(1));

	// Layer 7 copy 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AyLJcIAAy4MAkXAAAIAAS4g");
	mask.setTransform(120.5,65);

	// Layer 11
	this.instance_7 = new lib.sprite13Up();
	this.instance_7.setTransform(110.6,133.7,2.059,1.856,0,0,0,45.3,5.5);
	this.instance_7.compositeOperation = "lighter";

	this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(2));

	// Layer 7 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AyLJcIAAy4MAkXAAAIAAS4g");
	mask_1.setTransform(120.5,65);

	// lare copy
	var 	urlmykhoi= "/videos/nuoc.mp4";
var 	urlmykhoi2= "/videos/nuoc2.mp4";


function createVideoBitmap(lWidth, lHeight, lVideoPath)
{
	    var lVideo = document.createElement('video');
	    var self = this;

	    lVideo.style.display = "none";
	    lVideo.volume = 0;
	    lVideo.controls = false;
		lVideo.loop=true;
		lVideo.muted=true;
	    lVideo.src = lVideoPath;
	    lVideo.width = lWidth;
	    lVideo.height = lHeight;
	    lVideo.play();
	    var swVideoBM = new createjs.Bitmap(lVideo);
	    return swVideoBM;
};
	this.nuoc2 = new lib.Symbol8();
	this.nuoc2=createVideoBitmap(202,236,urlmykhoi2);
	this.nuoc2.setTransform(5.1,5.1,1,1,0,0,0,0.1,0.1);
	this.nuoc2.alpha = 0.699;
	this.nuoc2.compositeOperation = "color-dodge";
	this.nuoc2._off = true;

	this.nuoc2.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.nuoc2).wait(1).to({_off:false},0).wait(1));

	// lare
	this.nuoc = new lib.Symbol8();
	this.nuoc=createVideoBitmap(202,236,urlmykhoi);
	this.nuoc.setTransform(5.1,5.1,1,1,0,0,0,0.1,0.1);
	this.nuoc.alpha = 0.699;
	this.nuoc.compositeOperation = "color-dodge";

	this.nuoc.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.nuoc).to({_off:true},1).wait(1));

	// Layer 675 copy 4
	this.instance_8 = new lib.Layer675copy3_1();
	this.instance_8.setTransform(120.5,65,1,1,0,0,0,120.5,65);
	this.instance_8.alpha = 0.5;
	this.instance_8.compositeOperation = "lighter";
	this.instance_8._off = true;

	this.instance_8.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({_off:false},0).wait(1));

	// Layer 675 copy 3
	this.instance_9 = new lib.Layer675copy3_1();
	this.instance_9.setTransform(120.5,65,1,1,0,0,0,120.5,65);

	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,3.4).s().p("AgVAMIgDgNQABgGAIgHQAJgIAGgCQAPAHAKAOQAAAFgHAHQgGALgMAFQgNgFgIgIg");
	this.shape.setTransform(99,55);

	this.instance_9.mask = this.shape.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_9}]}).to({state:[]},1).wait(1));

	// Layer 675 copy 5
	this.instance_10 = new lib.Layer675copy3();

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,241,130);


// stage content:
(lib.hompage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var mybtn, mytaigame;

		mybtn = this.btn;
		mytaigame = this.taigame;
		mybtn.cursor = "pointer";
		mybtn.addEventListener("click", function(){});
		mybtn.addEventListener("mouseover", function(){mytaigame.gotoAndPlay(1);});
		mybtn.addEventListener("mouseout", function(){mytaigame.gotoAndPlay(0);});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 2
	this.btn = new lib.Symbol3();
	this.btn.setTransform(120.5,65,1,1.032,0,0,0,120.5,63);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Layer 1
	this.taigame = new lib.tg();
	this.taigame.setTransform(120.5,65,1,1,0,0,0,120.5,65);

	this.timeline.addTween(cjs.Tween.get(this.taigame).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9,10.5,352.5,196.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
