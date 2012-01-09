$('#trash').bind('dragenter', function(){
	$('#trash').css({
		'background':'orange'
	});
});

$('#trash').bind('dragleave', function(){
	$('#trash').css({
		'background':'red'
	});
});

$('#trash').bind('drop', function(event){
	console.log(event);
	if (event.dataTransfer) {
			var format = "Text";
			var textData = event.dataTransfer.getData (format);
			if (!textData) {
				textData = "<span style='color:red'>The data transfer contains no text data.</span>";
			}
			
			var targetDiv = document.getElementById ("target");
			targetDiv.innerHTML = textData;
	}

	
	
});


/*
Eventos:
+dragstart
Comienza el arrastrado. El “target” del evento será el elemento que está siendo arrastrado.
+drag
El elemento ha sido movido. El “target” del evento será el elemento arrastrado.
+dragenter
Se dispara cuando un elemento que está siendo arrastrado entra en un contenedor. El “target” del evento será el elemento contenedor.
+dragover
El elemento ha sido movido dentro del contenedor. El “target” del evento será el elemento contenedor. Como el comportamiento por defecto es denegar el “drop”, la función debe retornar el valor “false” o llamar a “preventDefault” para que indicar que se puede el soltar elemento.
+dragleave
El elemento arrastrado ha salido del contenedor. El “target” del evento será el elemento contenedor.
+drop
El elemento arrastrado has sido éxitosamente soltado en el elemento contenedor. El “target” del evento será el elemento contenedor.
+dragend
Se ha dejado de arrastrar el elemento, con éxito o no. El “target” del evento será el elemento arrastrado.

*/