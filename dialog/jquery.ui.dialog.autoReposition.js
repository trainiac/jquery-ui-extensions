(function( $ ) {
var prevHeight;
$.ui.dialog.prototype.options.autoReposition = true;
$( window ).resize(function() {
    
    /* This really only needs to be here for ie6 because the browser fires the window resize event whenever doing any     DOM manipulation.  Infinite loops ensue*/
    var height = jQuery(window).height();
    if (prevHeight == height) {
        return;
    } else {
        prevHeight = height;
    }

    $( ".ui-dialog-content:visible" ).each(function() {
        var dialog = $( this ).data( "dialog" );
        if ( dialog.options.autoReposition ) {
            dialog.option( "position", dialog.options.position );
        }
    });

});

})( jQuery );
