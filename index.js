class Driver {
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date (startDate + "Z");
  }
  
  yearsExperienceFromBeginningOf(year) {
    let startYear = this.startDate.getFullYear();
    return (year - startYear - 1);
  }
}
class Route {
  constructor (beginningLocation, endingLocation){
    
  }
  blocksTravelled () {
    
  }
}