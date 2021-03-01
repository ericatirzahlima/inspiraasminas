var botaoMenuHamburguer = document.querySelector(".botao.menuHamburguer");

function abrirMenu(){

	var menu = document.querySelector("#navegacaoPrimaria")
	if (menu.className == "menuHorizontal visivel") {
		menu.className = "menuHorizontal";
	}
	else{
		menu.className = "menuHorizontal visivel";
	}
}

botaoMenuHamburguer.onclick = abrirMenu;

(function($) {
    "use strict"; 
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 40)
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });

})(jQuery);
