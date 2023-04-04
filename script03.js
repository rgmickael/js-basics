var restaurantBills = [125, 45, 265];

console.log(restaurantBills);

function calculateTip(bill){
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
}

var tipAmount = [
	calculateTip(restaurantBills[0]),
	calculateTip(restaurantBills[1]),
	calculateTip(restaurantBills[2])
];

console.log(tipAmount);

var totalAmount = [
	restaurantBills[0] + tipAmount[0],
	restaurantBills[1] + tipAmount[1],
	restaurantBills[2] + tipAmount[2]
];

console.log(totalAmount);



