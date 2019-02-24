## DESCRIPTION
Angular 6+ **Image browser** used to upload image files. It's very simple to use this in your app.
So, lets get started...

![Angular Image Browser Preview](https://srkkrish22.files.wordpress.com/2018/11/ng-image-browser.gif)

## INSTALLATION
```sh
npm install ng-image-browser
```

## How to use angular image browser in your angular app

## Sample Code for Angular Image Browser

### app.module.ts - Import the NgImageBrowserModule in your app module

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgImageBrowserModule } from 'ng-image-browser'; // import NgImageBrowserModule module


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgImageBrowserModule // declare the NgImageBrowserModule in imports
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

## NOTE: 
You should also refer font-awesome icons in this image browser

### Inputs for Angular Image Browser

=> **imagesrc**  - Used to set the source of image (url, base64) to bind the image to the image browser.

For example: 

### app.component.html

```html
<ng-image-browser [imagesrc]="src"></ng-image-browser>

```
Pass the image url as input to the image browser as shown above

### app.component.ts

```typescript
src = "https://www.vectorlogo.zone/logos/angular/angular-card.png";  // Url to bind the image

```

### Selected value of the image

=> **modelvalue** -  To get the selected value(base64) of the image in your component.

Example:

### app.component.html

```html
<ng-image-browser [imagesrc]="src" (modelvalue)="modelchange($event)"></ng-image-browser>

```

### app.component.ts

```typescript
  modelchange(event){    // Write your code here to save the base64 value
    console.log(event);
    // event => base64 value of the image
  }

```


## VERSION

1.0.4 - Angular 6 image browser