function validateForm(form){
    var Now = parseInt(getValue("WKNumState"));
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

function validateboleto() {
	var urlInd = "https://myweb.am.sebrae.com.br/portal/p/1/pageworkflowview?app_ecm_workflowview_detailsProcessInstanceID="
	var urlSec = "&app_ecm_workflowview_taskUserId="
	var x = 0
	var arrayNumSol = []
	var matricula = getValue("WKUser");
	//errorMsg += matricula + endofline;
	var c = DatasetFactory.createConstraint("cmb_NomeSolicitante", matricula, matricula, ConstraintType.MUST);
	var constraint = new Array(c);
	var dataset = DatasetFactory.getDataset("FormuláriodeSolicitaçãodeevento747", null, constraint, null);
	for (i = 0; i < dataset.rowsCount; i++) {
		var Nsol = dataset.getValue(i, "txt_NumProcess");
		//errorMsg += "*"+dataset.rowsCount + endofline;
		if (Nsol != null || Nsol != "") {
			var c3 = DatasetFactory.createConstraint("processInstanceId", Nsol, Nsol, ConstraintType.MUST);
			var constraints = new Array(c3);
			var ddataset = DatasetFactory.getDataset("processTask", null, constraints, null);
			//errorMsg += "."+ddataset + endofline;
			for (j = 0; j < ddataset.rowsCount; j++) {
				//errorMsg += "."+x+matricula + endofline;
				var status = ddataset.getValue(j, "status");
				var colleague = ddataset.getValue(j, "processTaskPK.colleagueId");
				if (status == 0 && colleague == matricula) {
					arrayNumSol.push(ddataset.getValue(j, "processTaskPK.processInstanceId"))
					//errorMsg += matricula+ '  '+a + endofline;
					x++
				}
			}
		}
	}
	if (x != 0) {
		errorMsg = '';
		errorMsg += "<h2 style=\"color:black\">Existe uma ou mais solicitações de boleto em sua responsabilidade que não estão finalizadas. As seguintes solicitações:</h2>" + endofline;
		//errorMsg += "<h2 style=\"color:black\">As seguintes solicitações:</h2>" + endofline;
		var arraySec = [1]
		for (i = 0; i < arrayNumSol.length; i++) {
			x = 0
			for (j = 0; j < arraySec.length; j++) {
				if (arrayNumSol[i] == arraySec[j]) {
					x++
					//arraySec.push(arrayNumSol[i])
				}
			}
			if (x == 0) {
				if (arraySec[0] == 1) {
					arraySec[0] = arrayNumSol[i]
				} else {
					arraySec.push(arrayNumSol[i])
				}
			}
		}
		for (k = 0; k < arraySec.length; k++) {
			//errorMsg += "<h2 style=\"color:black\">"+arrayNumSol[i]+"</h2>" + endofline;
			errorMsg += "<h2>" + "<a href=\"" + urlInd + arraySec[k] + urlSec + matricula + "\"" + "class=\"cad-link\"" + "target=\"_blank\"" + "style=\"color:blue\">" + "<i class=\"flaticon flaticon-link icon-md\"></i>" +
				arrayNumSol[k] + "</a>" + "</h2>" + endofline;
		}
		//<a href="LISTA DE INSCRITOS NA ETAPA DE PRÉ-SELEÇÃO - MESTRADO FGV.pdf" class="cad-link" target="_blank" style="color:blue"><i class="flaticon flaticon-link icon-sm"></i>Click aqui para baixar</a>
	} //https://myweb.am.sebrae.com.br/portal/p/1/pageworkflowview?app_ecm_workflowview_detailsProcessInstanceID=24878&app_ecm_workflowview_taskUserId=00000514
}