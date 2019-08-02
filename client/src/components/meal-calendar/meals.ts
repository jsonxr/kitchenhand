export class Meal {
  title: string;
  description: string;
  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
  }
}

export class MealPlan {
  date: Date;
  meals: Meal[];
  constructor(date: Date, meals?: Meal[]) {
    this.date = date;
    this.meals = meals ? meals : [];
  }
}

const meals: MealPlan[] = [
  new MealPlan(new Date('2019-06-10'), [
    new Meal('Breakfast', 'Pancakes, bacon, eggs.'),
    new Meal('Lunch', 'On your own'),
    new Meal('Dinner', 'On your own'),
  ]),
  new MealPlan(new Date('2019-06-11'), [
    new Meal('Breakfast', 'Pancakes, bacon, eggs.'),
    new Meal('Lunch', 'On your own'),
    new Meal('Dinner', 'On your own'),
  ]),
  new MealPlan(new Date('2019-06-12'), [
    new Meal('Breakfast', 'Pancakes, bacon, eggs.'),
    new Meal('Lunch', 'On your own'),
    new Meal('Dinner', 'On your own'),
  ]),
];

export default meals;
