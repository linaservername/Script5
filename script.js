// const users = {}

// for (let i = 1; i <= 5; i++) {
//     let name = prompt('Type your name')
//     let age = +prompt('Type your age')
//     users[i] = {
//         name: name,
//         age: age
//     }
// }
// for (const key in users) {
//     console.log('user ' + key);
//     for(const newKey in users[key]){
//         console.log(newKey == 'name' ? 'your name is ' + users[key][newKey] : 'your age is ' + users[key][newKey]);
//     }
// }


const cart = receipt()

let del = 9000
let menu = 'You ordered '

for (const key in cart) {
    menu = menu + ' ' + key
    for (const newKey in cart[key]) {
        menu = newKey == 'info' ? menu + ' ' + cart[key][newKey] : menu + ''
        del = newKey == 'price' ? del + cart[key][newKey] : del
    }
}
console.log(menu + ' Overall price with delivery ' + del);
