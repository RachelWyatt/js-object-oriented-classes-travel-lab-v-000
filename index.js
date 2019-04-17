class Driver {
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date (startDate + "Z");
  }
  
  yearsExperienceFromBeginningOf(year) {
    year - startDate.year
  }
}
