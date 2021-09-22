    // var myFriends = ['Abbas', 'kabbas', 'dhandabaj', 'chalbaj'];
    // console.log(myFriends);
// console.log(myFriends);
// function bestFriend(myFriends) {
    
//     var longest = ' ';
//     for(var i = 0; i <= myFriends.length; i++) {
//         if(myFriends.length > longest.length) {
//             longest == myFriends;
//         }
//     }
//     return longest;
    
    
    // for(var word of words) {
    //     console.log(words);
    // }
// }
// console.log(myFriends);
// console.log(bestFriend(myFriends));
// console.log(longest);

const myFriends = ['Abbas', 'kabbas', 'dhandabaj', 'chalbaj'];

function bestFriend(values) {
    let heighst = ' ';
    for(let i = 0; i<values.length; i++){
        if(values[i].length > heighst.length) {
            heighst = values[i];
        }
    }
    return heighst;
}

console.log(bestFriend(myFriends));