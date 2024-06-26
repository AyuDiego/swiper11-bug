 
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

import { importProvidersFrom } from '@angular/core'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http'; 
import { BrowserModule} from '@angular/platform-browser';
import { LocationStrategy, PathLocationStrategy } from '@angular/common'; 
import { AppComponent } from './app/app.component'; 


bootstrapApplication(AppComponent,  {
    providers: [
        importProvidersFrom(BrowserModule,  NgbModule),
         { provide: LocationStrategy, useClass: PathLocationStrategy },
        provideHttpClient(withInterceptorsFromDi()),
    ]
})
  .catch(err => console.error(err));
  