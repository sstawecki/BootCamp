//Class Observable.
define(
	function Observable(){
		this.observers = [];
		Observable.prototype.notifyObservers = function(){
			this.observers[0].update(this); //Esto debería ser un foreach.
		}
	}
);