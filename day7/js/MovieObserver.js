//Class MovieObserver implements Observer.
function MovieObserver(){
	
	this.update = function(data){ // data: Observable object.
		if( data.getState() == 'playing' ){
			console.log( 'Plaing '+data.getTitle() );
		}
		
		if( data.getState() == 'stopped' ){
			console.log( data.getTitle() + ' is stopped.' );
		}		
		//...
		//...
	}
}