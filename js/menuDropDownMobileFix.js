$(function(){
    //Add OnResize event
    window.onresize = myResize;
    myResize();
});

//This finction will fire each time the browser is resized
function myResize(){
    //Get browser/device height and width
    var bWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var bHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    //If viewport is lower than ipad, hence mobile
    if(bWidth < 768){
        // ADD SLIDEDOWN ANIMATION TO DROPDOWN //
        $('.dropdown').on('show.bs.dropdown', function(e){
            $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
        });

        // ADD SLIDEUP ANIMATION TO DROPDOWN //
        $('.dropdown').on('hide.bs.dropdown', function(e){
            e.preventDefault();
            $(this).find('.dropdown-menu').first().stop(true, true).slideUp(400, function(){
                //On Complete, we reset all active dropdown classes and attributes
                //This fixes the visual bug associated with the open class being removed too fast
                $('.dropdown').removeClass('open');
                $('.dropdown').find('.dropdown-toggle').attr('aria-expanded','false');
            });
        });
    }
}