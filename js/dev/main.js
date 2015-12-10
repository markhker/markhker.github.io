
$(document).ready(function() {
    
    // On a window scroll
    $(window).scroll( function(){
    
        // Check the location of each element
        $('.hide-me').each( function(i){
            
            var topOfElement = $(this).offset().top;
            var bottomWindow = $(window).scrollTop() + $(window).height();
            
            topOfElement = topOfElement + 200;  
            
            // If the object is visible, fade it
            if( bottomWindow > topOfElement ){
                $(this).animate({'opacity':'1'}, 500);
            }
        });
    });
});
