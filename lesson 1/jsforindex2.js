var mainList = {
	budget:  '',
	nameofshop: '',
	shopGoods: ['Kartoffel' , 'karotte' , 'löffel'],
	employers: ['' , ''],
	open: true
}

var worker = {
	ids: []
}

function ourWorkers () {
	for (let x = 0 ; x <= 1 ; x++){
		var v = 1;
		var workerName = prompt('Wie heißt Worker');
		if (isNaN(workerName) && workerName != ''){
			mainList.employers[x] = workerName;
		}


		var workerId = prompt('What is worker Id?');
		if (workerId != 'string' && workerId != ''){
			worker.ids[x] = workerId;
		}
		++v
	}
}


function shopGoods (count) {

	for (let i = 0 ; i <= count ; i++){
		var input = prompt('what do you want to sell?');
        if(isNaN(input) && (typeof(input)) === 'string' && input != ''){
        	mainList.shopGoods[i] = input;
		}
	}	
}

var acept = 0;

function budgetGet () {
	if (acept == 0) {
		var mybudget = prompt("Wie hoch ist Ihr Budget?")
		if (mybudget != isNaN(mybudget) && mybudget != ''){
			mainList.budget = mybudget;
			++acept;
		}
	}
}


shopGoods(2);
budgetGet();
ourWorkers();




// mainList.budget = +prompt('Wie groß ist dein Budget?');
mainList.nameofshop = prompt('Wie heißt dein Shop?');

var firmaBudget = mainList.budget;
// var firmaName = mainList.nameofshop;

console.log(mainList);
console.log(worker);
console.log('The Budget is: ' + firmaBudget);
console.log('The Name is:' + mainList.nameofshop);
console.log('Your workers are: ' + mainList.employers[0] + (' , ') + mainList.employers[1]);
console.log('Worker1 ID = ' + worker.ids[0] + (' , ') + 'Worker2 ID = ' + worker.ids[1]);