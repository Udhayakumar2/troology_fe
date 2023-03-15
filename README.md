# Troopology

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

In this We have mainly 4 screens 
Login Screen:
-	In login Screen we have mainly two values Email and Password
-	Email is a mandatory field and required some format for Email
-	Password can be of anything with minimum 2 chars
State Screen :
-	By default we will show all the available states in the Table.
-	We have a create Button to add the state screen.
-	state_code and state_name are mandatory.
-	Edit Screen uses to update the state.
-	State_code and state name are the unique values.
-	Delete removes the data of the state where as the state should not present in the District.
District Screen:
-	By default we will show all the available Districts in the Table.
-	We have a create Button to add the Districts screen.
-	district_code ,district_name, state_name will be in the dropdown.
-	district_code is unique and district name can be same
-	Edit Screen uses to update the district.
-	Delete removes the data of the districts where as the district should not present in the block.

Block Screen:
-	By default we will show all the available blocks in the Table.
-	We have a create Button to add the Block in block screen.
-	block_code,block_name ,district_name, state_name will be in the dropdown
-	block_code is unique and block name can be same
-	Edit Screen uses to update the block.
-	Delete removes the data of the block where as the block should not present in the village.
Village Screen:
-	By default we will show all the available villages in the Table.
-	We have a create Button to add the Block in village screen.
-	village_code,village_name,block_name ,district_name, state_name will be in the dropdown
-	village_code is unique and village name can be same
-	Edit Screen uses to update the village.
-	Delete removes the data of village.
