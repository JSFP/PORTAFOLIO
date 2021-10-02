$(".info").click(function() {
    let informacion = $(this).parent().attr("data-informacion")
    $(".modal-info").text(informacion)
});