const api =
"https://discord.com/api/guilds/1530900079697727548/widget.json";

async function loadWidget(){

try{

const response=await fetch(api);

const data=await response.json();

document.getElementById("onlineCount").textContent=
data.presence_count;

document.getElementById("memberCount").textContent=
data.members.length;

document.getElementById("joinServer").href=
data.instant_invite;

const memberList=
document.getElementById("memberList");

memberList.innerHTML="";

data.members.forEach(member=>{

let status="online";

if(member.status==="idle")
status="idle";

if(member.status==="dnd")
status="dnd";

memberList.innerHTML+=`

<div class="member">

<img src="${member.avatar_url}">

<div>

<b>${member.username}</b>

<br>

<span class="status ${status}"></span>

${member.status}

</div>

</div>

`;

});

}catch(e){

console.log(e);

}

}

loadWidget();

setInterval(loadWidget,30000);