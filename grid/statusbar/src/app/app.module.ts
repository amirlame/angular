import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxButtonComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxbuttons.ts';
import { jqxDropDownListComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdropdownlist.ts';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts';
import { jqxInputComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxinput.ts';
import { jqxWindowComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxwindow.ts';

@NgModule({
    declarations: [AppComponent, jqxButtonComponent, jqxDropDownListComponent, jqxGridComponent, jqxInputComponent, jqxWindowComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        