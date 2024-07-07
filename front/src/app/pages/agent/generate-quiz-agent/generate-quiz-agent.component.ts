import { Component } from '@angular/core';
import { SidebarComponent } from '../../../components/sidebar/sidebar';

@Component({
  selector: 'app-generate-quiz-agent',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './generate-quiz-agent.component.html',
  styleUrl: './generate-quiz-agent.component.css'
})
export class GenerateQuizAgentComponent {
  links = [
    { label: "Accueil", path: "/" },
    { label: "Générer un nouveau quiz", path: "/generate-quiz-agent" },
    { label: "Lister les quiz", path: "/list-quiz" },
    { label: "Résultats", path: "/results" }
  ];

}
