import { Routes, RouterModule } from '@angular/router';
import { dogComponent } from './dogComponent';
import { catComponent } from './catComponent';
//import { AppComponent } from './app.component';


const routes: Routes = [
    {
        path: 'dogs',
        component: dogComponent,
    },
    {
        path: 'cats',
        component: catComponent,
    }
];
export const appRouterModule = RouterModule.forRoot(routes);

