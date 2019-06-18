
$( document ).ready(function() {
	alert("bienvenue");
	$( "p" ).on( "click", function() {
		if ($("p").hasClass('red')) {
			$("p").removeClass('red'); 
		}else{	
			$("p").addClass('red');
        }  		  
    });
});

