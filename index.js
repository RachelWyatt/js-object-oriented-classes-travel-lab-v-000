class Driver {
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date (startDate + "Z");
  }
  
  yearsExperienceFromBeginningOf(year) {
    startYear = startDate.getFullYear();
    return (year - startYear);
  }
}
