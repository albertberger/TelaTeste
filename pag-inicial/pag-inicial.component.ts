import { Component } from '@angular/core';

  
interface QuestionOption {
  letter: string;
  value: string;
  text: string;
}

@Component({
  selector: 'app-pag-inicial',
  templateUrl: './pag-inicial.component.html',
  styleUrls: ['./pag-inicial.component.css']
})
export class PagInicialComponent {

  testeConcluido: boolean = false;

  currentQuestionIndex = 0;

  questions = [
    {
      id: 1,
      text: "Qual é a maneira correta de declarar uma variável em JavaScript?",
      options: [
        { letter: 'A', value: '1', text: 'variable x;' },
        { letter: 'B', value: '1', text: 'var x;' },
        { letter: 'C', value: '1', text: 'v x;' },
        { letter: 'D', value: '1', text: 'new variable x;' }
      ]
    },
    {
      id: 2,
      text: "Como você escreve um comentário de uma linha em JavaScript?",
      options: [
        { letter: 'A', value: '1', text: '/* Comentário */' },
        { letter: 'B', value: '1', text: '// Comentário' },
        { letter: 'C', value: '1', text: '-- Comentário' },
        { letter: 'D', value: '1', text: '# Comentário' }
      ]
    },
    {
      id: 3,
      text: "Qual é a função correta para arredondar para o número inteiro mais próximo em JavaScript?",
      options: [
        { letter: 'A', value: '1', text: 'round()' },
        { letter: 'B', value: '1', text: 'ceil()' },
        { letter: 'C', value: '1', text: 'floor()' },
        { letter: 'D', value: '1', text: 'int()' }
      ]
    },
    {
      id: 4,
      text: "Como você verifica se uma variável tem um valor nulo em JavaScript?",
      options: [
        { letter: 'A', value: '1', text: 'if (x === null)' },
        { letter: 'B', value: '1', text: 'if (x == undefined)' },
        { letter: 'C', value: '1', text: 'if (x = null)' },
        { letter: 'D', value: '1', text: 'if (x.isNull())' }
      ]
    },
    {
      id: 5,
      text: "O que o método `map()` faz em um array em JavaScript?",
      options: [
        { letter: 'A', value: '1', text: 'Filtra os elementos do array.' },
        { letter: 'B', value: '1', text: 'Modifica os elementos do array original.' },
        { letter: 'C', value: '1', text: 'Cria um novo array com os resultados de uma função aplicada a cada elemento.' },
        { letter: 'D', value: '1', text: 'Ordena os elementos do array em ordem alfabética.' }
      ]
    },
    {
      id: 6,
      text: "Como se declara uma função em JavaScript?",
      options: [
        { letter: 'A', value: '1', text: 'function myFunction() {}' },
        { letter: 'B', value: '1', text: 'var myFunction = function() {}' },
        { letter: 'C', value: '1', text: 'myFunction => {}' },
        { letter: 'D', value: '1', text: 'def myFunction(): {}' }
      ]
    },
    {
      id: 7,
      text: "O que é o DOM (Document Object Model) em JavaScript?",
      options: [
        { letter: 'A', value: '1', text: 'Uma biblioteca JavaScript popular.' },
        { letter: 'B', value: '1', text: 'Uma estrutura de dados hierárquica que representa a estrutura de um documento HTML.' },
        { letter: 'C', value: '1', text: 'Uma linguagem de programação.' },
        { letter: 'D', value: '1', text: 'Um método de manipulação de strings.' }
      ]
    },
    {
      id: 8,
      text: "Em JavaScript, o que é uma closure?",
      options: [
        { letter: 'A', value: '1', text: 'Uma função que não tem acesso a variáveis externas.' },
        { letter: 'B', value: '1', text: 'Um tipo especial de loop.' },
        { letter: 'C', value: '1', text: 'Um objeto JavaScript.' },
        { letter: 'D', value: '1', text: 'Uma função que tem acesso a variáveis externas mesmo após a execução da função.' }
      ]
    },
    {
      id: 9,
      text: "Como você converte uma string para um número em JavaScript?",
      options: [
        { letter: 'A', value: '1', text: 'parseInt()' },
        { letter: 'B', value: '1', text: 'toString()' },
        { letter: 'C', value: '1', text: 'toNumber()' },
        { letter: 'D', value: '1', text: 'numberify()' }
      ]
    },
    {
      id: 10,
      text: "O que é o conceito de 'hoisting' em JavaScript?",
      options: [
        { letter: 'A', value: '1', text: 'Uma técnica de otimização de código.' },
        { letter: 'B', value: '1', text: 'A elevação de declarações de variáveis e funções durante a fase de compilação.' },
        { letter: 'C', value: '1', text: 'Uma forma de animação em páginas web.' },
        { letter: 'D', value: '1', text: 'A criação dinâmica de elementos DOM.' }
      ]
    }
  ];

  valorAtual: number = 0; 

  selectOption(optionValue: string): void {
    console.log('Opção selecionada:', optionValue);

    
    const selectedNumber = parseFloat(optionValue);

    
    this.valorAtual += selectedNumber;

    this.nextQuestion();
}

nextQuestion(): void {
  if (this.currentQuestionIndex + 1 >= this.questions.length) {
    console.log('Teste concluído!');
    this.testeConcluido = true;
    return;
  }

  this.currentQuestionIndex++;
  console.log('Próxima pergunta...');
}
}