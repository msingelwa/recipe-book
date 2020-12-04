import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  constructor(private shoppingListService: ShoppingListService) {}

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Tasty Mash',
      'This is simply tasty mash',
      'https://th.bing.com/th/id/OIP.xG9zi9b5ALd1ZLLf01GmvgHaFj?pid=Api&rs=1',
      [new Ingredient('Sweet Potatoes', 14), new Ingredient('Potatoes', 14)]
    ),
    new Recipe(
      'King Burger',
      'Your king burger is all you need',
      'https://greeleytogo.com/wp-content/uploads/2020/04/Burger-King.jpg',
      [new Ingredient('Buns', 15), new Ingredient('Meat', 12)]
    ),
  ];

  getRecipe(index: number) {
    return this.recipes[index];
  }

  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
