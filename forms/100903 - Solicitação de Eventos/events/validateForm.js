/* function validateForm(form){
    var Now_State = parseInt(getValue("WKNumState"));
	var msg = '';

	var DInicio = form.getValue("dh_inicio").split(' ')[0];
	var DInicio2 = DInicio.split('/');
	var Inicio = DInicio2[2]+'-'+DInicio2[1]+'-'+DInicio2[0]

	var DFim = form.getValue("dh_fim").split(' ')[0];
	var DFim2 = DFim.split('/');
	var Fim = DFim2[2]+'-'+DFim2[1]+'-'+DFim2[0]

	var DDead =  form.getValue("deadline").split(' ')[0];
	var DDead2 = DDead.split('/');
	var Dead = DDead2[2]+'-'+DDead2[1]+'-'+DDead2[0]

	var tipo = form.getValue("tp_apoio");
	
	var Dhoje = form.getValue("dt_DataSolicit").split(' ')[0];
	var Dhoje2 = Dhoje.split('/');
	var hoje = Dhoje2[2]+'-'+Dhoje2[1]+'-'+Dhoje2[0]


	Date.prototype.addDays = function(days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
    }
    
    if(form.getValue("cmb_GerenteSolicitante")=="Selecione"){
		msg += "Error : Campo 'Gerente' não foi preeenchido!\n";
	} */




	/*msg += Inicio + '\n';
	msg += Fim + '\n';
	msg += hoje + '\n';*/





	/* if(tipo == 0){
		msg += "Error : Selecione um tipo de serviço\n";
	}
	if(tipo == 'evento'){
		if(form.getValue("NomeEvento")==""){
			msg += "Error : Campo 'Nome do Evento' não foi preeenchido!\n";
		}
		if((form.getValue("Seminarios")!="on")&&(form.getValue("Feira")!="on")&&(form.getValue("Forum")!="on")&&(form.getValue("Reuniao")!="on")&&(form.getValue("Oficina")!="on")&&(form.getValue("Palestra")!="on")&&(form.getValue("Auditorio")!="on")&&(form.getValue("Workshop")!="on")&&(form.getValue("Congresso")!="on")&&(form.getValue("Curso")!="on")&&(form.getValue("Rodada")!="on")){
			msg += "Error : Campo 'Tipo de Evento' não foi preeenchido!\n";
		}
		if(form.getValue("dh_inicio")==""){
			msg += "Error : Campo 'Data e Hora Inicial' não foi preeenchido!\n";
		}
		if(form.getValue("dh_fim")==""){
			msg += "Error : Campo 'Data e Hora Final' não foi preeenchido!\n";
		}
		if(hoje>Inicio){
			msg += "Error : Data de 'Inicio' inválida!\n"
		}
		if(Inicio>Fim){
			msg += "Error : Data de 'Inicio' não pode ser depois da data de termino!\n" ; 
				
		}
		//msg += Now_State + "\n"
		if(Now_State == 4 || Now_State == 0){prazoSocilitacao();}
			
	}
	if(tipo == 'servico'){
		if(hoje>Dead){
			msg += "Error : Data de 'Deadline' inválida!\n"
		}
		else{
			if(Now_State == 4 || Now_State == 0){prazoSocilitacao();}
		}

		if(form.getValue("deadline")==""){
			msg += "Error : Campo 'Deadline' não foi preeenchido!\n";
		}
		if(form.getValue("objetivo")==""){
			msg += "Error : Campo 'Objetivo' não foi preeenchido!\n";
		}
		
	}

	if(form.getValue("codProjeto") == ''){
		msg += "Error : Campo 'Projeto' não foi preenchido!\n";
	}
	
	if(form.getValue("codAcao") == ''){
		msg += "Error : Campo 'Ação' não foi preenchido!\n";
	}
	
	if(form.getValue("codRecurso") == ''){
		msg += "Error : Campo 'Unidade' não foi preenchido!\n";
	}

    var tabela = form.getChildrenIndexes("dadosItem");
    if(tabela.length==0){
		msg += "Error : Painel 'Solicitaçao' não foi preeenchido!\n";
	}
	

	if(msg!=""){
		//document.querySelectorAll(".fluig-style-guide .modal-content .modal-header")[0].style.cssText = "background-color: rgb(84, 164, 221);color: #fff"
		//document.querySelectorAll(".fluig-style-guide .modal-title")[0].innerHTML = 'ATENÇÃO '
		throw msg;
	}

	function prazoSocilitacao(){
		var data = new Date();
		var date = new Date()
		if(tipo == 'evento'){
			var dataInicial = new String(Inicio);
		}
		if(tipo == 'servico'){
			var dataInicial = new String(Dead);
		}
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
} */