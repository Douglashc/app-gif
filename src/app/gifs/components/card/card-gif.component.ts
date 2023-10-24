import { Component, Input, OnInit } from "@angular/core";
import { Gif } from "../../interfaces/gifs.interfaces";

@Component({
    selector: 'gifs-card',
    templateUrl: './card-gif.component.html'
})
export class CardGif implements OnInit{

    @Input()
    public gif!: Gif; 

    constructor() {
        console.log(this.gif);
    }

    ngOnInit(): void {
        if(!this.gif) throw new Error('Gif property is required');
    }
}