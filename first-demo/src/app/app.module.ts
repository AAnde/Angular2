import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { dogComponent} from './dogComponent';
import { catComponent} from './catComponent';
import { appRouterModule} from './routes';

@NgModule({
  declarations: [
    AppComponent, dogComponent,catComponent
  ],
  imports: [
    BrowserModule,appRouterModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, dogComponent, catComponent]
})
export class AppModule { }
