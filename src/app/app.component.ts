import { Component } from "@angular/core";

@Component({
    template: '<h1 style="font-size: 2.5em; color: #4A90E2; text-align: center; margin: 20px 0; font-family: \'Arial\', sans-serif; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);">{{title}}</h1> <app-student></app-student>',
    selector: "my-app-root"
})
export class AppComponent {
    x: number = 5;

    title: string = "Our Class";

    calc() {
        return 0;
    }

    constructor() {
        //this.x = "sdfs";
    }

}
