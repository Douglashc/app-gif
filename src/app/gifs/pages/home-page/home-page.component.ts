import { Component, OnInit } from '@angular/core';
import { GifsServise } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private gifsService: GifsServise) { }

  ngOnInit(): void {
  }

  get gifs() : Gif[]
  {
    return this.gifsService.gifList;
  }

}
