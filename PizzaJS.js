
				//William van de Wiel, A3, Pizzacalculator.
const TEXT = 'Welcome to Willys Peperoni';
const SMALLPRICE = 4.80;
const MEDIUMPRICE = 5.99;
const LARGEPRICE = 6.99;

//Constant voor de prijzen van de pizza's.

alert (TEXT);

var small = prompt( "How many small pizza's would you like? These pizza's are 12 inches." );
var medium = prompt( "How many medium pizza's would you like? These are 14 inches." );
var large = prompt( "How many large pizza's would you like? These are 16 inches." );
//Variables voor de maten en de afmetingen van de pizza's, d.m.v een prompt.

var smallTotal = small * SMALLPRICE;
var mediumTotal = medium * MEDIUMPRICE;
var largeTotal = large * LARGEPRICE;
var total = smallTotal + mediumTotal + largeTotal;

//Berekening van de prijzen en totaalbedrag.

total = Number(total).toFixed(2);

//Rond de af op 2 decimalen.

document.write("Total of small pizza's " + smallTotal + '\u20ac' + '<br>');
document.write("Total of medium pizza's " + mediumTotal + '\u20ac' + '<br>');
document.write("Total of large pizza's " + largeTotal + '\u20ac' + '<br>');
document.write('So your subtotal is ' + total + '\u20ac');

//De subtotalen door middel van document.write.




