import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Taste Recipe', 'This is simply a test', 'http://www.seriouseats.com/recipes/assets_c/2017/06/20170523-ladyfingers-vicky-wasik-19-thumb-1500xauto-437954.jpg'),
    new Recipe('A Taste Recipe', 'This is simply a test', 'http://www.seriouseats.com/recipes/assets_c/2017/06/20170523-ladyfingers-vicky-wasik-19-thumb-1500xauto-437954.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
