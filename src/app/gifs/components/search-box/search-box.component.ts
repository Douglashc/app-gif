import { Component, ViewChild, ElementRef } from '@angular/core';
import { GifsServise } from '../../services/gifs.service';

@Component({
    selector: 'gifs-search-box',
    templateUrl: './search-box.component.html'
})

export class SearchComponent {
    
    @ViewChild('txtTagInput')
    public tagInput!: ElementRef<HTMLInputElement>;
    
    constructor(private gifsService: GifsServise) {}

    searchTag() : void {

        const newTag =  this.tagInput.nativeElement.value;
        
        this.gifsService.searchTag(newTag);

        this.tagInput.nativeElement.value = '';
    }
}