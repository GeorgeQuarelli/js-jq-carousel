$('.next').click(next);
$('.prev').click(prev);
//click sucessivo
//intercettare il click sulla classe next
function next() {
    //recupero l'img che ha la classe active
    var img_corrente = $ ('img.active');
    console.log(img_corrente);
    // recupero il pallino corrente
   var pallino_corrente = $('.fa-circle.active');
    //tolgo la classe active all img img_corrente
    img_corrente.removeClass('active')
    // tolgo la classe active al pallino corrente
    pallino_corrente.removeClass('active');
    //recupero l'immagine sucessiva
    var img_successiva = img_corrente.next('img');
    console.log(img_successiva);
    // recupero il pallino successivo
    var pallino_successivo = pallino_corrente.next('.fa-circle');
    //verifico cche ci sia un img
    if(img_successiva.length != 0) {

        img_successiva.addClass('active');
        pallino_successivo.addClass('active');
    } else {

        img_successiva = $('img:first-child');
        img_successiva.addClass('active');
        $('.fa-circle:first-child').addClass('active');
    }
};

//click precedente
//intercettare il click sulla classe prev
function prev () {
    //recupero l'img che ha la classe active
    var img_corrente = $ ('img.active');
    // recupero il pallino corrente
    var pallino_corrente = $('.fa-circle.active');
    //tolgo la classe active all img img_corrente
    img_corrente.removeClass('active')
    // tolgo la classe active al pallino corrente
   pallino_corrente.removeClass('active');
    //recupero l'immagine sucessiva
    var img_precedente = img_corrente.prev('img');
    // recupero il pallino precedente
 var pallino_precedente = pallino_corrente.prev('.fa-circle');

    //verifico cche ci sia un img
    if(img_precedente.length != 0) {

        img_precedente.addClass('active');
        pallino_precedente.addClass('active');
    } else {

        img_precedente = $('img:last-of-type');
        img_precedente.addClass('active');
        $('.fa-circle:last-child').addClass('active');
    }
};
//Play e Pausa
var timer;
//intercetto il click su play e gli applico il setInterval per avviare le immagini ogni 3 secondi
$('.play').click(function() {
    timer = setInterval(next, 3000);
});
//Intercetto il click su pause per interrompere ila riproduzione ogni 3 secondi
$('.pausa').click(function() {
    clearInterval(timer);
});
