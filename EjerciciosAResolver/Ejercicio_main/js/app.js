$(document).ready(function()
{
    /*
   $(document).ready(function()
    {    
        var tiempoAnterior = Date.now();
        
        setInterval (function()
        { 
            var ahora = Date.now();
            var lapsoDeTiempo = ahora - tiempoAnterior;
            //$('#parpadear').css('background','rgb(250,30,30)') ;
            
            if(lapsoDeTiempo > 3000)
            { 
                console.log('paso');
                
                
                lapsoDeTiempo = Date.now();
            }
            
        }, 1000/30);
    });
*/
   
   
   $(window).on('scroll',function(event)
   {
       var topOffset = $('#menuContainer').offset().top;
        
       if(topOffset> 0) 
       {
           if ($('#menuContainer').css("background-color")!="rgba(0, 0, 0, 0)")
            return;
           
           $('#menuContainer').css('background','white');
           $('#liSignUp').animate({
               width:0
           },500);
           
           
       }
       else
       {
           
          $('#menuContainer').css('background','none'); 
          
          $('#liSignUp').stop(true).animate({
               width:100
           },500);
           
       }
   });
   
   
   $( "#login").mouseover(function() {
      var topOffset = $('#menuContainer').offset().top;
      
      if(topOffset== 0) 
       return;
          
               
      $('#menuContainer').css('background','none'); 
          
          $('#liSignUp').stop(true).animate({
               width:100
           },500);
           console.log('no');
      
   });
   
   
   $( "#login").mouseleave(function() {
      
     var topOffset = $('#menuContainer').offset().top; 
      if(topOffset== 0) 
       return; 
       
      if ($('#menuContainer').css("background-color")!="rgba(0, 0, 0, 0)")
            return;
           
           $('#menuContainer').css('background','white');
           $('#liSignUp').animate({
               width:0
           },500);
           
           console.log('si');
      
   });
    
    
});
 