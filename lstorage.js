window.onload = LoadLocalData();

function LoadLocalData(){
	var gas_con = localStorage.getItem('CalcFlex_Gas_Con');
	var eta_con = localStorage.getItem('CalcFlex_Eta_Con');

	if (gas_con == null) {
		localStorage.setItem('CalcFlex_Gas_Con', '1.3');
		document.getElementById("Gas_Cons").value="1.3";
	}
	else {
		document.getElementById("Gas_Cons").value =
			localStorage.getItem('CalcFlex_Gas_Con');
	}

	if (eta_con == null) {
		localStorage.setItem('CalcFlex_Eta_Con', '1');
			document.getElementById("Eta_Cons").value="1";
	}
	else {
		document.getElementById("Eta_Cons").value =
			localStorage.getItem('CalcFlex_Eta_Con');
	}
}

function CalcFlex(){
	var gas_con = localStorage.getItem('CalcFlex_Gas_Con');
	var eta_con = localStorage.getItem('CalcFlex_Eta_Con');
	var gas_price = document.getElementById("Gas_Price").value;
	var eta_price = document.getElementById("Eta_Price").value;
	effic_dif = gas_con / eta_con;
	price_dif = gas_price / eta_price;

	if (effic_dif > price_dif){
		alert('Abasteça com Gasolina');
	}
	else {
		alert('Abasteça com Etanol');
		}
	}
document.querySelector('#Gas_Cons').addEventListener('keyup',function(){
	localStorage.setItem('CalcFlex_Gas_Con', this.value);}, false);
document.querySelector('#Eta_Cons').addEventListener('keyup',function(){
	localStorage.setItem('CalcFlex_Eta_Con', this.value);}, false);