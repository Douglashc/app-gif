import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html'
})
export class LazyImageComponent implements OnInit {

  @Input()
  public url!: string;

  @Input()
  public alt: string = '';

  public loader: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if(!this.url) throw new Error('URL property is required');
  }

  onLoad() : void {
    this.loader = true;
  }

}
