var mainList = {
	budget:  firmaBudget,
	nameofshop: '',
	shopGoods: ['Kartoffel' , 'karotte' , 'löffel'],
	employers: {},
	open: true
}

function shopGoods (count) {
	for (let i = 0 ; i <= count ; i++){
		var save = prompt('Was möchtest du in deinem Shop verkaufen?');
		if (mainList.shopGoods[i] == "") {
			mainList.shopGoods[i] = save;
		}
	}
}

shopGoods(3);


mainList.budget = +prompt('Wie groß ist dein Budget?');
mainList.nameofshop = prompt('Wie heißt dein Shop?');

var firmaBudget = mainList.budget;
var firmaName = mainList.nameofshop;

console.log(mainList);
console.log('The Budget is: ' + firmaBudget);
console.log('The Name is: ' + firmaName);

