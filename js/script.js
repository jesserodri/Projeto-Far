
document.addEventListener("DOMContentLoaded", function() {
    // Obtenha a referência da imagem
    var croco = document.getElementById("croco");
    var sakamoto = document.getElementById("sakamoto");
    var greijo = document.getElementById("greijo");
    var logoFar = document.getElementById("logo_far");
    
    // Adicione um evento de clique à imagem
    croco.addEventListener("click", function() {
        // Redirecione para outro documento HTML local ao clicar na imagem
        window.location.href = "croco.html";
    });
    sakamoto.addEventListener("click", function(){
        window.location.href = "sakamoto.html"
    });
    greijo.addEventListener("click", function(){
        window.location.href = "greijo.html"
    });
    logoFar.addEventListener("click", function(){
        window.location.href = "index.html"
    });

});

