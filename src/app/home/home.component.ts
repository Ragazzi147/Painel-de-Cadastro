import { Component } from '@angular/core';
import { TabelaComponent } from "../tabela/tabela.component";
import { FormularioComponent } from "../formulario/formulario.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TabelaComponent, FormularioComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  //Vetor 
  nomes: string[] = ['Ralf', 'Juliana', 'Maurício', 'Renata'];

  //Funcao para cadastrar nomes
  cadastrar(nome: string) {
    this.nomes.push(nome);
  }
}
