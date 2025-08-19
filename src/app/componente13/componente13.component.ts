import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Produto } from '../modelo/Produto';
import { ProdutoService } from '../servico/produto.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente13',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './componente13.component.html',
  styleUrl: './componente13.component.css'
})
export class Componente13Component {

  // Vetor
  vetor: Produto[] = [];

  //visibilidade dos botoes

  btnCadastrar: boolean = true;

  //Objeto de formulario
  formulario = new FormGroup({
    id: new FormControl(null),
    nome: new FormControl(''),
    valor: new FormControl(null)
  })

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

  // metodo para cadastrar produtos
  cadastrar() {
    this.servico.cadastrar(this.formulario.value as Produto).subscribe(retorno => {
      this.vetor.push(retorno)
      this.formulario.reset();
    })

  }

  //metodo para selecionar um produto especifico
  selecionarProduto(indice: number) {
    this.formulario.setValue({
      id: this.vetor[indice].id,
      nome: this.vetor[indice].nome,
      valor: this.vetor[indice].valor
    });

    this.btnCadastrar = false;
  }

  //metodo para alterar produtos

  alterar() {
    this.servico.alterar(this.formulario.value as Produto)
      .subscribe(retorno => {

        //obter o indice do obj alterado
        let indiceAlterado = this.vetor.findIndex(obj => {
          return this.formulario.value.id === obj.id
        });
        //Alterar o vetor
        this.vetor[indiceAlterado] = retorno;

        //Limpar o formulario
        this.formulario.reset();

        //Visibilidade dos botoes
        this.btnCadastrar = true;

      })
  }
}
