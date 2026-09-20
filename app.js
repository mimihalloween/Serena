const conversations={violette:[["day", "LUNDI 28 OCTOBRE", null], ["me", "Vi, tu peux me rejoindre ce soir ?", "20:13"], ["them", "Oui, où ça ?", "20:15"], ["me", "Chez moi ? Ou même juste dehors, comme tu veux.", "20:16"], ["them", "Tu m'inquiètes 😭", "20:16"], ["me", "J'ai un truc important à te dire.", "20:17"], ["them", "Maintenant tu vas évidemment pas me laisser tranquille jusqu'à ce que tu me dises.", "20:18"], ["me", "Non 😂 mais viens. J'ai besoin de te le dire en face.", "20:19"], ["day", "MARDI 29 OCTOBRE", null], ["them", "Bon. J'ai attendu toute la journée. Tu me racontes ?", "18:42"], ["me", "Pas encore. Je préfère te le dire en face.", "18:50"], ["them", "Tu sais que tu peux tout me dire hein.", "18:51"], ["me", "Je sais ❤️", "18:52"], ["me", "J'ai juste peur de te le dire et que tout change.", "18:53"], ["them", "Ça concerne qui ?", "18:54"], ["me", "Je te raconterai.", "18:55"], ["them", "Tu fais quoi cette semaine ?", "11:07"], ["me", "Lundi danse, mardi rien, mercredi je bosse. Pourquoi ?", "11:12"], ["them", "Parce que j'aimerais vraiment qu'on se voie.", "11:14"], ["me", "Tu me stresses de plus en plus 😂", "11:15"], ["them", "Je sais. Mais j'arrive pas à le dire correctement.", "11:17"], ["them", "Commence juste par le début.", "11:18"], ["me", "D'accord.", "11:20"], ["me", "Je ne t'ai pas tout dit la première fois.", "11:21"], ["them", "A propos de quoi ?", "11:21"], ["me", "D'une personne avec qui j'ai eu quelque chose.", "11:22"], ["them", "Quelque chose comment ?", "11:23"], ["me", "Une relation. Cachée.", "11:24"], ["them", "Tu ne m'en as jamais parlé.", "11:24"], ["me", "Je voulais que ça reste entre nous.", "11:25"], ["them", "Pourquoi ?", "11:26"], ["me", "Parce que je ne voulais pas que tu le regardes différemment si tu apprenais qui c'était.", "11:27"], ["them", "Tu avais peur que je le connaisse ?", "11:28"], ["me", "Oui.", "11:28"], ["them", "Et tu me le dis maintenant ?", "11:29"], ["me", "Parce que je suis enceinte.", "11:30"], ["them", "Serena…", "11:30"], ["me", "Et le père, je le connais.", "11:31"], ["them", "Alors pourquoi tu me caches son nom ?", "11:32"], ["me", "Parce que je ne veux pas que ça sorte de cette conversation.", "11:33"], ["them", "Tu sais donc que c'est lui ?", "11:34"], ["me", "Oui.", "11:34"], ["them", "Et c'est lui avec qui tu avais cette relation cachée ?", "11:35"], ["me", "Oui.", "11:35"], ["them", "C'est qui ?", "11:36"], ["me", "Je ne peux pas te le dire.", "11:37"], ["them", "Tu peux me faire confiance.", "11:37"], ["me", "Je sais. Mais ce n'est pas seulement mon secret.", "11:38"], ["them", "Je le connais ?", "11:39"], ["me", "Oui.", "11:39"], ["them", "Serena, s'il te plaît.", "11:40"], ["me", "Je ne veux pas que tu le regardes différemment.", "11:41"], ["them", "Donne-moi au moins un indice.", "11:41"], ["me", "Je l'ai déjà dit à demi-mot.", "11:42"], ["them", "Il sera là à Halloween ?", "11:43"], ["me", "Je n'ai jamais dit le contraire.", "11:43"], ["them", "Donc oui.", "11:44"], ["me", "Je dois vraiment arrêter d'en parler.", "11:44"], ["them", "Tu vas me rendre folle.", "11:45"], ["me", "Désolée ❤️", "11:45"]]};
const chat=document.getElementById("chat");
function esc(s){return s.replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));}
function renderMessages(arr){
 chat.innerHTML="";
 for(const m of arr){
  if(m[0]==="day"){const d=document.createElement("div");d.className="day";d.textContent=m[1];chat.appendChild(d);continue;}
  const row=document.createElement("div");row.className="row "+m[0];
  row.innerHTML='<div><div class="bubble">'+esc(m[1])+'</div><div class="meta">'+m[2]+'</div></div>';
  chat.appendChild(row);
 }
}
function openChat(name){
 document.getElementById("inboxView").classList.remove("active");
 document.getElementById("chatView").classList.add("active");
 renderMessages(conversations[name]);
 setTimeout(()=>window.scrollTo(0,document.body.scrollHeight),20);
}
function closeChat(){
 document.getElementById("chatView").classList.remove("active");
 document.getElementById("inboxView").classList.add("active");
}
window.openChat=openChat;window.closeChat=closeChat;
