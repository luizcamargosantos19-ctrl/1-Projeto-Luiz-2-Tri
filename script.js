const dados=[
["O racismo é uma forma de:",["Respeito","Discriminação","Amizade"],1],
["Como combater o racismo?",["Respeitando","Fazendo piadas","Excluindo"],0],
["Ao presenciar racismo devemos:",["Ignorar","Incentivar","Procurar ajuda"],2],
["A diversidade deve ser:",["Escondida","Valorizada","Evitada"],1],
["Qual atitude demonstra empatia?",["Humilhar","Apoiar","Ofender"],1]
];

dados.forEach((d,i)=>{
let p=document.createElement("div");
p.className="pergunta";
p.innerHTML=`<b>${i+1}. ${d[0]}</b>`;
d[1].forEach((r,j)=>{
p.innerHTML+=`<label><input type="radio" name="q${i}" value="${j}"> ${r}</label>`;
});
document.getElementById("perguntas").appendChild(p);
});

function corrigir(){
let pontos=0;
dados.forEach((d,i)=>{
let r=document.querySelector(`input[name="q${i}"]:checked`);
if(r&&+r.value==d[2])pontos++;
});
document.getElementById("resultado").innerHTML=
`Você acertou <b>${pontos} de 5</b>! ${pontos==5?"🏆 Excelente!":"👏 Continue aprendendo!"}`;
}

function enviar(){
let d=document.getElementById("desabafo");
let m=document.getElementById("mensagem");
if(!d.value.trim())m.innerText="Digite seu desabafo.";
else{
m.innerText="💜 Obrigado por compartilhar! Procure um adulto de confiança.";
d.value="";
}
}

function tema(){
document.body.classList.toggle("escuro");
}
