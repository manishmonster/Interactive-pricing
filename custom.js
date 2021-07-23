$unitprice = 0.16;
$discount = 25;
$(function(){
    rangeChange();
    sliderProgressBarForchrome();
});
$('.billing-based').change(function(){
    console.log('used');
    rangeChange();
});
var checkbox = document.querySelector("input[type=checkbox]");
checkbox.addEventListener('change', function() {
    rangeChange()
  });
$('.slider-bar').on("change mousemove", function() {
    rangeChange();
    sliderProgressBarForchrome();
});
function sliderProgressBarForchrome(){
    var val = ($('.slider-bar').val() - $('.slider-bar').attr('min')) / ($('.slider-bar').attr('max') - $('.slider-bar').attr('min'));
    var percent = val * 100;
    $('.slider-bar').css('background-image',
        '-webkit-gradient(linear, left top, right top, ' +
        'color-stop(' + percent + '%, hsl(174, 77%, 80%)), ' +
        'color-stop(' + percent + '%, hsl(224, 65%, 95%))' +
        ')'); 
}
function rangeChange() {
    
    $pageviewCurrently = $('.slider-bar').val();
    $total = $pageviewCurrently * $unitprice;
    if($('input[type=checkbox]').is(':checked')){
        
        $total = $total - (0.25 * $total); 
        
    }
    
    $('.pageview > span').text($pageviewCurrently+'K');
    $('.price-detail').text($total.toFixed(2));
}