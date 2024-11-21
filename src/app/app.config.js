"use strict";
// src/app/app.config.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.appConfig = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var http_1 = require("@angular/common/http");
var dish_list_component_1 = require("./components/dish-list/dish-list.component");
var dish_form_component_1 = require("./components/dish-form/dish-form.component");

var routes = [
    { path: '', component: dish_list_component_1.DishListComponent },
    { path: 'add-dish', component: dish_form_component_1.DishFormComponent },
    { path: 'edit-dish/:id', component: dish_form_component_1.DishFormComponent },
];
exports.appConfig = {
    providers: [
        (0, router_1.provideRouter)(routes),
        (0, core_1.importProvidersFrom)(http_1.HttpClientModule)
    ]
};

// app.config.ts
import { provideRouter, Router } from '@angular/router';
import { AppComponent } from './app.component';

export const appConfig = {
  providers: [
    provideRouter([]) // Adicione suas rotas aqui se necessário
  ],
  bootstrap: [AppComponent]
};