define(
	function(){
		return {
			name: '-',
			quotes: '-',
			setQuotes: function(q){
				this.quotes = q;
			},
			
			speak: function(){
				return this.quotes;
			},
			
			setName: function(n){
				this.name = n;
			},

			getName: function(){
				return this.name;
			}
		}
	}
);