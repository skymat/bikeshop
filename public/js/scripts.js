$("document").ready(function() {



//Fonction non exécutée, gardée pour mémoire
$('.linkdelete').on('click', function(e) {
    return;
    event.preventDefault();
   var link = $(this).attr("href");
$(this).parent().fadeOut(function(){
        $.get( link, function( data ) {
            
            var $jQueryObject = $($.parseHTML(data));
            var cart = $jQueryObject.find(".cart").html();
            $(".cart").html(cart);

        });
     });   
});


$('.linkdelete').on('click', function(e) {
    event.preventDefault();
   var link = $(this).attr("href");
$(this).parent().fadeOut(function(){
            //Permet de faire à la fois le get, et un remplacement de contenu parseHTML
            //Exactement équivalent à la fonction du dessus
            $(".cart").load(link+" .cart");

     });   
});


})