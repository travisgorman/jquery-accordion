var $menu = $('li');

$menu.on('click', function(){
 $menu.addClass('hide');
 $( this ).removeClass( 'hide' );
 $( this ).addClass( 'active' );

});