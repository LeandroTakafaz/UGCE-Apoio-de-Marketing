function displayFields(form,customHTML){
    var Now_State = parseInt(getValue("WKNumState"));
    var NumProcesso = getValue("WKNumProces");
    var usuario = getValue("WKUser");
    var data = new java.text.SimpleDateFormat("dd/MM/yyyy HH:mm:ss");

    switch(Now_State){
        case 0:
            form.setValue("cmb_NomeSolicitante",usuario);
            form.setValue("dt_DataSolicit",data.format(new Date()));

            form.setEnabled("cmb_NomeSolicitante",false);
            form.setEnabled("dt_DataSolicit",false);

        break;

        case 10:
            form.setValue("txt_NumProc",NumProcesso);
        break;      

        default:
    }
 }