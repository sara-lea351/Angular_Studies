import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';


@NgModule({
    declarations: [AppComponent, StudentComponent, StudentDetailsComponent],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}