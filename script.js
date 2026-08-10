let pontos=0;
let respondidas=[];

function tema(){
 document.body.classList.toggle("escuro");
}

function enviar(){
 let texto=document.getElementById("desabafo").value;
 let msg=document.getElementById("mensagem");

 if(texto.trim()==""){
  msg.innerHTML="Escreva algo antes de enviar.";
 }else{
  msg.innerHTML="💜 Obrigado por compartilhar. Procure um adulto de confiança se precisar de ajuda.";
  document.getElementById("desabafo").value="";
 }
}

function responder(pergunta,resposta){

 if(respondidas.includes(pergunta)) return;

 respondidas.push(pergunta);

 if(pergunta==1 && resposta=="b") pontos++;
 if(pergunta==2 && resposta=="b") pontos++;
 if(pergunta==3 && resposta=="a") pontos++;

 document.getElementById("resultado").innerHTML=
 "Você acertou "+pontos+" de 3 perguntas.";

 if(respondidas.length==3){
  document.getElementById("resultado").innerHTML+=
  "<br>🎉 Quiz concluído!";
 }
}
    }
}
