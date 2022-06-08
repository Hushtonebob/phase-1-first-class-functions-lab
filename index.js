// Code your solution in this file!
let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
let newDrivers = [];

const returnFirstTwoDrivers = (drivers) => {
    let newDrivers = drivers.slice(0,2);
    return newDrivers;
};

const returnLastTwoDrivers = (drivers) => {
    let newDrivers = drivers.slice(2)
    return newDrivers;
};

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const blam = (num) => num * 5;

function createFareMultiplier(){
    return blam;
}

function fareDoubler(num){
    return blam(num) - 30;
}

const fareTripler = () => 36;

function selectDifferentDrivers(drivers,fun){
    return fun(drivers);   
};