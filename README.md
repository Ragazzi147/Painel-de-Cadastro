<h1>💻 Guia do Componente: Gerenciamento de Produtos </h1>
Este componente (Componente11) é uma demonstração completa de como construir uma interface de gerenciamento de dados em Angular, combinando a lógica de um componente TypeScript com sua respectiva interface HTML.

Estrutura do HTML (componente11.component.html)
O template HTML é dividido em duas seções principais:

Formulário: Na parte superior, há um formulário reativo (<form [formGroup]="formulario">) com campos para ID, nome e valor do produto. Os botões de ação ("Cadastrar", "Alterar", "Remover") têm sua visibilidade controlada dinamicamente pelo Angular (*ngIf), dependendo se um produto foi selecionado na tabela.

Tabela: Abaixo, uma tabela exibe a lista de produtos. Ela usa a diretiva *ngFor para iterar sobre o array vetor e renderizar uma linha para cada produto. O botão "Selecionar" em cada linha ativa o método selecionarProduto(indice), preenchendo o formulário com os dados daquele item.

Lógica do Componente (componente11.component.ts)
O código TypeScript gerencia o estado da aplicação e a interação com o serviço de produtos:

formulario: FormGroup: Conecta os campos da interface com os dados no código.

vetor: Produto[]: O array que atua como a fonte de dados para a tabela.

Métodos de CRUD (Create, Read, Update, Delete):

selecionar(): Lê os dados da API.

cadastrar(): Adiciona um novo produto.

alterar(): Modifica um produto existente.

remover(): Deleta um produto.

selecionarProduto(indice: number): Preenche o formulário com os dados do item selecionado na tabela e altera o estado do botão para !btnCadastrar, mostrando as opções de alteração e remoção.

Testes (componente13.component.spec.ts)
O arquivo de teste garante que o componente está sendo criado corretamente, com uma simples verificação:

it('should create', () => { ... }): Este teste verifica se a instância do Componente13Component é criada com sucesso, garantindo que o componente pode ser renderizado e utilizado na aplicação.

<h1>🚀 Fluxo de Uso do Componente</h1>
Este componente demonstra um fluxo completo de CRUD (Criar, Ler, Atualizar, Deletar). Siga os passos abaixo para entender como ele funciona:

Cadastro de um Novo Produto
Quando o formulário está vazio, o botão "Cadastrar" é exibido. Para adicionar um novo item:

Preencha os campos Nome e Valor.

Clique em "Cadastrar".

O novo produto será adicionado à tabela, e o formulário será limpo.

Visualização dos Produtos
Todos os produtos cadastrados são exibidos na tabela, com colunas para Nome e Valor.

Seleção e Edição de um Produto
Para alterar um produto existente:

Clique no botão "Selecionar" ao lado do produto desejado na tabela.

Os dados do produto serão preenchidos automaticamente no formulário. Os botões "Alterar" e "Remover" aparecerão.

Altere o Nome ou Valor no formulário.

Clique em "Alterar" para salvar as mudanças.

Remoção de um Produto
Para remover um produto:

Clique no botão "Selecionar" ao lado do produto desejado na tabela.

Clique em "Remover" para excluí-lo. O item desaparecerá da tabela, e o formulário voltará ao estado inicial, pronto para um novo cadastro.


1.<img width="1920" height="885" alt="image" src="https://github.com/user-attachments/assets/717d0d7f-bcc0-4c2d-9543-1c0437972902" />


2.<img width="1918" height="795" alt="image" src="https://github.com/user-attachments/assets/76c44927-fcd2-4366-b10f-f5875cdb74ac" />


3.<img width="1920" height="785" alt="image" src="https://github.com/user-attachments/assets/d37f5401-cdbe-4b81-88eb-dde41aa4f1db" />


4.<img width="1920" height="767" alt="image" src="https://github.com/user-attachments/assets/07c52a85-3ba8-45be-b9a4-faeeae34df5c" />


https://painel-de-cadastro.netlify.app/pagina1
