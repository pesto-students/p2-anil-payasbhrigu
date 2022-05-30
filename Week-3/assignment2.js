// =====================
// BIND
// =====================

var car = {
    model: 2013,
    power : 75,
    getPower: function (){
        return this.power + ' horsepower';
    }
}

console.log(car.getPower())    //! => 75 horsepower

let carPower1 = car.getPower
console.log(carPower1())        //! => undefined horsepower

let carPower2 = car.getPower.bind(car)
console.log(carPower2())        //! => 75 horsepower

// =====================
// CALL
// =====================

function makeCar(mileage, model){
    var specs = [
        this.car,
        'has',
        this.power,
        'horsepower and',
        mileage,
        ' mileage and it is a',
        model,
        ' Model'
    ].join(' ')
    console.log(specs)
}

var swift = {
    car: 'swift',
    power:75
}

var innova = {
    car: 'innova',
    power: 89
}

makeCar.call(swift,93,2013)  //! swift has 75 horsepower and 93  mileage and it is a 2013  Model
makeCar.call(innova,109,2015)  //! innova has 89 horsepower and 109  mileage and it is a 2015  Model

// =====================
// APPLY
// =====================

function driveCar(speed,average){
    var details = [
        this.company,
        this.car,
        'is being driven at',
        speed,
        'kmph and average is',
        average
    ].join(' ')
    console.log(details)
}

var swift = {
    car: 'swift',
    company:'Maruti Suzuki'
}

var innova = {
    car: 'innova',
    company:'Toyota'
}

driveCar.apply(swift, [89,65]) //! kia has 67 horsepower and 98  mileage and it is a 2019  Model

var kiaSpecs = [
    78,
    85
]

driveCar.apply({ car:'Seltos', company:'Kia'}, kiaSpecs) //! kia has 67 horsepower and 98  mileage and it is a 2019  Model