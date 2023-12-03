class Student {
  //class properties
  private id: number;
  private name: string;
  private lastName: string;
  private age: number;
  private sex: string;
  //constructor to inicialize the properties
  constructor(
    id: number,
    name: string,
    lastName: string,
    age: number,
    sex: string
  ) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.sex = sex;
  }
  // instance function
  public getId() {
    return this.id;
  }
  public getName() {
    return this.name;
  }
  public getLastName() {
    return this.lastName;
  }
  public getAge() {
    return this.age;
  }
  public getSex() {
    return this.sex;
  }
}
