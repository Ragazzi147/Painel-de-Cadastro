import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Produto } from '../modelo/Produto';
import { ProdutoService } from '../servico/produto.service';

@Component({
  selector: 'app-componente13',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente13.component.html',
  styleUrl: './componente13.component.css'
})
export class Componente13Component {

  // Vetor
  vetor: Produto[] = [];

  //visibilidade dos botoes

  btnCadastrar: boolean = true

  //Construtor

  constructor(private servico: ProdutoService) { }

  // Inicialização do componente

  ngOnInit() {
    this.selecionar();
  }

  //Metodo para selecionar todos os produtos
  selecionar() {
    this.servico.selecionar().subscribe(retorno => { this.vetor = retorno });
  }
}
