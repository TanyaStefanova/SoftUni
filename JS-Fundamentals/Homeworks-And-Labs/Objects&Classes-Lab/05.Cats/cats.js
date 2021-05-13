function cats(arr) {

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    // let cats = [];

    for (let i = 0; i < arr.length; i++) {
        let catData = arr[i].split(' ');
        let name = catData[0];
        let age = Number(catData[1]);
        // Може и само така:
        // let[catName, catAge] = arr[i].split(' ')];

        let cat = new Cat(name, age);
        // cats.push(cat);
        cat.meow();
    }

    // for (let cat of cats) {
    //     cat.meow();
    // }
    // или
    // cats.forEach(x => meow());

}
cats(['Mellow 2', 'Tom 5']);