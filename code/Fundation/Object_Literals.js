const person = {
    firstName: 'Yixuan',
    lastName:'Xu',
    age:9,
    email:'yixuanxu94@gmail.com',
    hobbies: ['music', 'sports'],
    address:{
        city:'London',
        street:'Street'
    }
}
let val = person.address;
console.log(val);
val = person.hobbies[0];
console.log(val);
val = person.address.city;
console.log(val);
val = person.address['street'];
console.log(val);