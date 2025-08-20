import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  //Variavel pra armazernar o nome informadao
  nome: string = '';

  //output
  @Output() funcao = new EventEmitter<string>();

  //funcao de cadastro do componente de formulario
  cadastrarNome() {
    this.funcao.emit(this.nome);
  }
}
