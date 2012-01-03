require(['Movie'], function(m) {
    console.log('Titulo: '+m.getTitle());
	m.setTitle('Terminator');
	console.log('Titulo seteado: '+m.getTitle());
	console.log('Estado actual: '+m.getState());
	console.log('Nombre del Director Sin Setear: '+m.getDirector().getName());
	m.getDirector().setName('Estiven Espilver');
	console.log('Nombre del Director Seteado: '+m.getDirector().getName());
});