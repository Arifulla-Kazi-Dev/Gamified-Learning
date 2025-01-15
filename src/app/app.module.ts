import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes'; // Adjust this import according to your structure
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common'; // Import CommonModule
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
// Import other components...

@NgModule({
  declarations: [
    
  
    
    // Other components...
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, // Add FormsModule here
    CommonModule // Add CommonModule here
  ],
  providers: [],
})
export class AppModule { }

// Bootstrap the AppComponent directly
import { bootstrapApplication } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { CoursesComponent } from './courses/courses.component';
import { DashboardComponent } from './dashboard/dashboard.component';

bootstrapApplication(AppComponent);