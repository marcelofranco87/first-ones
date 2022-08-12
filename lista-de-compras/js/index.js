//INÍCIO DO CÓDIGO PRINCIPAL

//Matriz de listas com categorias pré-definidas
let listaCompras = [['Frutas'],['Laticínios'],['Congelados'],['Doces']]

//Criação do menu de categorias
let menu = categorizaLista(listaCompras)

//Mensagem de boas-vindas e início da inclusão de produtos
let adicionar = prompt('Bem-vindo à lista de compras!\n\nGostaria de adicionar um produto? (S/N)')

//Loop de mensagem de erro caso o usuário escolha uma opção inválida
while (adicionar != 'S' && adicionar != 'N' && adicionar != 's' && adicionar != 'n') {

  adicionar = prompt('Opção inválida!\n\nGostaria de adicionar um produto? (S/N)')
  
}

//Caso o usuário escolha adicionar um produto
while (adicionar == 'S' || adicionar == 's') {

	//Atualização do menu de categorias
	menu = categorizaLista(listaCompras)
	
  //Chamada da função de adição
	adicionaProduto(listaCompras, menu)
  
  //Pergunta se o usuário deseja adicionar mais produtos
  adicionar = prompt('Deseja adicionar mais um produto? (S/N)')
  
  //Loop de mensagem de erro caso o usuário escolha uma opção inválida
  while (adicionar != 'S' && adicionar != 'N' && adicionar != 's' && adicionar != 'n') {
  
  	adicionar = prompt('Opção inválida!\n\nGostaria de adicionar mais um produto? (S/N)')
    
	}
  
}

//Após adicionar quantos itens ele desejar, pergunta se ele deseja exibir a lista
let imprimir = prompt('Deseja exibir a lista de compras? (S/N)')

//Loop de mensagem de erro caso o usuário escolha uma opção inválida
while (imprimir != 'S' && imprimir != 'N' && imprimir != 's' && imprimir != 'n') {

	imprimir = prompt('Opção inválida!\n\nDeseja exibir a lista de compras? (S/N)')
    
}

//Caso ele deseje exibir
if (imprimir == 'S' || imprimir == 's') {
	
  //Loop que chama a função de impressão da lista inteira, uma categoria por vez
	for(let indice = 0; indice < listaCompras.length; indice++) {
  
  	imprimeLista(listaCompras[indice])
    
  }
  
}

//FIM DO CÓDIGO PRINCIPAL


//Função que imprime a lista na tela
function imprimeLista(lista) {
  
  //Cria uma variável para o título da categoria, que é o primeiro item do array
	let titulo = lista[0]
  
  //Cria uma variável para o conteúdo da categoria, iniciando-se por seu título
	let conteudo = titulo + ': '

	/*Loop que concatena item por item da categoria à variável conteudo, separando os itens com vírgula.
  OBS: O loop é quebrado após a impressão do penúltimo item. O último item só será impresso após o loop, para evitar que a string do conteúdo termine com uma vírgula sobrando.*/
	for (let indice = 1; indice < (lista.length - 1); indice++) {
  
		conteudo += lista[indice] + ', '
    
	}
  
  //Inclusão do último item da categoria, sem a vírgula no fim
	conteudo += lista[lista.length - 1]

	//Condicional que verifica se a categoria contém apenas o título, ou seja, se está sem itens
	if (lista.length == 1) {
  
		conteudo = titulo + ': nenhum'
    
	}    
	
  //Impressão da categoria
	console.log(conteudo)

}

//Função de inclusão de produtos na lista
function adicionaProduto(lista, menu) {

	//Função que recebe a categoria onde o produto será incluído
  let categoria = prompt(`Selecione a categoria do produto:\n\n${menu}`)
  
  //Caso o usuário digite uma categoria inválida
  while (categoria < 0 || categoria > lista.length) {
  
  	categoria = prompt(`Opção inválida!\n\nSelecione a categoria do produto:\n\n${menu}`)
    
  }
  
  //Caso o usuário digite 0, ou seja, caso ele deseje criar uma nova categoria
  while (categoria == 0) {
  
  	//Variável que recebe o nome da nova categoria
  	let novaCat = prompt('Digite o nome da nova categoria:')
    
    //Adiciona-se um novo array na matriz, contendo o título da nova categoria
    lista.push([novaCat])
    
    //Nova chamada da função que cria o menu, para atualizar com a categoria adicionada
    menu = categorizaLista(lista)
    
    //Retorno ao menu principal
    categoria = prompt(`Selecione a categoria do produto:\n\n${menu}`)
  }
  
  //Usuário entra na categoria escolhida e digita o produto
	let produto = prompt(`Você está na categoria ${lista[categoria - 1][0]}.\n\nQue produto deseja adicionar a essa categoria?`)
  
  //Inclusão do produto na lista
	lista[categoria - 1].push(produto)
  
}

function categorizaLista(lista) {

	let resultado = ''

	for (let indice = 0; indice < lista.length; indice++) {

		resultado += parseFloat(indice + 1) + '. ' + lista[indice][0] + '\n'

	}
  
  resultado += '\n0. Adicionar categoria\n'

	return resultado

}