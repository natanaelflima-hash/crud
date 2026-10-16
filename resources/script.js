// Laço de reptição

// let nomes =["Ana clara","Denise Martins","Rayssa giovanelly","Roger Alcantara"];

// nomes.forEach(nome => (
//     console.log(nome)
// ));

// Enquanto
// Enquanto a condição for verdadeira, o laço continuaráse repetindo
// let nome = prompt("Digite o nome do usuário")
// while(nome !== "Thiago"){
//     console.log("Insira o nome correto:");
//     nome = prompt("Digite o nome do usuário novamente")
// }
let tarefas = ["Estudar","Lavar a louça","ir pra aula"]
let opcao = Number(prompt("Escolha uma opção a seguir"));

 "===== MINHA TODO LIST ====="

"1-Cadastrar tarefa"
"2-Listar tarefas"
"3-Buscar tarefa" 
"4-Atualizar tarefa"
"5-Excluir tarefa"
"6-filtrar tarefa" 
"7-Adicionar tarefa no inicio"
"8-Remover primeira tarefa"
"9-Remover última tarefa"

while(opcao !== 0){

    switch(opcao){

        case "1": 
       let createtask = prompt("Crie uma tarefa");
       if(createtask === "") {
        alert("Comando inválido");
       }
       else{
        let resultCreate = tarefas.find(tarefa => tarefa.toLowerCase().includes(createtask.toLowerCase().trim))
       }

        case "2":
      
        case "3":
      
        case "4":
       
        case "5":
         
        case "6":
        
        case "7":

        case "8":

        case "9":

        case "0":
    } 

        
    
}