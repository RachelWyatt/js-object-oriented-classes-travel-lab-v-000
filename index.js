class Driver extends Date {
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date (startDate + "Z");
  }
}
