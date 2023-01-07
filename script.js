$(document).ready(function () {

    $("#items img:eq(0)").addClass("banner-ativo").show()

    setInterval(slide, 2000)
    function slide() {
        if ($(".banner-ativo").next().length) {
            $(".banner-ativo").removeClass("banner-ativo").hide().next().addClass("banner-ativo").show()
        } else {
            $(".banner-ativo").removeClass().hide()
            $("#items img:eq(0)").addClass("banner-ativo").show()
        }
    }

})
  $('.carrosel').carrosel()


const imgs = document.getElementById("imagens");
const image = document.querySelectorAll("#items items-wrapper");

let idx = 0;
function items(){
    idx++;
    if(idx > image.length - 1){
        idx = 0;
    }
    imgs.style.transform = 'translateX(${-idx x 80}vw)';

}
setInterval (items, 1800);
$(document).ready(function() {
  
  $("#items img:eq(0)").addClass("banner-ativo").show()
  
  setInterval(slide, 5000)
  function slide() {
    if( $(".banner-ativo").next().length ) {
        $(".banner-ativo").removeClass("banner-ativo").hide().next().addClass("banner-ativo").show()
    } else {
      $(".banner-ativo").removeClass().hide()
       $("#items img:eq(0)").addClass("banner-ativo").show()
    }
  }
    
})