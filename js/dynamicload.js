function dynamicload(id){
	var ps = document.getElementById(id).getElementsByTagName( "div" );

	for( var i = 0, il = ps.length; i < il; i++ ){
		var imgSrc = ps[ i ].getAttribute( "img-src" );
		if( imgSrc !== null ){
			var picImg = ps[ i ].getElementsByTagName( "img" )[ 0 ];
			if( !picImg ){
				picImg = window.document.createElement( "img" );
				ps[ i ].appendChild( picImg );
				picImg.src =  imgSrc;
				picImg.className = "large";
			}
		}
	}
};

$(document).ready(function () {
	$("a").click(function () {
		classname = $(this).attr('class')
	    if (classname == "aBox" || classname == "previous" || classname == "next" || classname == "close") 
	    {
			page = $(this).attr('href');
			
			// Fix the page history
			if ($.browser.msie && $.browser.version>8 || !$.browser.msie) 
			{
			  url = window.location.href.split('#')[0];
			  text = url + page;
			  history.replaceState({}, "", text);
			}
			
			if (classname != "close")
			{
				target = window.location.href.split('#')[1];
				num = target.split('t')[1];
				dynamicload('h' + num);
			}
		}
	});
});
