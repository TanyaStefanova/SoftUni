function wall(arr) {
    let array = arr.map(Number);
    let finalConcrete = 0;
    let dailyConcrete = [];
    let crews = array.filter(x => x < 30).length;
    let costs = 0;

    while (crews !== 0) {
        let concreteByAllCrews = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] < 30) {
                array[i]++;
                concreteByAllCrews += 195;
                if (array[i] === 30) {
                    crews--;
                }
            }
        }

        finalConcrete += concreteByAllCrews;
        dailyConcrete.push(concreteByAllCrews);
    }

    costs = finalConcrete * 1900;
    console.log(dailyConcrete.join(', '));
    console.log(`${costs} pesos`);
}
wall([21, 25, 28]);
wall([17])