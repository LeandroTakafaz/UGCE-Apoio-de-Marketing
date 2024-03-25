function validateForm(form){
    var Now = parseInt(getValue("WKNumState"));
	var errors = [];
	var msg = '';
	Date.prototype.addDays = function(days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
    }

	/* Validação do Ínicio */

	if(Now == 0 || Now == 4)  {
		if(form.getValue("slc_FonteRecursos___1") == "") {
			errors.push("Campo Fonte de Recursos não foi preenchido")
		}
		if(form.getValue("txt_codprojeto___1") == "") {
			errors.push("Campo Projeto não foi preenchido")
		}
		if(form.getValue("txt_codacao___1") == "") {
			errors.push("Campo Ação não foi preenchido")
		}
		if(form.getValue("txt_codrecurso___1") == "") {
			errors.push("Campo Unidade não foi preenchido")
		}
		if(form.getValue("txt_valorUtil___1") == "") {
			errors.push("Campo Valor Utilizado não foi preenchido")
		}
		if(form.getValue("Eventos") == "" && form.getValue("Coffee") == "" && form.getValue("Logo") == "" && form.getValue("Jornada") == ""
		 && form.getValue("Estrategia") == "" && form.getValue("Imprensa") == "" && form.getValue("Grafica") == "" && form.getValue("Cobertura") == "") {
			errors.push("Nenhuma das Caixas preenchidas")
		}

		if(form.getValue("Eventos") == "on" && form.getValue("digitalPresencial") == "") {
			errors.push("Error: Favor preencher o Painel de Evento")
		}

		var campos = [
			{campo: "nomeEventoPres", erro: "Eventos - Campo Público Alvo não foi Preenchido no Painel de Eventos Comerciais"},
			{campo: "publicoEventoPres", erro: "Eventos - Campo Nome do Evento não foi Preenchido no Painel de Eventos Comerciais"},
			{campo: "CidUFPres", erro: "Eventos - Campo Cidade/Uf não foi Preenchido no Painel de Eventos Comerciais"},
			{campo: "dtEvtInicioPres", erro: "Eventos - Campo Data Inicial não foi Preenchido no Painel de Eventos Comerciais"},
			{campo: "dtEvtFinalPres", erro: "Eventos - Campo Data Final não foi Preenchido no Painel de Eventos Comerciais"},
			{campo: "qualiProjeto", erro: "Eventos - Campo Meta Qualitativa não foi Preenchido no Painel de Eventos Comerciais"},
			{campo: "quantProjeto", erro: "Eventos - Campo Meta Quantitativa não foi Preenchido no Painel de Eventos Comerciais"},
			{campo: "canalProjeto", erro: "Eventos - Campo Canais de Atendimento não foi Preenchido no Painel de Eventos Comerciais"},
			{campo: "identidadeProjeto", erro: "Eventos - Campo Estilo Visual Desejado não foi Preenchido no Painel de Eventos Comerciais"},
			{campo: "coresProjeto", erro: "Eventos - Campo Cores Preferenciais não foi Preenchido no Painel de Eventos Comerciais"},
			{campo: "descPresencial", erro: "Eventos - Campo Descrição do Projeto/Programa não foi Preenchido no Painel de Eventos Comerciais"}
		];
		
		for(var i = 0; i < campos.length; i++) {
			if(form.getValue("Eventos") == "on" && form.getValue("digitalPresencial") == "1" && form.getValue(campos[i].campo) == "") {
				errors.push("Error: " + campos[i].erro);
			}
		}
		
		var camposBreak = [
			{campo: "nomeBreak", erro: "Coffee Break - Campo Nome do Evento do Coffee Break não foi preenchido"},
			{campo: "dataBreak", erro: "Coffee Break - Campo Data do Evento do Coffee Break não foi preenchido"},
			{campo: "quantBreak", erro: "Coffee Break - Campo Quantidade de Pessoas não foi preenchido"},
			{campo: "horaInicioBreak", erro: "Coffee Break - Campo Horário Inicial do Evento não foi preenchido"},
			{campo: "horaFinalBreak", erro: "Coffee Break - Campo Horário Final do Evento não foi preenchido"},
			{campo: "horarioBreak", erro: "Coffee Break - Campo Horário a ser servido o Coffee Break não foi preenchido"}
		];
		
		for(var i = 0; i < camposBreak.length; i++) {
			if(form.getValue("Coffee") == "on" && form.getValue(camposBreak[i].campo) == "") {
				errors.push("Error: " + camposBreak[i].erro);
			}
		}

		var camposLogo = [
			{campo: "nomeLogo", erro: "Identidade Visual - Campo Nome do Evento/Projeto não foi preenchido"},
			{campo: "chaveLogo", erro: "Identidade Visual - Campo Palavras-Chave para a Marca não foi preenchido"},
			{campo: "mensagemLogo", erro: "Identidade Visual - Campo Propósito da Marca não foi preenchido"},
			{campo: "tipoServico", erro: "Identidade Visual - Campo Tipo de Serviço Solicitado não foi selecionado"},
			{campo: "designLogo", erro: "Identidade Visual - Campo Estilo de Design Desejado não foi preenchido"},
			{campo: "coresLogo", erro: "Identidade Visual - Campo Cores Preferenciais não foi preenchido"},
			{campo: "visualLogo", erro: "Identidade Visual - Campo Elementos Visuais não foi preenchido"},
			{campo: "tipografiaLogo", erro: "Identidade Visual - Campo Tipografia Escolhida não foi preenchido"},
			{campo: "descLogo", erro: "Identidade Visual - Campo Descrição do Evento/Projeto não foi preenchido"}
		];
		
		for(var i = 0; i < camposLogo.length; i++) {
			if(form.getValue("Logo") == "on" && form.getValue(camposLogo[i].campo) == "") {
				errors.push("Error: " + camposLogo[i].erro);
			}
		}

		var camposMarketing = [
			{campo: "trilhaMarketing", erro: "Jornada do Cliente - Campo Qual trilha deseja seguir não foi selecionado"},
			{campo: "nomeMarketing", erro: "Jornada do Cliente - Campo Nome do Evento/Ação não foi preenchido"},
			{campo: "dtMarketing", erro: "Jornada do Cliente - Campo Data e Hora do Evento não foi preenchido"},
			{campo: "LocalMarketing", erro: "Jornada do Cliente - Campo Local do Evento não foi preenchido"},
			{campo: "tipoMarketing", erro: "Jornada do Cliente - Campo Será Presencial ou Digital? não foi selecionado"},
			{campo: "publicoMarketing", erro: "Jornada do Cliente - Campo Público-Alvo não foi preenchido"},
			{campo: "metaMarketing", erro: "Jornada do Cliente - Campo Meta de Atendimento não foi preenchido"},
			{campo: "baseMarketing", erro: "Jornada do Cliente - Campo Possui Dados para Divulgação não foi selecionado"}
		];
		
		 for(var i = 0; i < camposMarketing.length; i++) {
			if(form.getValue("Jornada") == "on" && form.getValue(camposMarketing[i].campo) == "") {
				errors.push("Error: " + camposMarketing[i].erro);
			}
		}

		var camposConsultoria = [
			{campo: "nomeConsultoria", erro: "Estratégia Comercial - Campo Nome do Evento ou Ação não foi preenchido"},
			{campo: "dtConsultoria", erro: "Estratégia Comercial - Campo Data e Hora do Evento não foi preenchido"},
			{campo: "valorConsultoria", erro: "Estratégia Comercial - Campo Evento gratuito ou pago? não foi selecionado"},
			{campo: "tipoConsultoria", erro: "Estratégia Comercial - Campo Será Presencial ou Digital? não foi selecionado"},
			{campo: "metaConsultoria", erro: "Estratégia Comercial - Campo Possui Meta de Atendimento? não foi selecionado"}
		];
		
		for(var i = 0; i < camposConsultoria.length; i++) {
			if(form.getValue("Estrategia") == "on" && form.getValue(camposConsultoria[i].campo) == "") {
				errors.push("Error: " + camposConsultoria[i].erro);
			}
		}

		var camposJornalisticos = [
			{campo: "prodJornalistico", erro: "Assessoria de Imprensa - Campo Produção Jornalistica não foi preenchido"},
			{campo: "textoJornalistico", erro: "Assessoria de Imprensa - Campo Texto Jornalistico - Comunicado não foi preenchido"},
			{campo: "ReleaseJornalistico", erro: "Assessoria de Imprensa - Campo Release (Sugestão de Pauta) não foi preenchido"}
		];

		for(var i = 0; i < camposJornalisticos.length; i++) {
			if(form.getValue("Imprensa") == "on" && form.getValue(camposJornalisticos[i].campo) == "") {
				errors.push("Error: " + camposJornalisticos[i].erro);
			}
		}

		var camposGrafica = [
			{campo: "eventoGrafica", erro: "Serviços Gráficos - Campo Nome do Evento não foi preenchido"},
			{campo: "arteGrafica", erro: "Serviços Gráficos - Campo Possui uma Arte de Referência? não foi selecionado"},
			{campo: "logoGrafica", erro: "Serviços Gráficos - Campo Possui uma Logo de Referência? não foi selecionado"}
		];
		
		for(var i = 0; i < camposGrafica.length; i++) {
			if(form.getValue("Grafica") == "on" && form.getValue(camposGrafica[i].campo) == "") {
				errors.push("Error: " + camposGrafica[i].erro);
			}
		}

		if(form.getValue("Grafica") == "on" && form.getValue("dt2") == ""){
			errors.push("Error: Serviços Gráficos - Campo Informações Específicas não foi preenchido")
		}

		var camposCobertura = [
			{campo: "nomeEventoCobertura", erro: "Cobertura - Campo Nome do Evento não foi preenchido"},
			{campo: "escolhaCobertura", erro: "Cobertura - Campo Estilo de Cobertura escolhida não foi selecionado"},
			{campo: "dtEvtInicioCobert", erro: "Cobertura - Campo Data Inicial não foi preenchido"},
			{campo: "dtEvtFinalCobert", erro: "Cobertura - Campo Data Final não foi preenchido"}
		];
		
		for(var i = 0; i < camposCobertura.length; i++) {
			if(form.getValue("Cobertura") == "on" && form.getValue(camposCobertura[i].campo) == "") {
				errors.push("Error: " + camposCobertura[i].erro);
			}
		}

	}

		

		// LIMITA DATA
		Date.prototype.addDays = function (days) {
			var date = new Date(this.valueOf());
			date.setDate(date.getDate() + days);
			return date;
		}
		
		/* Prazo de 60 Dias */
		function prazoSocilitacao() {
			var dataAtual = 0;
			var dataInicial = form.getValue("dtEntrega");
			dataInicial = dataInicial.split('T')[0]

			if(form.getValue("Eventos") == "on" && form.getValue("digitalPresencial") != "") {
				var data = new Date();
				var date = new Date();
				var diaN = 60
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
				if (d.getDate() <= 9) {
					var Dia = dia[d.getDate()];
				} else {
					var Dia = d.getDate()
				}

				var dataAtual = [Ano + "-" + Mes + "-" + Dia];
			}

			if (dataAtual > dataInicial) {
				throw("Data de Inicio do Evento deve ser de pelo menos 60 dias")
			} else{
				console.log("parabéns, seu evento foi programado com sucessagem garantida, meu nobre")
			}
			//validaDataTermino()
		}
		prazoSocilitacao();
	
		/* Prazo de 45 Dias */
		function prazoSolicitacao2() {
			var datinha = 0;
			var newDatinhaAtual = form.getValue("dtEntrega");
			newDatinhaAtual = newDatinhaAtual.split('T')[0]

			if(form.getValue("Jornada") == "on" && form.getValue("trilhaMarketing") == "jornadas") {
				var data = new Date();
				var diaN = 45
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
				if (d.getDate() <= 9) {
					var Dia = dia[d.getDate()];
				} else {
					var Dia = d.getDate()
				}

				var datinha = [Ano + "-" + Mes + "-" + Dia];
			}

			if (datinha > newDatinhaAtual) {
				throw("Data de Entrega para uma Jornada Completa deve ser de pelo menos 45 dias")
			} else{
				console.log("parabéns, seu evento foi programado com sucessagem garantida, meu nobre")
			}
			//validaDataTermino()
		}
		prazoSolicitacao2();

		/* Prazo de 30 Dias */
		function prazoSolicitacao3() {
			var dataAtualizada2 = 0;
			var dataInicializada2 = form.getValue("dtEntrega");
			dataInicializada2 = dataInicializada2.split('T')[0]

			if(form.getValue("Jornada") == "on" && form.getValue("trilhaMarketing") == "landing") {
				var data = new Date();
				var date = new Date();
				var diaN = 30
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
				if (d.getDate() <= 9) {
					var Dia = dia[d.getDate()];
				} else {
					var Dia = d.getDate()
				}

				var dataAtualizada2 = [Ano + "-" + Mes + "-" + Dia];
			}

			if (dataAtualizada2 > dataInicializada2) {
				throw("Data de Entrega de uma Landing Page deve ser de pelo menos 30 dias")
			} else{
				console.log("parabéns, seu evento foi programado com sucessagem garantida, meu nobre")
			}
			//validaDataTermino()
		}
		prazoSolicitacao3();

		/* Prazo de 20 Dias */
		function prazoSolicitacao4() {
			var dataAtualizada3 = 0;
			var dataInicializada3 = form.getValue("dtEntrega");
			dataInicializada3 = dataInicializada3.split('T')[0]

			if(form.getValue("nomeLogo") != "" || form.getValue("eventoGrafica") != "" || form.getValue("trilhaMarketing") == "email" || form.getValue("prodJornalistico") != "") {
				var data = new Date();
				var date = new Date();
				var diaN = 20
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
				if (d.getDate() <= 9) {
					var Dia = dia[d.getDate()];
				} else {
					var Dia = d.getDate()
				}

				var dataAtualizada3 = [Ano + "-" + Mes + "-" + Dia];
			}

			if (dataAtualizada3 > dataInicializada3) {
				throw("Data para executar a solicitação deve ser de pelo menos 20 dias")
			} else{
				console.log("parabéns, seu evento foi programado com sucessagem garantida, meu nobre")
			}
			//validaDataTermino()
		}
		prazoSolicitacao4();

		/* Prazo de 10 Dias */
		function prazoSolicitacao5() {
			var dataAtualizada4 = 0;
			var dataInicializada4 = form.getValue("dtEntrega");
			dataInicializada4 = dataInicializada4.split('T')[0]

			if(form.getValue("escolhaCobertura") == "cobertFoto" || form.getValue("escolhaCobertura") == "cobertRedes" || form.getValue("escolhaCobertura") == "cobertComp" || form.getValue("quantBreak") != "") {
				var data = new Date();
				var date = new Date();
				var diaN = 10
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
				if (d.getDate() <= 9) {
					var Dia = dia[d.getDate()];
				} else {
					var Dia = d.getDate()
				}

				var dataAtualizada4 = [Ano + "-" + Mes + "-" + Dia];
			}

			if (dataAtualizada4 > dataInicializada4) {
				throw("Data Mínima para preparar essas atividades é de 10 Dias")
			} else{
				console.log("parabéns, seu evento foi programado com sucessagem garantida, meu nobre")
			}
			//validaDataTermino()
		}
		prazoSolicitacao5();

		/* Prazo de 5 Dias */
		function prazoSolicitacao6() {
			var dataAtualizada4 = 0;
			var dataInicializada4 = form.getValue("dtEntrega");
			dataInicializada4 = dataInicializada4.split('T')[0]

			if(form.getValue("escolhaCobertura") == "cobertJorn" || form.getValue("trilhaMarketing") == "disp") {
				var data = new Date();
				var date = new Date();
				var diaN = 5
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
				if (d.getDate() <= 9) {
					var Dia = dia[d.getDate()];
				} else {
					var Dia = d.getDate()
				}

				var dataAtualizada4 = [Ano + "-" + Mes + "-" + Dia];
			}

			if (dataAtualizada4 > dataInicializada4) {
				throw("Data Mínima para preparar essas atividades é de 5 Dias")
			} else{
				console.log("parabéns, seu evento foi programado com sucessagem garantida, meu nobre")
			}
			//validaDataTermino()
		}
		prazoSolicitacao6();

	if (errors.length > 0) {
		throw errors.join("\n");
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