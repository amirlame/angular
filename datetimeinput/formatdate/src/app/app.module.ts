import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxDateTimeInputComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdatetimeinput.ts';
import { jqxDropDownListComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdropdownlist.ts';
import { jqxInputComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxinput.ts';

@NgModule({
    declarations: [AppComponent, jqxDateTimeInputComponent, jqxDropDownListComponent, jqxInputComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        