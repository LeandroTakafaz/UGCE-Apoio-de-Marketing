function validateForm(form){
    var Now_State = parseInt(getValue("WKNumState"));
	var msg = '';

	Date.prototype.addDays = function(days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
    }

	/*msg += Inicio + '\n';
	msg += Fim + '\n';
	msg += hoje + '\n';*/
	
	if(form.getValue("codProjeto") == ''){
		msg += "Error : Campo 'Projeto' não foi preenchido!\n";
	}
	
	if(form.getValue("codAcao") == ''){
		msg += "Error : Campo 'Ação' não foi preenchido!\n";
	}
	
	if(form.getValue("codRecurso") == ''){
		msg += "Error : Campo 'Unidade' não foi preenchido!\n";
	}

	if(form.getValue("slc_FonteRecursos") == '0'){
		msg += "Error : Campo 'Fonte de Recurso' não foi Preenchido"
	}

	if(msg!=""){
		//document.querySelectorAll(".fluig-style-guide .modal-content .modal-header")[0].style.cssText = "background-color: rgb(84, 164, 221);color: #fff"
		//document.querySelectorAll(".fluig-style-guide .modal-title")[0].innerHTML = 'ATENÇÃO '
		throw msg;
	}

	function prazoSocilitacao(){
		var data = new Date();
		var date = new Date()
		var diaN = 12
		var diaT = 12

		//dt1 = dataInicial.split('/')
		//dataInicial = dt1[2] + '-' + dt1[1] + '-' + dt1[0]
		//msg += dataInicial+"\n";
		for(i = 0; i < diaN; i++){
			date.setDate(date.getDate() + i);
			var dia_N_Util = new String(date);
			var patt1 = /Sat+/g;
			var patt2 = /Sun+/g; 
			if(dia_N_Util.match(patt1) || dia_N_Util.match(patt2)){
				diaN++;
			}
		}
		var d = data.addDays(diaN);
		var Ano = d.getFullYear();
		var mes = new Array();
			mes[0] = "01"
			mes[1] = "02"
			mes[2] = "03"
			mes[3] = "04"
			mes[4] = "05"
			mes[5] = "06"
			mes[6] = "07"
			mes[7] = "08"
			mes[8] = "09"
			mes[9] = "10"
			mes[10] = "11"
			mes[11] = "12"
		var dia = new Array();
			dia[1] = "01"
			dia[2] = "02"
			dia[3] = "03"
			dia[4] = "04"
			dia[5] = "05"
			dia[6] = "06"
			dia[7] = "07"
			dia[8] = "08"
			dia[9] = "09"
		var Mes = mes[d.getMonth()];
		if(d.getDate() <= 9){
			var Dia = dia[d.getDate()];
		}
		else{var Dia = d.getDate()}

		var dataFinal = [Ano+"-"+Mes+"-"+Dia];
		
		if(dataFinal  > dataInicial){
			msg += "Alerta : Favor preencher com no minimo "+diaT+" dias úteis de antecendência!\n";        
		}
	}

}