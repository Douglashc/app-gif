import { Component, OnInit } from '@angular/core';
import { GifsServise } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private gifsService: GifsServise) { }

  ngOnInit(): void {
  }

  get listTags() 
  { 
    return this.gifsService.tagsHistory;
  }

  tagReoad(tag: string) {
    console.log(tag);
    this.gifsService.searchTag(tag);
  }

}
