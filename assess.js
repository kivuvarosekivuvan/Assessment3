
// First class Story that is inherited by legend and fiction
class Story{
    constructor(name,length,moralLesson,ageGroup){
        this.name=name
        this.length=length;
        this.moralLesson=moralLesson;
        this.ageGroup=ageGroup;
    }
    tellStory(){
        return `The story named ${this.name} narrated to ${this.ageGroup} aged-children and has ${this.length}length with ${this.moralLesson}lesson`
    }

}
const story=new Story('Big giant', '2 pages', 'Courage', '12')
console.log(story.tellStory())




class Legend extends Story{
    constructor(name,length,moralLesson,ageGroup,beliefs){
    super(name,length,moralLesson,ageGroup)
    this.beliefs=beliefs
    }
    tellStory(){
        return`The story ${this.name} is believed to have ${this.beliefs}`
    }
   
}
const result=new Legend('Lioness Kangwa', '1page', 'Bravery', '10','Legendary beliefs')
console.log(result.tellStory())

class Fiction extends Story{
    constructor(name,length,moralLesson,ageGroup,genre){
        super(name,length,moralLesson,ageGroup)
        this.genre=genre
        }
        tellStory(){
            return `Story ${this.name} is of ${this.genre} genre`
        }

}
const fiction=new Fiction('Chupwa chupwa', '1page', 'Bravery', '10','fantasy')
console.log(fiction.tellStory())




// Second class Story teller
class StoryTeller{
    constructor(storyteller_name,story_title,ageGroup,story_type){
        this.storyteller_name=storyteller_name;
        this.ageGroup=ageGroup;
        this.story_title=story_title;
        this.story_type=story_type
    }
    makeStory(){
        return`The story of ${this.story_title} is of ${this.story_type} is narrated by ${this.storyteller_name} to ${this.ageGroup} old children`
    }
}
const storyteller=new StoryTeller("Kelly","Big Giant","12 years","Drama")
console.log(storyteller.makeStory())


class ChildStoryTeller extends StoryTeller{
    constructor(storyteller_name,story_title,ageGroup,story_type){
        super(storyteller_name,story_title,ageGroup,story_type)
     ;
    }

    makeStory(){
        return`The story of ${this.story_title} is of ${this.story_type} is narrated by ${this.storyteller_name} to ${this.ageGroup} aged-children`
    }
}
const childstoryteller=new ChildStoryTeller("Dennis","The hyena","Fable","8")
console.log(childstoryteller.makeStory())

// Third class Translator
class Translator{
    constructor(language,story_title){
       this.language=language;
       this.story_title=story_title 
    }
    translateStory() {
        return`We are translating story: ${this.story_title} to ${this.language}`;
      }
}
const translator=new Translator("Kiswahili","Big Giant")
console.log(translator.translateStory())




// QUESTION2
class Recipe{
    constructor(foodName,ingredients,time,method,info){
        this.foodName=foodName;
        this.ingredients=ingredients;
        this.time=time;
        this.method=method;
        this.info=info;
    }
    showRecipe(){
        return `${this.foodName} has ${this.info} as nutritional value`
    }
}
const result2=new Recipe("Ugali", "Flour", "30mins", "Stirr", "Starch");
console.log(result2.showRecipe())




class MorrocanRecipe extends Recipe{
    constructor(foodName,ingredients,time,method,info,flavour){
        super(foodName,ingredients,time,method,info);
        this.flavour=flavour
    }
    showRecipe(){
        return `${this.foodName} requires ${this.flavour} flavour`
    }
}
const result3=new MorrocanRecipe("Tagine", "Flour", "1hour", "soak", "starch", "hot spicy")
console.log(result3.showRecipe());

class EthiopianRecipe extends Recipe{
    constructor(foodName,ingredients,time,method,info,flavour,fermentTime){
        super(foodName,ingredients,time,method,info,flavour);
        this.fermentTime=fermentTime;
    }
    showRecipe(){
        return `${this.foodName} needs to be fermented for ${this.fermentTime}`
    }
}
const result4=new EthiopianRecipe("Injera", "flour", "1hour", "Baking", "starch", "sour", "2days")
console.log(result4.showRecipe())

class NigerianRecipe extends Recipe{
    constructor(foodName,ingredients,time,method,info,flavour,cassavaQuantity){
        super(foodName,ingredients,time,method,info,flavour);
        this.cassavaQuantity=cassavaQuantity;
        }
    showRecipe(){
        return ` Family ${this.foodName} requires of ${this.cassavaQuantity} to feed the whole family`
    }    
}
const result5=new NigerianRecipe("Fufu", "cassava", "30mins", "boiling and mashing", "vitamins", "sweet", "1 kg")
console.log(result5.showRecipe())





// QUESTION 3

class Species {
  constructor(species_name, diet, typical_lifespan, habitat) {
    this.species_name = species_name;
    this.diet = diet;
    this.typical_lifespan = typical_lifespan;
    this.habitat = habitat;
  }

  migrate() {
    if (this.habitat === "Water") {
      return `${this.species_name} migrates to dryland during the winter season.`;
    } else if (this.habitat === "DryLand") {
      return `${this.species_name} migrates to water during the winter season.`;
    } else {
      return "Species does not migrate.";
    }
  }

  eat() {
    if (this.diet === "Herbivorous") {
      return `${this.species_name} eats plants only.`;
    } else if (this.diet === "Omnivorous") {
      return `${this.species_name} eats both plants and meat.`;
    } else {
      return "Diet is only meat.";
    }
  }
}

const animal = new Species("carnivorous", "plants only", "27", "water");
console.log(animal.migrate());
console.log(animal.eat());

class Predator extends Species {
  constructor(species_name, diet, typical_lifespan, habitat, hunting_method) {
    super(species_name, diet, typical_lifespan, habitat);
    this.hunting_method = hunting_method;
  }

  hunt() {
    if (this.hunting_method === "Stalking preys") {
      return `${this.species_name} stalks its prey before striking.`;
    } else if (this.hunting_method === "Striking") {
      return `${this.species_name} waits for the perfect moment to strike its prey.`;
    } else {
      return "Predator hunts using other techniques.";
    }
  }
}

const pred = new Predator("Lion", "meat only", "32", "cave", "stalking");
console.log(pred.hunt());

class Prey extends Species {
  constructor(species_name, diet, typical_lifespan, habitat) {
    super(species_name, diet, typical_lifespan, habitat);
  }

  escape() {
    if (this.typical_lifespan >= 30) {
      return "The prey is easily hunted.";
    } else if (this.typical_lifespan <= 20) {
      return "The prey can easily escape.";
    } else {
      return "The prey hides to avoid predators.";
    }
  }
}

const preyed = new Prey("Antelope", "plants only", 26, "grassland");
console.log(preyed.escape());





// QUESTION 4


class Artist{
  constructor(name,country,musicalStyle,instruments){
    this.name=name;
    this.country=country;
    this.musicalStyle=musicalStyle;
    this.instruments=instruments
    this.artistList=[]
  }
  addArtist(){
    if(this.artistList.includes(this.name)){
      console.log(`${this.name} is already on the artist list`);
    
    } 
    else{
      this.artistList.push(this.name)
      console.log(`${this.name} has been added successfully to the artist list`)
    }
  }
  
  removeArtist(name) {
    let removedArtist = null;
    for (let i = 0; i < this.artistList.length; i++) {
      if (this.artistList[i][0] === name) {
        removedArtist = this.artistList.splice(i, 1)[0];
        break;
        
      }
    }

    if (removedArtist) {
      console.log(`${removedArtist[0]} has been removed from the list.`);
    } else {
      console.log(`${name} is not a member.`);
    }
  }
  showArtistList() {
    if (this.artistList.length === 0) {
      console.log("The artist list is empty.");
    } else {
      console.log("Artist List:");
      for (let i = 0; i < this.artistList.length; i++) {
        const artist = this.artistList[i];
        console.log(`Name: ${artist[0]}, Country: ${artist[1]}, Style: ${artist[2]}, Instruments: ${artist[3]}`);
      }
    }
  }
  
  }

const artist=new Artist("Element Eleeh", "Rwanda", "Rap", "drums")
artist.addArtist()
const artist1=new  Artist("John")
artist1.removeArtist("John")

// class performance
class Performance{
  constructor(name,startTime,endTime){
    this.name=name;
    this.startTime=startTime;
    this.endTime=endTime;
    this.artistList=[["Element Eleeh", "Rwanda", "Rap", "drums"]]


  }
  planArtistSet(setSongs){
    console.log(`${this.name} will be perfoming the following songs: ${setSongs}`)
    return setSongs
  }
  callArtist(){
    if (this.artistList.length === 0) {
      console.log("No artists in the list to perform.");
    
    } 
    else{
          const artistOnStage=this.artistList[0]
          console.log(`${artist.name} is performing!`);

          this.artistList.shift()
          console.log(`${artist.name} has performed and has been removed from the artist list.`);
        return artistOnStage
      
    } 

  }
}
const perform=new Performance("Jane Otieno", "2:00pm", "12:00am")
perform.planArtistSet(["God is great" ,"kana"])
const perform1=new Performance("Rose","Kenya","Dombolo","mkono")
perform1.callArtist()
const perform2=new Performance("Kadogo", "2pm", "6pm")
perform2.planArtistSet(["Mama watoto", "Vuwanje"])


class Stage {
  constructor(capacity) {
      this.capacity = capacity;
      this.scheduledPerformances = [];
  }
  schedule(performance, time) {
      const totalMembers = performance.dancers + performance.bandMembers;
      if (this.scheduledPerformances.length < this.capacity && totalMembers <= this.capacity) {
          this.scheduledPerformances.push([performance, time]);
          console.log(`${performance.artist.name} has been scheduled to perform at ${time} on this stage.`);
      } else {
          console.log(`This stage is already fully scheduled or cannot accommodate ${artist.name}'s performance.`);
      }
  }
  checkCapacity(performance) {
      const totalMembers = performance.dancers + performance.bandMembers;
      if (totalMembers <= this.capacity) {
          console.log(`This stage can accommodate ${artist.name}'s performance.`);
      } else {
          console.log(`This stage cannot accommodate ${artist.name}'s performance.`);
      }
  }
}
// Adding artists to the list
const artist11 = new Artist("Artist 1", "Country 1", "Style 1", ["Instrument 1"]);
const artist2 = new Artist("Artist 2", "Country 2", "Style 2", ["Instrument 2"]);
// Creating performances
const performance1 = new Performance(artist1, 2, 4);
const performance2 = new Performance(artist2, 1, 3);
// Creating stage instance
const stage = new Stage(5);
// Scheduling performances on the stage
stage.schedule(performance1, "18:00");
stage.schedule(performance2, "20:00");
// Checking capacity for a performance
stage.checkCapacity(performance1);
stage.checkCapacity(performance2)



// QUESTION 5

class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  calculateTotal() {
    return this.price * this.quantity;
  }

  addQuantity(amount) {
    this.quantity += amount;
    console.log(`Quantity increased by ${amount}. Updated quantity: ${this.quantity}`);
  }


  updatePrice(newPrice) {
    if (newPrice >= 0) {
      this.price = newPrice;
      console.log(`Price updated to ${newPrice}`);
    } else {
      console.log("Invalid price. Price must be a non-negative value.");
    }
  }

}

const product = new Product("Ilera Yoghurt", 10.99, 3);
product.calculateTotal()
product.addQuantity(2); 
product.updatePrice(15.99); 


// QUESTION6
class Student {
  constructor(name, age, grades) {
    this.name = name;
    this.age = age;
    this.grades = grades;
  }

  averageGrade() {
    const sum = this.grades.reduce((total, grade) => total + grade, 0);
    return sum / this.grades.length;
  }

  details() {
    return `The student is called ${this.name} and is ${this.age} years old.`;
  }

  hasPassed() {
    const average = this.averageGrade();
    return average >= 60;
  }

  hasFailed() {
    const average = this.averageGrade();
    return average < 60;
  }
}

const student = new Student("Diana", 24, [25, 56, 78, 80]);
const student2 = new Student("Diana", 24, [25, 96, 78, 90]);
const student3 = new Student("Diana", 24, [25, 12, 8, 10]);

console.log(student.averageGrade());
console.log(student2.averageGrade());
console.log(student3.averageGrade());
console.log(student.details());
console.log(student2.hasFailed());
console.log(student3.hasPassed());
console.log(student.hasPassed());
console.log(student.hasFailed());



















