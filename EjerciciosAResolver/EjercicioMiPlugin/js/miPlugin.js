(function ( $ ) 
{

    $.fn.miPlugin = function( options ) 
    {                             
        this.each(function () 
        {            
            var width = $(this).width();
            $(this).css('display' , 'block');
            $(this).css('width', width + 60);
        });        
                    
        var $parent = this.parent();
        $parent.css({
            'position'  : 'relative',
            'width'     :   this.width(),
            'padding'   :   '0 5px 0 5px'
        });                
        
        var $back = this.siblings();
        $back.css({
            'position' :    'absolute',
            'left'      :   '0',
            'right'     :   '0',
            'top'       :   '0',
            'bottom'    :   '0',
            'width'     :   '0',
            'z-index'   :   '-1'
        });                                     
        
        return this;                
    }  
    
}( jQuery ));
