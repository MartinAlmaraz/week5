// •	Create a menu app as seen in this week’s video. What you create is up to you as long as it 
//      meets the following requirements:
// •	Use at least one array.
// •	Use at least two classes.
// •	Your menu should have the options to create, view, and delete elements.

class Takeout { /// class Takeout 

    constructor(food) {
        this.food = food;
        
    } 

  
}

class Menu {
    constructor() {
        this.foods = []
        this.selectedFood = null;
    }

    start() {
        let selection = this.showMenuForFood(); //// Shows the menu to choose your food
        while (selection != 0) {
            switch(selection) { // switch to switch between what you are trying to do with the food
            case '1':
                this.createFoodChoice();//lets user  create food choice by selecting 1
                break;
            case '2':
                this.viewFoodChoice(); // lets user view food choice by selecting 2
                break;
            case '3':
                this.deleteFoodChoice(); /// lets user delete food choice by selecting 3
                break;
            case '4':
                this.displayFoodChoice(); /// displays all food with 4
            default: 
               selection = 0; /// when nothing is chosen it defaults to 0
            } 

            selection = this.showMenuForFood();
        }

        alert('Goodbye!') /// Alerts the user Goodbye
    }
    
    showMenuForFood(){ /// prompt that has all the choices for the user in a text box 
        return prompt(`
        0) exit
        1) choose food
        2) view food
        3) delete food
        4) display all food
        `);
    }

    displayFoodChoice() { // method to display food
      let foodString = '';
      for (let i = 0; i < this.foods.length; i++) {
        foodString += i + ') ' + this.foods[i].food +'\n';
      }
      alert(foodString);
    }

    createFoodChoice() { // method to create food
        let food = prompt('Enter the name of the food') /// text box where user enters the food
        this.foods.push(new Takeout(food)); // Pushes new food to the foods array new instance of Takeout class
    }

    viewFoodChoice() { /// method that views food choice
        let index = prompt('Enter the index of the food you wish to view:');  
        /// this works as a text box for the user to select the index of the food
        this.selectedFood = this.foods[index]; 
        /// selected food was originally null but on this line it is assigned to the foods array with the variable index sitting inside of it
        if (index > -1 && index < this.foods.length) { 
            /// if statement to display anything written in the array foods as long as it is more than -1
            let description = 'Food name: ' + this.selectedFood.food + '\n'; // variable description is a string with the contents of the array 
         alert(description) /// alerts the variable 
       
        }
    }
    
    deleteFoodChoice() { /// method to delete food
        let index = prompt('Enter the index of the food you wish to delete:'); /// tells the user to put in the index of the food
        if (index > -1 && index < this.foods.length) { 
            /// looking for anything in the array that is greater than -1 which has to be anything in the array since they are 0 based
            this.foods.splice(index, 1); /// splices the food out of the foods array
        }
    }


}

let menu = new Menu(); /// starts from the beginning new instace of Menu class
menu.start(); /// calls back menu