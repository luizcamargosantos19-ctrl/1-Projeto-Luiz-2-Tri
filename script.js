const dados=[
["O racismo é uma forma de:",["Respeito","Discriminação","Amizade"],1],
["Como podemos combater o racismo?",["Respeitando","Ofendendo","Excluindo"],0],
["Ao presenciar racismo devemos:",["Ignorar","Incentivar","Procurar ajuda"],2],
["A diversidade deve ser:",["Escondida","Valorizada","Evitada"],1],
["Qual atitude demonstra empatia?",["Humilhar","Apoiar","Ofender"],1],
["Todas as pessoas merecem:",["Respeito","Preconceito","Exclusão"],0],
["Uma piada racista pode:",["Machucar","Ajudar","Educar"],0],
["Na escola devemos promover:",["Respeito","Discriminação","Intolerância"],0],
["O que fazer ao sofrer racismo?",["Buscar ajuda","Ficar sozinho","Aceitar"],0],
["O racismo pode causar:",["Sofrimento","Alegria","Igualdade"],0],
["A informação ajuda a:",["Combater preconceitos","Criar ódio","Excluir"],0],
["Devemos respeitar diferentes:",["Culturas","Apenas opiniões","Apenas amigos"],0],
["Empatia significa:",["Colocar-se no lugar do outro","Julgar","Ignorar"],0],
["O preconceito deve ser:",["Combatido","Incentivado","Espalhado"],0],
["Uma sociedade justa precisa de:",["Igualdade","Discriminação","Preconceito"],0]
];

dados.forEach((d,i)=>{let p=document.createElement("div");p.className="pergunta";
p.innerHTML=`<b>${i+1}. ${d[0]}</b>`;d[1].forEach((r,j)=>p.innerHTML+=`<label><input type="radio" name="q${i}" value="${j}"> ${r}</label>`);
document.getElementById("perguntas").appendChild(p);});

function corrigir(){let pontos=0;dados.forEach((d,i)=>{let r=document.querySelector(`input[name=q${i}]:checked`);if(r&&+r.value==d[2])pontos++});
let por=Math.round(pontos/15*100);let m=pontos>=13?"🏆 Excelente!":pontos>=9?"👏 Muito bem!":"📚 Continue estudando!";
document.getElementById("resultado").innerHTML=`Você acertou <b>${pontos}/15</b> (${por}%). ${m}`;}

function enviar(){let d=document.getElementById("desabafo"),m=document.getElementById("mensagem");
m.innerText=d.value.trim()?"💜 Obrigado por compartilhar. Procure um adulto de confiança se precisar de ajuda.":"Digite seu desabafo.";if(d.value.trim())d.value="";}

function tema(){document.body.classList.toggle("dark")}
function topo(){window.scrollTo({top:0,behavior:"smooth"})}
