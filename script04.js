var john={
	name: 'John',
	height: 200,
	mass: 200,
	calculateBMI: function(){
		this.bmi = this.mass / this.height**2;
	}
}

var mark={
	name: 'Mark',
	height: 200,
	mass: 20,
	calculateBMI: function(){
		this.bmi = this.mass / this.height**2;
	}
}

john.calculateBMI();
mark.calculateBMI();

console.log(john.name+": "+john.bmi);
console.log(mark.name+": "+mark.bmi);

compareBMI(john, mark);

function compareBMI(personOne, personTwo){
	if(personOne.bmi > personTwo.bmi){
		console.log(personOne.name+" has more bmi than "+personTwo.name);
	}else if(personOne.bmi == personTwo.bmi){
		console.log(personOne.name+" has the same bmi as "+personTwo.name);
	}else{
		console.log(personTwo.name+" has more bmi than "+personOne.name);
	}
}