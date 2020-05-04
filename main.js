//click sucessivo
//intercettare il click sulla classe next
$('.next').click(function() {
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
});

//click precedente
//intercettare il click sulla classe prev
$('.prev').click(function() {
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
    var img_successiva = img_corrente.prev('img');
    // recupero il pallino precedente
 var pallino_precedente = pallino_corrente.prev('.fa-circle');
    console.log(img_successiva);
    //verifico cche ci sia un img
    if(img_successiva.length != 0) {

        img_successiva.addClass('active');
          pallino_precedente.addClass('active');
    } else {

        img_successiva = $('img:last-child');
        img_successiva.addClass('active');
        $('.fa-circle:last-child').addClass('active');
    }
});
