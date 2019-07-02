
$( document ).ready(function() {
	// alert("bienvenue");
	$( "p" ).on( "click", function() {
		if ($(this).hasClass('red')) {
			$(this).removeClass('red'); 
		}else{	
			$(this).addClass('red');
        }  		
         // $(this).html("FLEEKAH"); 
    });
});

