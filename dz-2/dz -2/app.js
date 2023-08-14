var array = ['Bishkek', 42, 'Chicago', 'New York', 'Houston', 'Dallas', 'Philadelphia', 'Seattle']
var newmassiv = []

 for (var word of array){
    if( word.length >7 ){
        newmassiv.push(word)
    }
}
 console.log(newmassiv)


var starbucks = {
    coffee:
        [
            {
                name: ' latte' ,
                discript :  "Espresso with steamed milk",
            },
            {
                name: ' americano' ,
                discript :  "Espresso with hot water"
            },
            {
                name: ' cappuccino' ,
                discript :  "Espresso with equal parts of steamed milk and milk foam"
            },
        ],
    tea:
        [
            {
                name: ' green tea ' ,
                discript :  "Traditional green tea"
                ,
            },
            {
                name: "Chai Tea Latte",
                discript :"Spiced black tea with steamed milk"

            },
            {
                name: "Herbal Tea",
                discript :  "Caffeine-free herbal infusion"

            },
        ],
    otherDrinks:
        [
            {
                name:"Hot Chocolate" ,
                discript :"Rich and creamy hot chocolate",
            },

            {
                name: "Iced Coffee",
                discript :  "Chilled coffee over ice"

            },
        ],

}
console.log(starbucks)

var date = prompt('enter number')
let number = Number ( date )
switch (number){
    case 1 :
        alert('Monday')
        break ;
    case 2 :
        alert('Tuesday')
        break;
    case 3 :
        alert('Wednesday')
        break;
    case 4 :
        alert('Thursday')
        break;
    case 5 :
        alert('Friday')
        break;
    case 6 :
        alert('Saturday')
        break;
    case 7 :
        alert( 'Sunday')
        break;
    default:
     alert   ( 'Invalid input')
        break;
}




