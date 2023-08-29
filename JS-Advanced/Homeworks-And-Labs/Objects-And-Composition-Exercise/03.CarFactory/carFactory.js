function carFactory(car) {

    function createEngine(horsePowers) {
        let engine = {};

        if (horsePowers <= 90) {
            engine.power = 90;
            engine.volume = 1800;
        } else if (horsePowers > 90 && horsePowers <= 120) {
            engine.power = 120;
            engine.volume = 2400;
        } else if (horsePowers > 120) {
            engine.power = 200;
            engine.volume = 3500;
        }
        return engine;
    }

    function createCarriage(type, color) {
        let carriage = {
            type,
            color
        };
        return carriage;
    }

    function createWheels(num) {
        let size = num % 2 == 0 ? num - 1 : num;
        let wheels = [size, size, size, size];
        return wheels;
    }

    return {
        model: car.model,
        engine: createEngine(car.power),
        carriage: createCarriage(car.carriage, car.color),
        wheels: createWheels(car.wheelsize),
    }
}
carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
});