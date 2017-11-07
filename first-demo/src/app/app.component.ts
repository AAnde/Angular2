import { Component } from '@angular/core';
import { appService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [appService]
})
export class AppComponent {
  title: String;
  constructor(private _appService: appService){

  }
 ngOnInit() {
        this.title = this._appService.getName();
    }
    
}

