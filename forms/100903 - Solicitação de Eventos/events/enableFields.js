function enableFields(form){ 
    var Now_State = parseInt(getValue("WKNumState"));
    var gestor = getValue("WKManagerMode");
    var usuario = getValue("WKUser");
    var solicitante = form.getValue("cmb_NomeSolicitante")
    
    
    if(Now_State == 0 || Now_State == 14){
    	fields = ['txt_NumProc', 'cmb_NomeSolicitante', 'dt_DataSolicit']
    	disableFieldsFromList(form, fields)
    	if(usuario != solicitante){
            disableAllFields(form)    	
        }
	}
    else if(Now_State == 5 ){
        disableAllFields(form)
		fields = ['responsavel','respDemanda', 'Eventos', 'Projetos','Coffee', 'LandingPage', 'Logo']
		enableFieldsFromList(form,fields)
	}   
		else if(Now_State == 10 || Now_State == 24 || Now_State == 78 || Now_State == 85 || Now_State == 89 || Now_State == 93){
			disableAllFields(form)
			fields = ['Eventos', 'Projetos','Coffee', 'LandingPage', 'Logo']
			enableFieldsFromList(form, fields)
		}
    else{
    	disableAllFields(form)
    }
}  

function disableAllFields(form) {
	var fields =    form.getCardData();
	var iterare =   fields.keySet().iterator();
	while (iterare.hasNext()) {
		var key =   iterare.next();
		form.setEnabled(key, false, false);
	}
}

function enableFieldsFromList(form, fields) {
	for (var i = 0; i < fields.length; i++) {
		form.setEnabled(fields[i], true);
	}
}

function disableFieldsFromList(form,fields){
	for(var i = 0; i<fields.length; i++){
		form.setEnabled(fields[i], false);
	}
}