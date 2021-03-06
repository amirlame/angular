import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxToggleButtonComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtogglebutton.ts';

@NgModule({
    declarations: [AppComponent, jqxToggleButtonComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        