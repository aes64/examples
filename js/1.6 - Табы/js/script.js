console.log("1.3")

const human = {
    color: 'green',
    radius: 120,
    lineWidth: 1.6,
    isFilled: false,
    friends: ['Masha', "Petr"],
    pet: {
        type: "cat",
        name: "Sari"
    },
    sayHello: function (params) {
        return "Hello " + params
    },
    sayHello2(params) {
        return "Hello " + params
    },
};

// Метод - это функция, которая лежит внутри объекта


console.log(human.pet);
console.log(human.sayHello2());


human.friends.forEach(item => console.log(item))
human.friends.hehe = function (params) {
    console.log('hehehe');
}
console.log(human.friends);
human.friends.hehe();

// TODO: поговорить про бигО
// bigO()