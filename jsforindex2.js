
var mainList = {
	budget:  firmaBudget,
	nameofshop: '',
	shopGoods: ['Kartoffel' , 'karotte' , 'löffel'],
	employers: {},
	open: true
}


mainList.shopGoods[0] = prompt('Was möchtest du in deinem Shop verkaufen? Artikel: 1');
mainList.shopGoods[1] = prompt('Was möchtest du in deinem Shop verkaufen? Artikel: 2');
mainList.shopGoods[2] = prompt('Was möchtest du in deinem Shop verkaufen? Artikel: 3');
// var mainlist.firmaName = prompt('What is the name of your shop?');
// var mainlist.firmaBudget = +prompt('How big is your Budget?');
mainList.budget = +prompt('Wie groß ist dein Budget?');
mainList.nameofshop = prompt('Wie heißt dein Shop?');

var firmaBudget = mainList.budget;
var firmaName = mainList.nameofshop;

console.log(mainList);
console.log('The Budget is: ' + firmaBudget);
console.log('The Name is: ' + firmaName);

