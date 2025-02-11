import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  fullName = 'Rohit Kumar';
  designation = 'Frontend Developer | Angular  Enthusiast';
  tagline = 'Passionate about building high-performance web applications!';
  
  aboutDescription = 'I have over 2.9 years of experience in Angular, developing scalable web applications. I love exploring the latest web technologies and improving my problem-solving skills.';
  
  experiences = [
    'Frontend Developer at Infosys - Optimized legacy applications reducing load time by 30%',
    'Worked at Northwestern Mutual - Led an Agile team, increasing project delivery speed by 20%',
    'Developed OAuth authentication, REST API integration, and data migration tools'
  ];
  
  skills = ['Angular', 'TypeScript', 'JavaScript', 'OAuth', 'REST APIs', 'State Management', 'MySQL'];
  
  goals = 'Currently expanding my full-stack skills, learning backend technologies, and mastering Angular development.';

  email = 'rohit.krui@example.com';
  linkedIn = 'https://www.linkedin.com/in/rohitkumarinfy';
}
