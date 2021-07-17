"use strict";

const max_price = 120;

function setpage(id) {
	let c = document.getElementById("content").children;
	for(let i=0; i<c.length; i++){
		c[i].style.display = "none";
	}
	document.getElementById(id).style.display = "block";
}

function to_normal_case(str) {
	return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function team_to_string(team) {
	let ans = "";
	for(let i = 0; i < team.length; i++) {
		ans += team[i].id.toString(16).padStart(2, "0");
	}
	return ans;
}
function string_to_team(steam){
	if(!/[0-9a-fA-F]{12}/.test(steam)) {
		return [];
	}
	let ans = [0,0,0,0,0,0];
	for(let i = 0; i < 6; i++) {
		let id = parseInt(steam.substring(i*2,i*2+2),16);
		if(id>=ath.length) {
			return [];
		}
		ans[i] = ath[id];
	}
	return ans;
}

function check_team(team){
	let bad = false;
	let message = "";

	let n0 = 0;
	let n1 = 0;
	let price = 0;
	if(team.length > 0 && team[0].category != 0){
		bad = true;
		message += "Il capitano deve essere una ginnasta in squadra, non individualista.<br />\n";
	}
	for(let i = 0; i < team.length; i++) {
		for(let j = i+1; j < team.length; j++){
			if(team[i].country == team[j].country){
				bad = true;
				message += team[i].name + " e " + team[j].name + " fanno parte della stessa nazione, questo non e' permesso.<br />\n";
			}
		}
		if(team[i].category == 0) {
			n0 += 1;
		} else {
			n1 += 1;
		}
		price += team[i].price;
	}
	if(n0!=4){
		bad = true;
		message += "Sono presenti " + n0 + " ginnaste in squadra, ne servono 4.<br />\n";
	}	
	if(n1!=2){
		bad = true;
		message += "Sono presenti " + n1 + " ginnaste individualiste, ne servono 2.<br />\n";
	}
	if(price>max_price) {
		bad = true;
		message += "Sono stati spesi " + price + " Comeneci, il massimo e' " + max_price + ".<br />\n";
	}

	if(bad == false){
		message += "Team completo, " + price + "/" + max_price + " Comeneci spesi.<br />\n"+
			"ID squadra: " + team_to_string(team) + "<br />\n";
	}

	return [bad,message];
}

function recalc_checkboxes(){
	const checked = document.querySelectorAll('input[name="athlete-checkbox"]:checked');
	let leader = null;
	let leader_box = document.querySelector('input[name="leader-radio"]:checked');
	if(leader_box != null) {
		leader = ath[parseInt(leader_box.value)];
	} else {
		document.getElementById("team-creation-message").innerHTML = "Nessun membro della squadra e' stato selezionato come capitano";
	}
	let team = [];
	let ld = [];
	checked.forEach((checkbox) => {
		team.push(ath[parseInt(checkbox.value)]);
	});

	let leader_found = false;
	for(let i=0; i<team.length; i++){
		if(team[i].id==leader.id){
			[team[0],team[i]] = [team[i],team[0]];
			leader_found = true;
		}
	}
	if(leader_found == false){
		team.unshift(leader);
	}

	let a = check_team(team);
	let bad = a[0];
	let message = a[1];

	document.getElementById("team-creation-message").innerHTML = message;
}

function create_athlete_table() {
	let tbody0 = document.getElementById("atable0");
	let tbody1 = document.getElementById("atable1");

	{
		let tr0 = document.createElement('tr');
		let tr1 = document.createElement('tr');

		let td0 = document.createElement('td');
		let td1 = document.createElement('td');
		let td2 = document.createElement('td');
		let td3 = document.createElement('td');
		let td4 = document.createElement('td');
		let td5 = document.createElement('td');

		td0.appendChild(document.createTextNode("Naz"));
		td1.appendChild(document.createTextNode("Nome"));
		td2.appendChild(document.createTextNode("C"));
		td3.appendChild(document.createTextNode("Sq"));
		td4.appendChild(document.createTextNode("Cap"));

		tr0.appendChild(td0.cloneNode(true));
		tr0.appendChild(td1.cloneNode(true));
		tr0.appendChild(td2.cloneNode(true));
		tr0.appendChild(td3.cloneNode(true));
		tr0.appendChild(td4);

		tr1.appendChild(td0);
		tr1.appendChild(td1);
		tr1.appendChild(td2);
		tr1.appendChild(td3);

		tbody0.appendChild(tr0);
		tbody1.appendChild(tr1);
	}

	for (let i = 0; i < ath.length; i++) {
		let tr = document.createElement('tr');

		let check = document.createElement("input");
		check.setAttribute("type", "checkbox");
		check.setAttribute("name", "athlete-checkbox");
		check.setAttribute("value", ath[i].id);
		check.addEventListener("change", recalc_checkboxes);

		let radio = document.createElement("input");
		radio.setAttribute("type", "radio");
		radio.setAttribute("name", "leader-radio");
		radio.setAttribute("value", ath[i].id);
		radio.addEventListener("change", recalc_checkboxes);

		let td0 = document.createElement('td');
		let td1 = document.createElement('td');
		let td2 = document.createElement('td');
		let td3 = document.createElement('td');
		let td4 = document.createElement('td');

		td0.appendChild(document.createTextNode(to_normal_case(ath[i].country)));
		td1.appendChild(document.createTextNode(ath[i].name));
		td2.appendChild(document.createTextNode(ath[i].price));
		td3.appendChild(check);
		if (ath[i].category == 0){
			td4.appendChild(radio);
		}

		tr.appendChild(td0);
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);

		if(ath[i].category == 0){
			tr.appendChild(td4);
			tbody0.appendChild(tr);
		} else {
			tbody1.appendChild(tr);
		}
	}
}

function calc_score(team) {
	if(check_team(team)[0]) {
		return -1;
	}
	let ans = team[0].price;
	for(let i=0; i<team.length; i++){
		// ans += team[i].score;
		ans += team[i].price;
	}
	return ans;
}

function create_scoreboard(){
	let tbl = document.createElement('table');
	let tbdy = document.createElement('tbody');

	{
		let tr = document.createElement('tr');

		let tda = document.createElement('td');
		let td0 = document.createElement('td');
		let td1 = document.createElement('td');

		tda.appendChild(document.createTextNode("#"));
		td0.appendChild(document.createTextNode("Pnt"));
		td1.appendChild(document.createTextNode("Nome"));

		tr.appendChild(tda);
		tr.appendChild(td0);
		tr.appendChild(td1);

		let td = document.createElement('td');
		td.appendChild(document.createTextNode("Cap"));
		tr.appendChild(td);

		for(let i=1; i<6; i++){
			let td = document.createElement('td');
			td.appendChild(document.createTextNode("Atleta "+(i+1)));
			tr.appendChild(td);
		}

		tbdy.appendChild(tr);
	}
	let ss = subs;
	ss.sort((a, b) => {
		return calc_score(string_to_team(b.id)) - calc_score(string_to_team(a.id));
	});

	let last_score = 0;
	let last_pos = 1;

	for (let i = 0; i < ss.length; i++) {
		let team = string_to_team(ss[i].id);
		if(check_team(team)[0]) {
			console.log("team "+i+" by "+ss[i].name+" " + ss[i].id + " is no good ("+check_team(team)[1]+")");
			continue;
		}
		let score = calc_score(team);
		if(last_score > score) {
			last_pos = i+1;
		}
		last_score = score;

		let tr = document.createElement('tr');

		let tda = document.createElement('td');
		let td0 = document.createElement('td');
		let td1 = document.createElement('td');

		tda.appendChild(document.createTextNode(last_pos));
		td0.appendChild(document.createTextNode(score));
		td1.appendChild(document.createTextNode(ss[i].name));

		tr.appendChild(tda);
		tr.appendChild(td0);
		tr.appendChild(td1);

		for(let i=0; i<6; i++){
			let td = document.createElement('td');
			td.appendChild(document.createTextNode(team[i].name));
			tr.appendChild(td);
		}

		tbdy.appendChild(tr);
	}
	tbl.appendChild(tbdy);
	document.getElementById('scoreboard-display').appendChild(tbl);
}

function setup(){
	setpage("home");	
	create_athlete_table();
	create_scoreboard();
}

