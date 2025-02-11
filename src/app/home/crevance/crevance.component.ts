import { Component } from '@angular/core';

@Component({
  selector: 'app-crevance',
  templateUrl: './crevance.component.html',
  styleUrls: ['./crevance.component.css']
})
export class CrevanceComponent {

  companyName: string = "Crevance"; 

  title: string = "Welcome to Our Website";
  description: string = "Explore amazing features and enjoy a seamless experience.";
  
  navigateToFeatures() {
    console.log("Navigating to Features Section...");
    // Logic to navigate to another section or page
  }

  mantra: string = "ॐ भूर्भुवः स्व: तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात् ॥";

}
