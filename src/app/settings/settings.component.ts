import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  dailyGoal = 45;
  reminderTime = '18:30';
  challengeMode = 'balanced';
  emailSummary = true;
  soundEffects = false;
}
