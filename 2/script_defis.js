$( document ).ready(function() {

  function getUsername() {
      //affiche une boite de dialogue 
      var  user = prompt("Veuillez rentrez votre nom:", "");
      // la fonction se termine en retournant le nom récupéré par la boite de dialogue
      return user
  }
  function welcome() {
    var name= getUsername();
    $("#welcome").html('<h4>Bienvenue '+name+', <br> sois prêt pour de nouveaux défis ! </h4>');

  };
  // Appel la fonction
  welcome();

  function loadChallenges() {
    
    $.ajax(
          {url : 'https://s3.eu-central-1.amazonaws.com/spintransfer/challenge.json',
          type: 'GET',
          dataType: 'json'} 
    )
    .done(function(data) {
      showChallenge(data);
    })
    .fail(function() {
      alert( "error" );
    });
  }

  function showChallenge(liste) {

    var data="";

    for ( var i=0; i < liste.length; i++) {
      data+='<div class="defi">';

      var challenge=liste[i];

      data+='<h2>'+challenge.nom+'</h2>';
      data+='<p>'+challenge.description+'</p>';
      data+='<iframe src="'+challenge.youtube+'" allowfullscreen="" width="364" height="204" frameborder="0"></iframe>'
      data+="</div>";
    }
    $("#defis").html(data);

  }

  loadChallenges();

  $("#download").on( "click", function() {
    alert( "Bientôt disponible")
  })

})


 //if ($(this).hasClass('red')) {
       // $(this).removeClass('red'); 
      // }else{  
        // $(this).addClass('red');
          //}     
           // $(this).html("FLEEKAH"); 

// function welcome() {
   // $("#welcome").html('<h4>Bienvenue , <br> soyez pret à renouveler de nouveaux défis !</h4>');
//};

