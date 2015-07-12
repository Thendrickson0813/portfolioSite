$(document).ready(function() {

   
        

    // owl.carousel-------------------------------

     $("#owl-demo").owlCarousel({
 
navigation : false, // Show next and prev buttons
slideSpeed : 600,
paginationSpeed : 400,
singleItem:true,
// autoPlay: true, 
// "singleItem:true" is a shortcut for:
 items : 1,
// itemsDesktop : false,
// itemsDesktopSmall : false,
// itemsTablet: false,
// itemsMobile : false
 
});

    // owl.carousel second one on page.
    // owl.carousel-------------------------------

       $("#owl-demo2").owlCarousel({
 
autoPlay: 3000, //Set AutoPlay to 3 seconds
 
items : 4,
itemsDesktop : [1199,3],
itemsDesktopSmall : [979,3]
 
});
 // dropdown mouse over   
    $('.dropdown-toggle').dropdownHover(options);
      
});