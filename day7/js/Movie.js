define(['./Director'], function (d){
	return{
		//Observable.call(this);
		id : null,
		title : null,
		rating : null,
		state : 'stopped',
		director : d,

		setDirector: function(dir){
			this.director = dir;
		},
		
		getDirector: function(){
			return  d;
		},
		
		getTitle : function(){
			return this.title;
		},
		
		setTitle : function(t){
			this.title = t;
		},
		
		getId : function(){
			return this.id;
		},
		
		setId : function(newId){
			this.id = newId;
		},
		
		getRating : function(){
			return this.rating;
		},
		
		setRating : function(r){
			this.rating = r;
		},

		play : function(){
			this.state = 'playing';
			//this.notifyObservers(this);
		},
		
		stop : function(){
			this.state = 'stopped';
			//this.notifyObservers(this);
		},
		
		getState : function(){
			return this.state;
		}
	}
});

define("main", function(){});