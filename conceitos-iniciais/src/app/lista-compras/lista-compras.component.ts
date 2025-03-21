import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa o FormsModule para o formulário
import { ItemLista } from './itemlista'; // Importa o modelo do item da lista
import { CommonModule } from '@angular/common'; // Importa CommonModule para funcionalidades básicas

@Component({
  selector: 'app-lista-compras', // Define o seletor do componente
  imports: [ FormsModule, CommonModule ], // Importa os módulos necessários
  templateUrl: './lista-compras.component.html', // Template HTML associado ao componente
  styleUrl: './lista-compras.component.scss' // Arquivo de estilo associado
})

export class ListaComprasComponent {
  // Variável que armazena o valor do item a ser adicionado
  item: string = '';

  // Array que armazena os itens da lista de compras
  lista: ItemLista[] = [];

  // Método para adicionar um novo item à lista
  addItem() {
    let itemLista = new ItemLista(); // Cria um novo objeto ItemLista

    itemLista.nome = this.item; // Define o nome do item com o valor do input
    itemLista.id = this.lista.length + 1; // Atribui um ID sequencial ao item

    this.lista.push(itemLista); // Adiciona o item à lista

    this.item = ''; // Limpa o input após adicionar o item

    console.table(this.lista); // Exibe a lista atual no console para verificação
  }

  // Método para riscar ou desfazer o risco de um item ao clicar na checkbox
  riscarItem(itemLista: ItemLista) {
    itemLista.comprado = !itemLista.comprado; // Alterna o estado de 'comprado' do item
  }

  // Método para limpar todos os itens da lista
  limpaLista() {
    this.lista = []; // Limpa a lista de compras
  }
}
