(function(){
	//cli prompt function
	var fs = require('fs');
	var prompt = function(msg) {
		fs.writeSync(1, String(msg));
		let s = '', buf = Buffer.alloc(1);
		while(buf[0] - 10 && buf[0] - 13)
		s += buf, fs.readSync(0, buf, 0, 1, 0);
		return s.slice(1);
	};

	function Question(question, answers, correct){
		this.question = question;
		this.answers = answers;
		this.correct = correct;
	}

	Question.prototype.displayQuestion = function(){
		console.log(this.question);
		for(var i=0; i< this.answers.length; i++){
			console.log(i + ':' + this.answers[i]);
		}
	}

	Question.prototype.checkAnswer = function(answer){
		if (answer === this.correct){
			console.log('Correct answer!');
		}else{
			console.log('Wrong answer. Try again');
		}
	}

	var questionOne = new Question('> Is Javascript the coolest programming language in the world?', ['Yes', 'No'], 0);
	var questionTwo = new Question('> What the name of the Software to navigate the web?', ['Terminal', 'Media Player', 'Browser'], 2);
	var questionThree = new Question('> What language is used do define page web?', ['Java', 'C/C++', 'HTML'], 2);

	var questions = [questionOne, questionTwo, questionThree];

	var n = Math.floor(Math.random() * questions.length);

	questions[n].displayQuestion();

	var answer = parseInt(prompt('Please select the correct answer : '));

	questions[n].checkAnswer(answer);
})();