import { Component, OnInit } from '@angular/core';
import { Enum } from '../enums/enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  enum = Enum.Foo;


  public ngOnInit(): void {
    this.enum = Enum.Bar;
    console.log(this.enum);
  }
}
