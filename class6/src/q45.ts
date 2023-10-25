function createCar(manufacturer: string, model: string, ...options: [string, any][]): Record<string, any> {
    const car: Record<string, any> = {
        manufacturer: manufacturer,
        model: model
    };

    for (let i = 0; i < options.length; i++) {
        const [key, value] = options[i];
        car[key] = value;
    }

    return car;
}

const myCar = createCar("Toyota", "Camry", ["color", "blue"], ["year", 2022]);


console.log(myCar);



