// this is the code which will be injected into a given page...




(function() {

	// just place a div at top right
	//alert(arguments.callee.count);

	if ($(".toolsoftheextension")[0]){
    // Do something if class exists
    	$( ".toolsoftheextension" ).remove();
    	$( "#canvasdivoftheextension" ).remove();


	} else {
	    // Do something if class does not exist
	

		var div = document.createElement('div');
		div.className = 'toolsoftheextension';
		div.style.width="100%";
		div.style.height="7.5%";
		div.style.backgroundColor="#808080";
		div.style.zIndex = 2147483647;
		div.style.position = 'fixed';
		//document.body.appendChild(div);
		$('body').prepend(div);

		//var downloadbutton = '<a href="" id="downloadbuttonofextension" style="float: right; width: 100px;">Download</a>';
		//div.innerHTML=downloadbutton;

		
		// just place a div at top right
		var canvasdiv = document.createElement('div');
		canvasdiv.id="canvasdivoftheextension";
		canvasdiv.style.width="100%";
		canvasdiv.style.height="100%";
		canvasdiv.style.position = 'fixed';
		canvasdiv.style.top = 0;
		canvasdiv.style.zIndex   = 997;
		canvasdiv.style.right = 0;
		document.body.appendChild(canvasdiv);

		var canvas = document.createElement('canvas');
	    canvas.id     = "colors_sketch";
	    canvas.width  = $(window).width();
	    canvas.height = $(window).height();
	    canvas.style.position = "fixed";
	    canvasdiv.appendChild(canvas);
	    $.each(['#f00', '#ff0', '#0f0', '#0ff', '#00f', '#f0f', '#000', '#fff'], function(index, value) {
	      $('.toolsoftheextension').append("<a href='#colors_sketch' data-color='" + this + "' style='width: 30px;margin-top:0.4em; height: 30px; background: " + this + ";display: inline-block;'></a> ");
	    });
	    $.each([3, 5, 10, 15], function(index, value) {
	      $('.toolsoftheextension').append("<a href='#colors_sketch' data-size='" + this  + "' style=' margin-bottom:1em;background: #ccc;font-size:x-large;'>" + this  + "</a> ");
	    });
	    $('.toolsoftheextension').append('<a href="#colors_sketch" data-tool="marker" style="margin:10px;" width: 100px;>Marker</a>');
	    $('.toolsoftheextension').append('<a href="#colors_sketch" data-tool="eraser" style="margin:10px">Eraser</a>');
	    $('#colors_sketch').sketch();
	    $('#downloadbuttonofextension').click(function(){
	    	alert("aaya");
	    	chrome.tabs.captureVisibleTab(null, {format : "png",quality : 100}, function (image) {
   				// You can add that image HTML5 canvas, or Element.
   				screenshot.data=image;
			});
	    });
	}




})();