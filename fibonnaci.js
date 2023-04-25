//Script que retorna um dos números da sequência de fibonnaci com base na posição (do número) na sequência
//Data: 28/01/2023

function fibonnaci (position){
  
  if (position === 1 || position === 2){
    return 1;
  }
  
  return fibonnaci(position - 1) + fibonnaci(position - 2);
  
}


for (let i = 1; i <= 10; i++){
  console.log(`${i}º - ${fibonnaci(i)}\n`);
}
