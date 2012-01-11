$('#trash').bind('dragenter', function(){
	$('#trash').css({
		'background': 'url(\'iphone_vs_stone.jpg\') no-repeat'
	});
});

$('#trash').bind('dragleave', function(){
	$('#trash').css({
		'background':'red'
	});
});


/*
Eventos:
+dragstart
Comienza el arrastrado. El �target� del evento ser� el elemento que est� siendo arrastrado.
+drag
El elemento ha sido movido. El �target� del evento ser� el elemento arrastrado.
+dragenter
Se dispara cuando un elemento que est� siendo arrastrado entra en un contenedor. El �target� del evento ser� el elemento contenedor.
+dragover
El elemento ha sido movido dentro del contenedor. El �target� del evento ser� el elemento contenedor. Como el comportamiento por defecto es denegar el �drop�, la funci�n debe retornar el valor �false� o llamar a �preventDefault� para que indicar que se puede el soltar elemento.
+dragleave
El elemento arrastrado ha salido del contenedor. El �target� del evento ser� el elemento contenedor.
+drop
El elemento arrastrado has sido �xitosamente soltado en el elemento contenedor. El �target� del evento ser� el elemento contenedor.
+dragend
Se ha dejado de arrastrar el elemento, con �xito o no. El �target� del evento ser� el elemento arrastrado.

*/