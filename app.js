//Array Usecases For Entire Exercise
let toons = ['Family Guy', 'South Park', 'Rick & Morty', 'Invincible'];
let numbers = [1, 3, 10, 33, 100, 333];
let smallNumbers = [0, 2, 4, 6, 8, 8];
let jocks = [
    { name: "Bron", sport: "Basketball", bestYear: 2007 },
    { name: "OBJ", sport: "Football", bestYear: 2015 },
    { name: "Tyson", sport: "Boxing", bestYear: 1986 },
]
let jocksFullNames = [
    { first: 'LeBron', last: 'James' },
    { first: 'Odell', last: 'Beckham Jr' },
    { first: 'Mike', last: 'Tyson' }
];
let peeps = [
    { name: 'Deidre', age: 26, city: 'Brooklyn' },
    { name: 'Tasharah', gender: 'Female' },
    { name: 'Malik', gender: 'Male' },
    { name: 'Zoe', age: 25, city: 'Trenton' }
];
let users = [
    { username: 'sincerelydeidre' },
    { username: '444theloveoftash' },
    { username: '_mwilder' },
    { username: 'saintiv_' }
];

//Find- findUserByUsername
function findUserByUsername(users, username) {
    // Uses the find method to search for the first object with the specified username
    return users.find(function (user) {
        return user.username === username;
    });
}
let usernameFound = findUserByUsername(users, 'sincerelydeidre');
let userFound = findUserByUsername(users, 'princeof_ny_');
console.log(usernameFound); // Console: {username: 'sincerelydeidre'}
console.log(userFound); // Console: Undefined

//findIndex- removeUser
function removeUser(users, username) {
    // Uses the findIndex method to get the index of the object with the specified username
    let indexRemoval = users.findIndex(function (user) {
        return user.username === username;
    });
    // Checks if the object is found
    if (indexRemoval !== -1) {
        // Uses the splice method to remove the object and return it
        return users.splice(indexRemoval, 1)[0];
    }
    // Returns as undefined if the object is not found
    return undefined;
}
let removedUser = removeUser(users, '444theloveoftash');
console.log(removedUser); // Console: {username: '444theloveoftash'}
console.log(users); // Console: { username: 'sincerelydeidre' } {username: '_mwilder'} { username: 'saintiv_' }