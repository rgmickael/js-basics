var john={
	name: 'John',
	restaurantBills: [500, 300, 60],
	tipsAmount: [],
	totalAmount: [],
	allBills: function(){
		console.warn("Restaurant bills ("+this.name+"): ");
		for (var i = 0; i < this.restaurantBills.length; i++) {
			console.log(this.restaurantBills[i]);
		}
	},
	calculateTips: function(){
		for(var i = 0; i < this.restaurantBills.length; i++){
		  this.tipsAmount.push( this.tip( this.restaurantBills[i] ) );			
		}
	},
	tip: function(bill){
		switch (true) {
		case (bill < 50):
			return bill * 0.20;
		case ((bill < 200) && (bill >= 50)):
			return bill * 0.15;
		case (bill > 200):
			return bill * 0.10;
		default:
			return 0;
		}
	},
	total: function(){
		console.warn("Total to paid after tips added ("+this.name+"): ");
		for (var i = 0; i < this.restaurantBills.length; i++) {
		  	this.totalAmount.push(this.restaurantBills[i] + this.tipsAmount[i])		
		  	console.log(this.totalAmount[i]);	
		}
	},
	average: function(){
		var sum = 0;
		for (var i = 0; i < this.tipsAmount.length; i++) {
		  	this.totalAmount.push(this.restaurantBills[i] + this.tipsAmount[i])		
		  	sum+=this.tipsAmount[i]	
		}
		return (sum / this.tipsAmount.length);
	}
 }

 var mark={
	name: 'Mark',
	restaurantBills: [125, 45, 265],
	tipsAmount: [],
	totalAmount: [],
	allBills: function(){
		console.warn("Restaurant bills ("+this.name+"): ");
		for (var i = 0; i < this.restaurantBills.length; i++) {
			console.log(this.restaurantBills[i]);
		}
	},
	calculateTips: function(){
		for(var i = 0; i < this.restaurantBills.length; i++){
		  this.tipsAmount.push( this.tip( this.restaurantBills[i] ) );			
		}
	},
	tip: function(bill){
		switch (true) {
		case (bill < 100):
			return bill * 0.20;
		case ((bill < 300) && (bill >= 100)):
			return bill * 0.10;
		case (bill > 300):
			return bill * 0.25;
		default:
			return 0;
		}
	},
	total: function(){
		console.warn("Total to paid after tips added ("+this.name+"): ");
		for (var i = 0; i < this.restaurantBills.length; i++) {
		  	this.totalAmount.push(this.restaurantBills[i] + this.tipsAmount[i])		
		  	console.log(this.totalAmount[i]);	
		}
	},
	average: function(){
		var sum = 0;
		for (var i = 0; i < this.tipsAmount.length; i++) {
		  	this.totalAmount.push(this.restaurantBills[i] + this.tipsAmount[i])		
		  	sum+=this.tipsAmount[i]	
		}
		return (sum / this.tipsAmount.length);
	}
 }

john.allBills();
john.calculateTips();
john.total();

breakLine();

mark.allBills();
mark.calculateTips();
mark.total();

breakLine();

compareAverage(john, mark);

function compareAverage(personOne, personTwo){
	if ( personOne.average() > personTwo.average() ) {
		console.log(personOne.name+" is more generous");
	}else if (personOne.average() == personTwo.average() ) {
		console.log(personOne.name+" and "+personTwo+" are generous people");		
	}else{
		console.log(personTwo.name+" is more generous");		
	}
}

function breakLine(){
	console.log("\n");
}





