"use strict";
class Student {
    //constructor to inicialize the properties
    constructor(id, name, lastName, age, sex) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.sex = sex;
    }
    // instance function
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getLastName() {
        return this.lastName;
    }
    getAge() {
        return this.age;
    }
    getSex() {
        return this.sex;
    }
}
