//Recuerdo que: "Every class or module should be written in its own separate file."
//También recuerdo que: "Samples for Classes / Modules: js/classes/Movie.class.js"
//Y ahora la cago:
//Class Observable.
function Observable(){

	this.observers = [];
	//Notify Observers.
	Observable.prototype.notifyObservers = function(){ //Paso data = this y luego pregunto por this.state
		this.observers[0].update(this); //Acá iría un foreach
	}
}

//Class Movie extends Observable.
Movie.prototype = new Observable(); //Tramitación de herencia...creo
Movie.prototype.constructor = Movie; //TDH
function Movie(){
	Observable.call(this); //TDH
	var id = null;
	var title = null;
	var rating = null;
	var state = 'stopped';
	
	this.getTitle = function(){
		return title;
	}
	
	this.setTitle = function(t){
		title = t;
	}
	
	this.getId = function(){
		return id;
	}
	
	this.setId = function(newId){
		id = newId;
	}
	
	this.getRating = function(){
		return rating;
	}
	
	this.setRating = function(r){
		rating = r;
	}

	this.play = function(){
		state = 'playing';
		this.notifyObservers(this);
	}
	
	this.stop = function(){
		state = 'stopped';
		this.notifyObservers(this);
	}
	
	this.getState = function(){
		return state;
	}
}

//------------------------------------------------------------------------------------

/* Interface Observer.
interface Observer(){
	function update(data);
}
*/

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


//------------------------------------------------------------------------------------

//Downloadble Movie
//Class DownloadbleMovie extends Movie.
DownloadbleMovie.prototype = new Movie(); //Tramitación de herencia...creo
DownloadbleMovie.prototype.constructor = DownloadbleMovie; //TDH
function DownloadbleMovie(){
	Movie.call(this); //TDH
	
	this.download = function(){
		alert('Downloading '+this.getTitle());
	}

}

//------------------------------------------------------------------------------------

/* Mixin Ejercicio 10 */

/* Augment function. */
function augment(receivingClass, givingClass) {
	for(methodName in givingClass.prototype) {
		if(!receivingClass.prototype[methodName]) {
			receivingClass.prototype[methodName] = givingClass.prototype[methodName];
		}
	}
}

/* Mixin class. */
var Mixin = function() {};
Mixin.prototype = {
	like: function(name){
		console.log(name+' likes '+this.getTitle());
	},
	
	share: function(name){
		console.log('Sharing '+this.getTitle()+' with '+name);
	}
};

//------------------------------------------------------------------------------------

//Ejemplo de uso:
var m = new Movie();
m.setId('1');
m.setTitle('Terminator');
m.setRating('4.1');

var movieObserver = new MovieObserver();

m.observers.push(movieObserver);
m.play(); //Ejecuta 2 veces el update y no sé por qué.
m.stop(); //Es lo mismo que me pasaba con los alert. Necesito saber dónde arreglar eso.!

//Keypoint 8:
d = new DownloadbleMovie();
d.setId('2');
d.setTitle('Exterminators');
d.setRating('4.9');
d.download(); //2 veces aparece el alert por misteriosos motivos.

//Keypount 10:
augment(Movie, Mixin);
var movie = new Movie();
movie.setTitle('Ironman 2');
movie.share('Mohammed');
movie.like('Rambo');