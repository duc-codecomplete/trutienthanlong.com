(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 315,
	height: 280,
	fps: 24,
	color: "#999999",
	manifest: [
		{src: "/img/taigame.png", id:"taigame"}
	]
};



// symbols:



(lib.taigame = function() {
	this.initialize(img.taigame);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,313,259);


(lib.taigame_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.taigame();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,313,259);


(lib.Symbol6 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AwZHVIAAuqMAgyAAAIAAOqg");
	this.shape.setTransform(105,47);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,210,94);


(lib.Symbol4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxyaFMAAAg0JMAjlAAAMAAAA0Jg");
	this.shape.setTransform(114,167);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,228,334);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AykNNIAA6ZMAlJAAAIAAaZg");
	this.shape.setTransform(119,84.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,238,169);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AswJLQlSj0AAlXQAAlXFSjzQFTjzHdAAQHeAAFTDzQFSDzAAFXQAAFXlSD0QlTDzneAAQndAAlTjzg");
	this.shape.setTransform(115.6,83.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,231.1,166.1);


(lib.shape18 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.518,1],-71,0,71,0).s().p("ArFSWMAAAgkrIWLAAMAAAAkrg");
	this.shape.setTransform(71,117.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,142,235);


(lib.shape43copy = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","#FFFFFF"],[0.882,1],0,0,0,0,0,52.3).s().p("AlvFvQiXiYgBjXQABjWCXiZQCZiXDWgBQDXABCYCXQCZCZAADWQAADXiZCYQiYCZjXAAQjWAAiZiZg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52,-52,104,104);


(lib.shape41copy = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,91).s().p("Ap4J4QkGkGAAlyQAAlxEGkHQEHkGFxAAQFyAAEGEGQEHEHAAFxQAAFykHEGQkGEHlyAAQlxAAkHkHg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-89.5,-89.5,179.1,179.1);


(lib.shape18_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0)","#000000","#333333","rgba(51,51,51,0)"],[0,0.263,0.839,1],-7.6,6.8,6,-6.8).s().p("AgPgZIBKhDIgVBrIhgBOg");
	this.shape_1.setTransform(17.2,14.2);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(11.2,4.9,12,18.7);


(lib.Symbol5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol6();
	this.instance.setTransform(105,47,1,1,0,0,0,105,47);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,210,94);


(lib.sprite44 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape43copy("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52,-52,104,104);


(lib.sprite42 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape41copy("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-89.5,-89.5,179.1,179.1);


(lib.sprite19 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape18("synched",0);
	this.instance.setTransform(-57,0,1.152,1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-57,0,163.6,235);


(lib.sprite19_1 = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib.shape18_1("synched",0);
	this.instance_1.setTransform(0,0,0.677,1);

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(7.6,4.9,8.1,18.7);


(lib.mask = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAOC9IAAgKIgKAAIAAgTIgIAAIAAgKIgKAAIAAAKIgTAAIAAAKIg9AAIAAgKIgKAAIAAgKIgKAAIAAgKIgJAAIAAgKIgKAAIAAgLIgKAAIAAiJIAKAAIAAgpIAKAAIAAgUIAJAAIAAgKIAKAAIAAgKICBAAIAAAKIAKAAIAABsIgKAAIAAAKIgLAAIAAALIgKAAIAAgoIgIAAIAAgcIgKAAIAAgKIgKAAIAAgKIgJAAIAAgLIgKAAIAAALIgKAAIAAAeIgKAAIAAAlIgLAAIAAA9IALAAIAAAnIAKAAIAAALIAdAAIAAgVIAKAAIAAgdIgKAAIAAgUIAKAAIAAgKIBPAAIAAAUIgKAAIAABGIgKAAIAAAnIAKAAIAAAKgALACqIAAgKIgTAAIAAgKIgUAAIAAgKIgKAAIAAgKIgLAAIAAgfIgKAAIAAgnIgKAAIAAgKIAKAAIAAhEIAKAAIAAgeIgKAAIAAgLIgKAAIAAgUIgKAAIAAgKIAUAAIAAAKIAzAAIAAgKIA8AAIAAgKIBFAAIAAAUIAKAAIAAAzIgKAAIAAAKIgxAAIAAAJIgUAAIAAgJIAKAAIAAgKIAUAAIAAgKIg9AAIAAAmIgKAAIAAATIBaAAIAAAfIgJAAIAAAKIhRAAIAAAUIAKAAIAAAnIAKAAIAAALIAVAAIAAAKIAKAAIAAgKIAUAAIAAgLIAKAAIAAgKIATAAIAAgKIAKAAIAAgKIAVAAIAAAeIgLAAIAAALIgKAAIAAAUIgKAAIAAAKIgTAAIAAAKgAI1CqIAAgKIgVAAIAAgKIgKAAIAAhQIAKAAIAAgpIgKAAIAAAVIgKAAIAAAKIgJAAIAAAUIgKAAIAAAdIgKAAIAAAKIgKAAIAAgKIgVAAIAAgUIgKAAIAAgJIgKAAIAAgUIgKAAIAAgUIgJAAIAAAeIAJAAIAABQIgJAAIAAAKIgUAAIAAAKIgUAAIAAgKIgfAAIAAgeIAKAAIAAgyIAKAAIAAhsIgKAAIAAgUIgKAAIAAgfIAKAAIAAgKIAVAAIAAgKIAeAAIAAAKIAKAAIAAAUIAJAAIAAAVIAKAAIAAAUIAKAAIAAATIAKAAIAAASIALAAIAAgJIAKAAIAAgSIAKAAIAAgeIAKAAIAAgLIAKAAIAAgUIAJAAIAAgKIAUAAIAAgKIApAAIAAAKIAKAAIAAAeIgKAAIAAApIAKAAIAAB1IAKAAIAAApIAJAAIAAAUIgdAAIAAAKgAEcCqIAAgKIgKAAIAAgKIgKAAIAAgUIgKAAIAAgVIgJAAIAAgdIgKAAIAAgKIgpAAIAAAKIgKAAIAAAdIgKAAIAAAfIgKAAIAAAUIgJAAIAAAKIgUAAIAAgKIgKAAIAAgKIgVAAIAAgKIgKAAIAAgKIgKAAIAAgLIgKAAIAAgUIAeAAIAAgKIALAAIAAgJIAKAAIAAgKIgfAAIAAgKIgKAAIAAgUIAKAAIAAgVIAKAAIAAgTIAVAAIAAAJIAKAAIAAAKIAUAAIAAgcIAJAAIAAgdIAKAAIAAgVIAKAAIAAgKIgKAAIAAgUIAUAAIAAgKIAzAAIAAAKIAJAAIAAAKIAKAAIAAAfIAKAAIAAAUIAKAAIAAAlIALAAIAAAfIAKAAIAAAeIAKAAIAAAdIAKAAIAAAUIAKAAIAAALIAJAAIAAAUIgJAAIAAAKIgUAAIAAAKgADNAoIAUAAIAAgLIgKAAIAAgdIgKAAgAlNCqIAAgKIgLAAIAAgpIgKAAIAAjGIgKAAIAAgKIAKAAIAAgKIA8AAIAAAKIAUAAIAACLIgKAAIAABuIgKAAIAAAKgAkvCWIAJAAIAAgKIgJAAgAmyCqIAAgKIgKAAIAAgKIgKAAIAAgUIgKAAIAAgVIgKAAIAAgdIgJAAIAAgKIgpAAIAAAKIgKAAIAAAdIgKAAIAAAfIgKAAIAAAUIgKAAIAAAKIgTAAIAAgKIgKAAIAAgKIgVAAIAAgKIgKAAIAAgKIgKAAIAAgLIgKAAIAAgUIAeAAIAAgKIALAAIAAgJIAKAAIAAgKIgfAAIAAgKIgKAAIAAgUIAKAAIAAgVIAKAAIAAgTIAVAAIAAAJIAKAAIAAAKIATAAIAAgcIAKAAIAAgdIAKAAIAAgVIAKAAIAAgKIgKAAIAAgUIAUAAIAAgxIALAAIAAgVIAKAAIAAgKIgVAAIAAAfIgUAAIAAgzIA9AAIAAAKIAJAAIAAAUIAKAAIAAAKIgKAAIAAAVIgJAAIAAAKIgKAAIAAATIATAAIAAAKIAKAAIAAAKIAKAAIAAAfIAKAAIAAAUIAKAAIAAAlIALAAIAAAfIAKAAIAAAeIAKAAIAAAdIAKAAIAAAUIAJAAIAAALIAKAAIAAAUIgKAAIAAAKIgTAAIAAAKgAoBAoIAUAAIAAgLIgKAAIAAgdIgKAAgAr7CgIAAgKIgKAAIAAioIAKAAIAAgeIgfAAIAAAKIgUAAIAAgKIgKAAIAAgLIgKAAIAAgeIB4AAIAAgKIA8AAIAAAKIAKAAIAAApIgKAAIAAAKIg8AAIAAAvIAKAAIAABQIALAAIAABHg");
	mask.setTransform(83.5,19);

	// Layer 2
	this.instance = new lib.sprite19();
	this.instance.setTransform(36.2,-105.3,0.433,0.995,35.9);
	this.instance.compositeOperation = "overlay";

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:24.7,regY:117.5,scaleX:0.43,scaleY:1,rotation:36,x:-15.8,y:-4.3},0).wait(1).to({x:-7.6},0).wait(1).to({x:0.6},0).wait(1).to({x:8.8},0).wait(1).to({x:17},0).wait(1).to({x:25.2},0).wait(1).to({x:33.4},0).wait(1).to({x:41.6},0).wait(1).to({x:49.8},0).wait(1).to({x:58.1},0).wait(1).to({x:66.3},0).wait(1).to({x:74.5},0).wait(1).to({x:82.7},0).wait(1).to({x:90.9},0).wait(1).to({x:99.1},0).wait(1).to({x:107.3},0).wait(1).to({x:115.5},0).wait(1).to({x:123.7},0).wait(1).to({x:132},0).wait(1).to({x:140.2},0).wait(1).to({x:148.4},0).wait(1).to({x:156.6},0).wait(1).to({x:164.8},0).wait(1).to({x:173},0).wait(1).to({x:181.2},0).wait(1).to({x:189.4},0).wait(1).to({x:197.6},0).wait(1).to({x:205.9},0).wait(32));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,73.6,38);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AExA2IAAgKIgKAAIAAg6IAKAAIAAgKIAnAAIAAgeIApAAIAABsgAFFAZIAKAAIAAAKIAJAAIAAgmIgJAAIAAAIIgKAAgADNA2IAAgnIAKAAIAAgKIAeAAIAAgIIgoAAIAAgLIAKAAIAAgKIA7AAIAABEIAKAAIAAAKgADrAjIAKAAIAAgKIgKAAgABzA2IAAgKIgLAAIAAg6IALAAIAAgKIA7AAIAAAKIAKAAIAAATIAKAAIAAAUIgKAAIAAATIgKAAIAAAKgACHAZIAKAAIAAAKIAKAAIAAgmIgKAAIAAAIIgKAAgAA3A2IAAhsIAdAAIAABsgAAEA2IAAgxIgSAAIAAAxIgdAAIAAhOIBEAAIAAAKIAKAAIAABEgAhyA2IAAgdIgJAAIAAAdIgeAAIAAgKIgLAAIAAgdIgKAAIAAgdIgKAAIAAgKIAfAAIAAAKIAKAAIAAALIAKAAIAAgVIAdAAIAAAVIAKAAIAAgLIAKAAIAAgKIAfAAIAAAKIgKAAIAAAdIgLAAIAAAngAkIA2IAAgKIgKAAIAAgvIAKAAIAAgVIA8AAIAAAKIAKAAIAAALIAKAAIAAAmIgKAAIAAAJIgKAAIAAAKgAjzAZIAKAAIAAAKIAKAAIAAgKIAKAAIAAgUIgKAAIAAgIIgKAAIAAAIIgKAAgAmAA2IAAhsIBRAAIAAAUIAJAAIAAAfIAKAAIAAAIIgKAAIAAAeIgJAAIAAATgAliAjIAVAAIAAgKIAKAAIAAgxIgKAAIAAgKIgVAAg");
	mask.setTransform(38.5,5.5);

	// Layer 2
	this.instance = new lib.sprite19();
	this.instance.setTransform(22.8,-68.2,0.141,0.634,35.8);
	this.instance.compositeOperation = "overlay";

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:24.7,regY:117.5,scaleY:0.64,rotation:35.9,x:-10.6,y:-5.2},0).wait(1).to({x:-3.1,y:-4.6},0).wait(1).to({x:4.4,y:-4},0).wait(1).to({x:11.9,y:-3.5},0).wait(1).to({x:19.4,y:-2.9},0).wait(1).to({x:26.9,y:-2.3},0).wait(1).to({x:34.4,y:-1.8},0).wait(1).to({x:41.9,y:-1.2},0).wait(1).to({x:49.4,y:-0.6},0).wait(1).to({x:56.9,y:0},0).wait(1).to({x:64.4,y:0.5},0).wait(1).to({x:71.9,y:1.1},0).wait(1).to({x:79.4,y:1.7},0).wait(1).to({x:87,y:2.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35,11);


(lib.sprite45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 9
	this.instance = new lib.sprite44();
	this.instance.alpha = 0.129;
	this.instance.filters = [new cjs.ColorFilter(1, 1, 1, 1, -49, -81, -25, 0)];
	this.instance.cache(-54,-54,108,108);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.32},5).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false,alpha:0.129},0).wait(1));

	// Layer 7
	this.instance_1 = new lib.sprite42();
	this.instance_1.setTransform(0,0,2.609,0.037,0,180,0);
	this.instance_1.alpha = 0.422;
	this.instance_1.compositeOperation = "lighter";
	this.instance_1.filters = [new cjs.BlurFilter(3, 3, 1)];
	this.instance_1.cache(-91,-91,183,183);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0.68},5).to({alpha:0.512},2).to({_off:true},1).wait(1).to({_off:false,alpha:0.488},0).to({alpha:0.68},3).to({alpha:0.422},7).wait(1));

	// Layer 5
	this.instance_2 = new lib.sprite42();
	this.instance_2.setTransform(0,0,0.401,0.208);
	this.instance_2.alpha = 0.82;
	this.instance_2.compositeOperation = "lighter";
	this.instance_2.filters = [new cjs.BlurFilter(30, 30, 1)];
	this.instance_2.cache(-91,-91,183,183);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:0.922},5).to({alpha:0.891},1).to({alpha:0.859},1).to({alpha:0.82},1).to({alpha:0.922},4).to({alpha:0.859},4).to({_off:true},1).wait(1).to({_off:false,alpha:0.84},0).to({alpha:0.82},1).wait(1));

	// Layer 3
	this.instance_3 = new lib.sprite42();
	this.instance_3.setTransform(0,0,1.279,0.255);
	this.instance_3.alpha = 0.781;
	this.instance_3.compositeOperation = "lighter";
	this.instance_3.filters = [new cjs.ColorFilter(1, 0.46875, 0.21875, 1, 28, -20, 13, 0), new cjs.BlurFilter(24, 24, 1)];
	this.instance_3.cache(-91,-91,183,183);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:0.801},1).to({alpha:0.898},4).to({alpha:0.828},3).to({alpha:0.84},2).to({alpha:0.898},2).to({alpha:0.859},2).to({alpha:0.781},5).wait(1));

	// Layer 1
	this.instance_4 = new lib.sprite42();
	this.instance_4.setTransform(0,0,1.794,0.59);
	this.instance_4.alpha = 0.648;
	this.instance_4.filters = [new cjs.ColorFilter(1, 0.640625, 0.078125, 1, 112, -51, 38, 0), new cjs.BlurFilter(16, 16, 1)];
	this.instance_4.cache(-91,-91,183,183);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:0.738},5).to({alpha:0.648},3).to({alpha:0.672},1).to({alpha:0.738},3).to({alpha:0.699},3).to({alpha:0.648},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-237.6,-68.8,481,143);


(lib.sprite49copy = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.sprite45();
	this.instance.setTransform(819.2,-14.6,1.368,0.953);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(497.6,-72.9,647,119);


(lib.sprite20 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.sprite19_1();
	this.instance.setTransform(-38.1,-35.8,3.117,3.117);
	this.instance.filters = [new cjs.BlurFilter(2, 2, 1)];
	this.instance.cache(6,3,12,23);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.5,-21.7,30,63);


(lib.sprite21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sprite20();
	this.instance.setTransform(-76.5,13.6,1,1,-15);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-3.8,x:-61.7,y:-13.5,alpha:0.34},1).to({scaleX:1,scaleY:1,rotation:3.5,x:-48.1,y:-34.8,alpha:0.629},1).to({rotation:8.5,x:-36.5,y:-50.5,alpha:0.84},1).to({rotation:11.5,x:-27.7,y:-61.2,alpha:1},1).to({scaleX:1,scaleY:1,rotation:15.6,x:-9.2,y:-81,alpha:0.961},1).to({rotation:18.8,x:10.9,y:-99.5,alpha:0.922},1).to({scaleX:1,scaleY:1,rotation:21,x:31.2,y:-116.3,alpha:0.879},1).to({scaleX:1,scaleY:1,rotation:23.3,x:52.3,y:-132.2,alpha:0.84},1).to({scaleX:1,scaleY:1,rotation:24.5,x:73.2,y:-146.3,alpha:0.801},1).to({scaleX:1,scaleY:1,rotation:26.8,x:115.7,y:-171.9,alpha:0.73},2).to({rotation:27.3,x:136.5,y:-183.4,alpha:0.691},1).to({scaleX:1,scaleY:1,rotation:26.8,x:156.1,y:-193.7,alpha:0.66},1).to({scaleX:1,scaleY:1,rotation:25.6,x:216.3,y:-223.8,alpha:0.551},3).to({scaleX:1,scaleY:1,rotation:24.1,x:234,y:-233.3,alpha:0.52},1).to({rotation:22.8,x:251.6,y:-242.9,alpha:0.488},1).to({scaleX:1,scaleY:1,rotation:20,x:284.8,y:-262.1,alpha:0.43},2).to({scaleX:1,scaleY:1,rotation:18.5,x:300.5,y:-271.7,alpha:0.41},1).to({scaleX:1,scaleY:1,rotation:14,x:345,y:-301.7,alpha:0.32},3).to({scaleX:1,scaleY:1,rotation:10.5,x:369.7,y:-320.2,alpha:0.281},2).to({scaleX:1,scaleY:1,rotation:4,x:416.6,y:-360.1,alpha:0.18},4).to({rotation:-5.3,x:461.7,y:-405.1,alpha:0.078},5).to({scaleX:1,scaleY:1,rotation:-9,x:475.9,y:-420.9,alpha:0.051},2).to({rotation:-11,x:482.6,y:-428.7,alpha:0.039},1).to({scaleX:1,scaleY:1,rotation:-15,x:495.6,y:-444.4,alpha:0},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.9,-10.2,45,68);


(lib.sprite22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// Layer 19
	this.instance = new lib.sprite21();
	this.instance.setTransform(352.1,86,0.935,0.54,0,77.3,-106.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({_off:false},0).wait(1));

	// Layer 17
	this.instance_1 = new lib.sprite21();
	this.instance_1.setTransform(364.8,-87.9,0.688,0.746,0,-8.8,2.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(44).to({_off:false},0).wait(6));

	// Layer 15
	this.instance_2 = new lib.sprite21();
	this.instance_2.setTransform(448.7,-127.9,0.675,0.751,0,-14,-7.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({_off:false},0).wait(11));

	// Layer 13
	this.instance_3 = new lib.sprite21();
	this.instance_3.setTransform(361.4,-59.9,1,1.355,0,-7.3,0);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(29).to({_off:false},0).wait(21));

	// Layer 11
	this.instance_4 = new lib.sprite21();
	this.instance_4.setTransform(416.1,-226.4,0.914,0.618,0,98.6,-85.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(24).to({_off:false},0).wait(26));

	// Layer 9
	this.instance_5 = new lib.sprite21();
	this.instance_5.setTransform(440.8,-16.1,0.996,1.069,0,-7.3,4.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(19).to({_off:false},0).wait(31));

	// Layer 7
	this.instance_6 = new lib.sprite21();
	this.instance_6.setTransform(253.5,-37.7,0.918,0.568,0,101.4,-93.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15).to({_off:false},0).wait(35));

	// Layer 5
	this.instance_7 = new lib.sprite21();
	this.instance_7.setTransform(422.6,128,1.14,1.272,0,-16.1,-11.7);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10).to({_off:false},0).wait(40));

	// Layer 3
	this.instance_8 = new lib.sprite21();
	this.instance_8.setTransform(509.9,16.5,0.93,0.552,0,92,-98.9);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(3).to({_off:false},0).wait(47));

	// Layer 1
	this.instance_9 = new lib.sprite21();
	this.instance_9.setTransform(371.3,15.2,0.688,0.746,0,-8.8,2.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(304.1,5.5,38,52);



var 	urlmykhoi= "/img/khoiden.webm";
var 	urlmykhoi1= "/img/luabay.webm";
var 	urlmykhoi2= "/img/sangchay.webm";
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
(lib.bt = function(mode,startPosition,loop) {
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

	// Layer 2
	this.khoidenmc = new lib.Symbol3();
		this.khoidenmc=createVideoBitmap(202,236,urlmykhoi);
	this.khoidenmc.setTransform(198,73.7,1,1.083,-5.5,0,0,119,84.5);

	this.timeline.addTween(cjs.Tween.get(this.khoidenmc).wait(2));

	// m tai
	this.instance = new lib.mask();
	this.instance.setTransform(141.5,187.5,1,1,0,0,0,83.5,36.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// m dow
	this.instance_1 = new lib.Symbol2();
	this.instance_1.setTransform(135.5,218.5,1,1,0,0,0,38.5,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

	// Layer 5
	this.instance_2 = new lib.sprite22();
	this.instance_2.setTransform(170.7,142.5,0.188,0.188,-32.5);

	this.instance_3 = new lib.sprite22();
	this.instance_3.setTransform(-17.3,89.1,0.188,0.139,6.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).wait(1));

	// Layer 8
	this.instance_4 = new lib.sprite49copy();
	this.instance_4.setTransform(-153.2,165.2,0.387,0.363,0.5);
	this.instance_4.alpha = 0.301;
	this.instance_4.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2));

	// Layer 11 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ArKLiQgvgcgsggQibhuhUiFIAAquQBUiECbhvQFSjzHdAAQHeAAFTDzQCIBiBSBzIAALrQhSByiIBiQgsAggvAcgApKH+IRaAAIAAlPIxaAAg");
	var mask_graphics_1 = new cjs.Graphics().p("ArKLiQgvgcgsggQibhuhUiFIAAquQBUiECbhvQFSjzHdAAQHeAAFTDzQCIBiBSBzIAALrQhSByiIBiQgsAggvAcgApKH+IRaAAIAAlPIxaAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:143.5,y:183.3}).wait(1).to({graphics:mask_graphics_1,x:143.5,y:183.3}).wait(1));

	// Layer 9
	this.mc = new lib.Symbol5();
		this.mc=createVideoBitmap(202,236,urlmykhoi2);
	this.mc.setTransform(91.6,159,0.581,0.581,0,0,0,105.1,47);
	this.mc.compositeOperation = "lighter";
	this.mc._off = true;

	this.mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1).to({_off:false},0).wait(1));

	// Layer 10 copy
	this.luabaymc2 = new lib.Symbol4();
	this.luabaymc2=createVideoBitmap(202,236,urlmykhoi1);
	this.luabaymc2.setTransform(113.1,232.1,1.228,1,0,0,0,114,167);
	this.luabaymc2.compositeOperation = "lighter";

	this.luabaymc2.mask = mask;

	// Layer 10
	this.luabaymc = new lib.Symbol4();
		this.luabaymc=createVideoBitmap(202,236,urlmykhoi1);
	this.luabaymc.setTransform(113.1,232.1,1.228,1,0,0,0,114,167);
	this.luabaymc.compositeOperation = "lighter";

	this.luabaymc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.luabaymc).wait(2));

	// taigame
	this.instance_5 = new lib.taigame_1();
	this.instance_5.setTransform(156.5,129.5,1,1,0,0,0,156.5,129.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.9,-28.8,388.1,303);


(lib.Tg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var mybtn, mybtnmc;
		
		mybtn = this.btn;
		mybtnmc = this.btnmc;
		//mymc = mybtnmc.mc;
		
		//mymc.alpha = 0;
		
		mybtn.addEventListener("click", ClickHandler);
		mybtn.addEventListener("mouseover", OverHandler);
		mybtn.addEventListener("mouseout", OutHandler);
		function ClickHandler(event)
		{
		//	alert("tg");
			calltg();
			
		}
		function OverHandler(event)
		{
		
			//mymc.alpha = 1;
				mybtnmc.gotoAndPlay(1);
		}
		function OutHandler(event)
		{
		
		//	mymc.alpha = 0;
				mybtnmc.gotoAndStop(0);
		}
		
		//mybtn.addEventListener("mouseout", function(){mymc.gotoAndPlay(0);mymc.alpha = 0;});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 4
	this.btn = new lib.Symbol1();
	this.btn.setTransform(567.6,477.1,1,1,0,0,0,115.6,83);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// bt
	this.btnmc = new lib.bt();
	this.btnmc.setTransform(578.5,414.5,1,1,0,0,0,156.5,129.5);

	this.timeline.addTween(cjs.Tween.get(this.btnmc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(359.1,256.2,388.1,427.9);


// stage content:
(lib._315x280_Canvas = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Tg();
	this.instance.setTransform(538,75.9,1,1,0,0,0,960,340);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(94.6,132.1,388.1,427.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;