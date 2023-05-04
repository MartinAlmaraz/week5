// •	Create a menu app as seen in this week’s video. What you create is up to you as long as it 
//      meets the following requirements:
// •	Use at least one array.
// •	Use at least two classes.
// •	Your menu should have the options to create, view, and delete elements.

class Takeout {
    constructor(food, country) {
        this.food = food;
        this.country = country;
    } 

    describe(){
        return `${this.food} is from this ${this.country}`
    }
}

class Menu {
    constructor() {
        this.foods = []
        this.selectedFood = null;
    }

    start() {
        let selection = this.showMenuForFood();
        while (selection != 0) {
            switch(selection) {
            case '1':
                this.createFoodChoice();
                break;
            case '2':
                this.viewFoodChoice();
                break;
            case '3':
                this.deleteFoodChoice();
                break;
            case '4':
                this.displayFoodChoice();
            default: 
               selection = 0;
            } 

            selection = this.showMenuForFood();
        }

        alert('Goodbye!')
    }
    
    showMenuForFood(){
        return prompt(`
        0) exit
        1) choose food
        2) view food
        3) delete food
        4) display all food
        `);
    }

    displayFoodChoice() {
      let foodString = '';
      for (let i = 0; i < this.foods.length; i++) {
        foodString += i + ') ' + this.foods[i].food +'\n';
      }
      alert(foodString);
    }

    createFoodChoice() {
        let food = prompt('Enter the name of the food')
        this.foods.push(new Takeout(food));
    }

    viewFoodChoice() {
        let index = prompt('Enter the index of the food you wish to view:');
        if (index > -1 && index < this.foods.length) {
            this.selectedFood = this.foods[index];
            let description = 'Food name: ' + this.selectedFood.food + '\n';

            for (let i = 0; i < this.selectedFood.foods.length; i++){
                description += i +') ' +this.selectedFood.foods[i].food + ' - ' + this.selectedFood.foods[i].country +'\n';
            }

            
        }

    }

}