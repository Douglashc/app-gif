import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'

import { SharedModule } from '../shared/shared.module';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchComponent } from './components/search-box/search-box.component';
import { CardList } from './components/card-list/card-list.component';
import { CardGif } from './components/card/card-gif.component';

@NgModule({
  declarations: [
    HomePageComponent,
    SearchComponent,
    CardList,
    CardGif
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class GifsModule { }
