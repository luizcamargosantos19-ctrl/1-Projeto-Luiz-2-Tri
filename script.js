const dados=[
["O racismo é uma forma de:",["Respeito","Discriminação","Amizade"],1],
["Como combater o racismo?",["Respeitando diferenças","Fazendo piadas","Excluindo pessoas"],0],
["Ao presenciar racismo devemos:",["Ignorar","Incentivar","Procurar ajuda"],2],
["A diversidade deve ser:",["Escondida","Valorizada","Evitada"],1],
["Qual atitude demonstra empatia?",["Humilhar","Apoiar","Ofender"],1]
];

let perguntas=document.getElementById("perguntas");

dados.forEach((d,i)=>{
 let div=document.createElement("div");
 div.className="pergunta";
 div.innerHTML=`<b>${i+1}. ${d[0]}</b>`;
 d[1].forEach((r,j)=>{
  div.innerHTML+=`<label><input type="radio" name="q${i}" value="${j}"> ${r}</label>`;
 });
 perguntas.appendChild(div);
});

function corrigir(){
 let pontos=0;
 dados.forEach((d,i)=>{
  let r=document.querySelector(`input[name="q${i}"]:checked`);
  if(r&&Number(r.value)==d[2])pontos++;
 });
 let msg=pontos==5?"🏆 Excelente!":pontos>=3?"👏 Muito bem!":"📚 Continue estudando!";
 document.getElementById("resultado").innerHTML=`Você acertou <b>${pontos}/5</b>. ${msg}`;
}

function enviar(){
 let campo=document.getElementById("desabafo");
 let msg=document.getElementById("mensagem");
 if(!campo.value.trim())msg.innerText="Digite seu desabafo primeiro.";
 else{
  msg.innerText="💜 Obrigado por compartilhar. Procure um adulto de confiança se precisar.";
  campo.value="";
 }
}

function tema(){
 document.body.classList.toggle("escuro");
}
