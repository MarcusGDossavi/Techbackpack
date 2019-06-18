
$( document ).ready(function() {
	alert("bienvenue");
	$( "li" ).on( "click", function() {
		if ($(this).hasClass('red')) {
			$(this).removeClass('red'); 
		}else{	
			$(this).addClass('red');
        }  		  
    });
});

