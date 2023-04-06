var mattTeamScores = 2 + 0 + 0;
var lukeTeamScores = 1 + 0 + 0;
var maryTeamScores = 1 + 0 + 0;
 
var averageScoreLuke = lukeTeamScores / 3;
var averageScoreMatt = mattTeamScores / 3;
var averageScoreMary = maryTeamScores / 3;

console.log("Average score Luke: "+averageScoreLuke);
console.log("Average score Matt: "+averageScoreMatt);
console.log("Average score Mary: "+averageScoreMary);

//only Luke and Matt

/*if ( averageScoreMatt > averageScoreLuke){
	console.log("Matt's team win by "+ averageScoreMatt+" points");
}else if (averageScoreMatt == averageScoreLuke){
	console.log("There is a draw between Matt's team and Luke's by "+ averageScoreMatt+" points");
}else{
	console.log("Luke's team win by "+ averageScoreLuke+" points");
}*/

console.log("\n");

//all three

if ((averageScoreMatt > averageScoreLuke) && (averageScoreMatt > averageScoreMary)) {
	console.log("Matt's team win by "+ averageScoreMatt+" points");
}else if (( averageScoreLuke > averageScoreMatt) && (averageScoreLuke > averageScoreMary)) {
	console.log("Luke's team win by "+ averageScoreLuke+" points");
}else if (( averageScoreMary > averageScoreMatt) && (averageScoreMary > averageScoreLuke)) {
	console.log("Mary's team win by "+ averageScoreMary+" points");
}else if (( averageScoreMatt == averageScoreLuke) && (averageScoreMatt == averageScoreMary)) {
	console.log("There is a draw by "+ averageScoreMatt+" points");
}else{
	//look up for two draw
	switch(true) {
		case (averageScoreMatt == averageScoreLuke) && (averageScoreMatt > averageScoreMary):
				console.log("There is a draw between Matt and Luke teams they win by "+averageScoreMatt+" points over Mary's");
				break;
		case (averageScoreMatt == averageScoreMary) && (averageScoreMatt > averageScoreLuke):
				console.log("There is a draw between Matt and Mary teams they win by "+averageScoreMatt+" points over Luke's");
				break;
		case (averageScoreLuke == averageScoreMary) && (averageScoreLuke > averageScoreMatt):
				console.log("There is a draw between Luke and Mary teams they win by "+averageScoreLuke+" points over Matt's");
				break;
		default:
				console.log("Unable to process");
				break;
	}
}


