// function styleFormatDisable(){
//     let arrayInput      = document.getElementsByTagName("input");
//     let arraySpan       = document.getElementsByTagName("span");
//     let arraySelect     = document.getElementsByTagName("select");
//     let arrayP          = document.getElementsByTagName("p");
//     let arrayTextA      = document.getElementsByTagName("textarea");
//     //let arrayStrong     = document.getElementsByTagName("strong");
//     let arrayTotal  = [arrayInput, arraySpan, arraySelect, arrayP, arrayTextA/*, arrayStrong*/];
//     for(i = 0; i < arrayTotal.length; i++){
//         let arrayGo = arrayTotal[i];
//         for(y = 0; y < arrayGo.length; y++){
//             if(arrayGo[y].getAttribute("class") != "fluigicon fluigicon-zoom-in" && arrayGo[y].getAttribute("class") != "input-group-addon"
//             && arrayGo[y].getAttribute("class") != "select2-selection__choice__remove" && arrayGo[y].getAttribute("class") != "Obrigatorio"){
//                 //console.log(arrayGo[y].getAttribute("class"))
//                 arrayGo[y].style.color = "black";
//             }
//         }
//     }
// }
// function controllerTime(){ setTimeout(styleFormatDisable, 200); }
// window.addEventListener("load", controllerTime);

function matriculaResp() {
    var nome = document.getElementById('respDemanda').value
    var ds_mat = DatasetFactory.getDataset("colleague", null, null, null);
    console.log("TROCOU")
    for (var i = 0; i < ds_mat.values.length; i++) {
        console.log("COMPAROU")
        if (ds_mat.values[i]['colleagueName'] == nome) {
            console.log("ACHOU")
            document.getElementById('matriculaResponsavel').value = ds_mat.values[i]['colleaguePK.colleagueId']
        }
    }
}

function unidade() {
    var ds_mat = DatasetFactory.getDataset("colleague", null, null, null);
    var ds_und = DatasetFactory.getDataset("dsc_Unidades", null, null, null);

    var mat = document.getElementById("cmb_NomeSolicitante").value;

    for (var i = 0; i < ds_mat.values.length; i++) {
        if (mat == ds_mat.values[i]['colleaguePK.colleagueId']) {
            //document.getElementById("mt_solicit").value = mat
            var und = ds_mat.values[i]['groupId'];
            for (var j = 0; j < ds_und.values.length; j++) {
                if (und == ds_und.values[j]['AntigaSigla']) {
                    console.log(ds_und.values[j]['Sigla'])
                    document.getElementById("cmb_GerenteSolicitante").value = ds_und.values[j]['NomeGerente']
                    document.getElementById("cmb_UnidadeSolicitante").value = ds_und.values[j]['NomeUnidade']
                    document.getElementById("numSuperior").value = ds_und.values[j]['Matricula']
                    if (mat == document.getElementById("numSuperior").value) {
                        document.getElementById("cmb_GerenteSolicitante").value = ds_und.values[j]['NomeSuperior']
                        document.getElementById("numSuperior").value = ds_und.values[j]['MatSuperior']
                    }
                }
            }
        }
    }
}
window.addEventListener("load", unidade);


function setSuper() {
    document.getElementById("cmb_GerenteSolicitante").onchange = function () { getSuper() }
}

function getSuper() {
    var hdn_Super = document.getElementById("numSuperior")
    console.log(DatasetFactory.getDataset("dsc_Unidades", null, null, null))
    setTimeout(hdn_Super.value = document.getElementById("cmb_GerenteSolicitante").value, 6000);
    var dataset = DatasetFactory.getDataset("dsc_Unidades", null, null, null)
    for (i = 0; i < dataset.values.length; i++) {
        var mat = dataset.values[i].Matricula
        if (mat == hdn_Super.value) {
            var un = dataset.values[i].NomeUnidade
            document.getElementById("cmb_UnidadeSolicitante").value = un
            dir = dataset.values[i].MatSuperior
            if (dir == "00000428") {
                document.getElementById("hdn_diretoria").value = 'Pool:Role:DISUP'
            } else if (dir == "80000318") {
                document.getElementById("hdn_diretoria").value = 'Pool:Role:DIRAF'
            } else if (dir == "00000656") { document.getElementById("hdn_diretoria").value = 'Pool:Role:DITEC' }
        }
    }
}
window.addEventListener("load", setSuper)

/************************ get row ****************************/
function getRow() {
    var table = document.getElementById('dadosItem')
    var tbody = table.tBodies[0]
    var rows = tbody.rows
    var slc = rows[rows.length - 1].getElementsByTagName('input')
    console.log(slc)
    if (slc[slc.length - 1].id.indexOf('___') != -1) {
        return slc[slc.length - 1].id.split('___')[1]
    }
}


function addItens() {
    wdkAddChild("dadosItem");
}

function fnCustomDeleteItem(elem) {
    fnWdkRemoveChild(elem);
}

//var guardTipo = [''];
//var guardDetalhe = [''];

function adicionarItem() {
    var tabela = document.getElementsByClassName('certa')[0];
    var numeroLinhas = tabela.rows.length;
    var tp = document.getElementById("tp_soli");
    var dt = document.getElementById("dt");
    var tt = document.getElementById("teste");
    if (tp.value != '' && dt.value != '') {
        console.log(tt);
        addItens()
        var index = getRow()
        var linha = tabela.tBodies[0].insertRow(numeroLinhas - 1);
        linha.id = index
        var tipoSolicitacao = linha.insertCell(0);
        var det = linha.insertCell(1);
        var excloi = linha.insertCell(2);
        /*tipoSolicitacao.innerHTML = tp.value
        det.innerHTML = dt.value*/
        document.getElementById('tipo_solicitacao___' + index).value = tp.value
        document.getElementById('detalhe___' + index).value = dt.value


        tipoSolicitacao.innerHTML = document.getElementById('tipo_solicitacao___' + index).value
        det.innerHTML = document.getElementById('detalhe___' + index).value
        excloi.innerHTML = "<button class='btn btn-danger' data-toggle='tooltip' data-placement='top' title='Excluir' onclick='excluirItem(this)'><i class='flaticon flaticon-trash icon-sm' style='padding: 1px;'></i></button>";

        /* guardTipo.push(tp.value)
         guardDetalhe.push(dt.value)
         console.log(guardTipo)
         console.log(guardDetalhe)*/


        dt.value = '';

    }
    else {
        alert("É necessário preencher os campos 'Tipo de Demanda' e 'Informações Específicas'")
    }
}//var a = [1, -1, 3, 4 ]

function excluirItem(linha) {
    var index = linha.parentNode.parentNode.id;
    var idDel = 'delItem___' + index
    var n = 1

    a = document.getElementById(idDel)
    if (a == null) {
        b = document.getElementById('tipo_solicitacao___' + index)
        if (b) {
            a = b.parentElement.parentElement.parentElement.getElementsByTagName('i')
            a = a[0]
        }
    }
    fnCustomDeleteItem(a)
    var i = linha.parentNode.parentNode.rowIndex;
    document.getElementsByClassName('certa')[0].deleteRow(i);
    /*guardTipo[index] = '';
    console.log(guardTipo)
*/
}


function panelInput() {
    var divaAll = document.getElementById('input1')
    /****************label************************/
    var vlabel = document.createElement('label')
    att = document.createAttribute('for')
    att.value = 'tp_soli'
    vlabel.setAttributeNode(att)
    vlabel.innerText = 'Tipo de Demanda: '

    var vspan = document.createElement('span')
    att = document.createAttribute('class')
    att.value = 'Obrigatorio'
    vspan.setAttributeNode(att)

    var vstrong = document.createElement('strong')
    vstrong.innerText = '*'

    vlabel.appendChild(vspan)
    vspan.appendChild(vstrong)

    divaAll.appendChild(vlabel)
    /*****************select******************** */
    var vselect = document.createElement('select')
    att = document.createAttribute('class')
    att.value = 'form-control'
    vselect.setAttributeNode(att)
    att = document.createAttribute('name')
    att.value = 'tp_soli'
    vselect.setAttributeNode(att)
    att = document.createAttribute('id')
    att.value = 'tp_soli'
    vselect.setAttributeNode(att)

    var vselecione = document.createElement('option')
    att = document.createAttribute('value')
    att.value = ''
    vselecione.setAttributeNode(att)
    att = document.createAttribute('selected')
    vselecione.setAttributeNode(att)
    att = document.createAttribute('disabled')
    vselecione.setAttributeNode(att)
    vselecione.innerText = 'Selecione'
    vselect.appendChild(vselecione)


    var arrayOption = [
        'Demanda de Serviço/Produto - Espaço Fisico',
        'Demanda de Serviço/Produto - Recursos Humanos',
        'Demanda de Serviço/Produto - Artigo de Decoração',
        'Demanda de Serviço/Produto - Estrutura Física',
        'Demanda de Serviço/Produto - Equipamento de Iluminação',
        'Demanda de Serviço/Produto - Equipamento de Sonorização',
        'Demanda de Serviço/Produto - Equipamento de Informática',
        'Demanda de Serviço/Produto - Equipamento Áudio Visuais',
        'Demanda de Serviço/Produto - Alimentação',
        'Demanda de Serviço/Produto - Bebida',
        'Serviço de Comunicação - TV',
        'Serviço de Comunicação - Rádio',
        'Serviço de Comunicação - Jornal',
        //'Serviço de Comunicação - Revista',
        'Serviço de Comunicação - Portal',
        'Serviço de Comunicação - Google',
        'Serviço de Comunicação - Redes Sociais',
        //'Serviço de Comunicação - Instagram',
        //'Serviço de Comunicação - Facebook',
        'Serviço de Comunicação - Outdoor',
        //'Serviço de Comunicação - Busdoor',
        'Serviço de Comunicação - Mobiliário Urbano',
        'Serviço de Comunicação - Propaganda Indoor',
        'Serviço de Comunicação - Criação e Produção de Material Gráfico',
        'Serviço de Comunicação - Cobertura Jornalistica',
        'Serviço de Comunicação - Cobertura Fotográfica',
        'Serviço de Comunicação - Produção de Vídeo',
        'Serviço de Comunicação - Plano de Comunicação'
    ]

    var optgp0 = document.createElement('optgroup')
    att = document.createAttribute('label')
    att.value = 'Demanda de Serviço/Produto'
    optgp0.setAttributeNode(att)
    for (i = 0; i < arrayOption.length; i++) {
        var opt = arrayOption[i].split(' - ')
        att = document.createAttribute('label')
        var voption = document.createElement('option')
        att = document.createAttribute('value')
        if (opt[0] == 'Demanda de Serviço/Produto') {
            att.value = opt[1]
            voption.setAttributeNode(att)
            voption.innerText = opt[1]
            optgp0.appendChild(voption)
        }
    }
    vselect.appendChild(optgp0)


    var optgp1 = document.createElement('optgroup')
    att = document.createAttribute('label')
    att.value = 'Serviço de Comunicação'
    optgp1.setAttributeNode(att)
    for (i = 0; i < arrayOption.length; i++) {
        var opt = arrayOption[i].split(' - ')
        att = document.createAttribute('label')
        var voption = document.createElement('option')
        att = document.createAttribute('value')
        if (opt[0] == 'Serviço de Comunicação') {
            att.value = opt[1]
            voption.setAttributeNode(att)
            voption.innerText = opt[1]
            optgp1.appendChild(voption)
        }
    }
    vselect.appendChild(optgp1)

    divaAll.appendChild(vselect)


    /***************************************************************** */
    var divaAll2 = document.getElementById('input2')

    /***********label**************************** */
    var vlabel = document.createElement('label')
    att = document.createAttribute('for')
    att.value = 'dt'
    vlabel.setAttributeNode(att)
    vlabel.innerText = 'Informações Específicas: '

    var vspan = document.createElement('span')
    att = document.createAttribute('class')
    att.value = 'Obrigatorio'
    vspan.setAttributeNode(att)

    var vstrong = document.createElement('strong')
    vstrong.innerText = '*'

    vlabel.appendChild(vspan)
    vspan.appendChild(vstrong)

    divaAll2.appendChild(vlabel)
    /**************texarea***************************** */
    var vtextarea = document.createElement('textarea')
    att = document.createAttribute('rows')
    att.value = '2'
    vtextarea.setAttributeNode(att)
    att = document.createAttribute('name')
    att.value = 'dt'
    vtextarea.setAttributeNode(att)
    att = document.createAttribute('id')
    att.value = 'dt'
    vtextarea.setAttributeNode(att)
    att = document.createAttribute('class')
    att.value = 'form-control'
    vtextarea.setAttributeNode(att)

    divaAll2.appendChild(vtextarea)
}

function returnTable() {
    var tabela = document.getElementById('dadosItem');
    var numeroLinhas = tabela.tBodies[0].rows.length;
    console.log(numeroLinhas)
    var tableNew = document.getElementsByClassName('certa')[0];
    for (var i = 1; i < numeroLinhas; i++) {
        var linha = tableNew.tBodies[0].insertRow(i - 1);
        console.log(linha)
        var tipo = linha.insertCell(0);
        var desc = linha.insertCell(1);
        var ex = linha.insertCell(2);

        var ln = tabela.tBodies[0].rows[i]
        var visualizacao = window.parentOBJ.ECM.workflowView.stateDescription
        console.log(ln)
        if (visualizacao == 'Detalhes da Solicitação') {
            ln = ln.getElementsByTagName('span')
            console.log(ln)
            for (j = 2; j < ln.length; j++) {
                var a = ln[j].id.split('___')[0]
                console.log(ln.length)
                console.log('aqui ô ' + a)
                if (a == 'tipo_solicitacao') {
                    if (ln[j].id.indexOf('___') != -1) {
                        tipo.innerHTML = ln[j].innerText;
                        linha.id = ln[j].id.split('___')[1]
                    }
                }
                if (a == 'detalhe') {
                    if (ln[j].id.indexOf('___') != -1) {
                        desc.innerHTML = ln[j].innerText;
                        //linha.id = ln[j].id.split('___')[1]
                    }
                }

            }
        }
        else {
            ln = ln.getElementsByTagName('input')
            for (j = 0; j < ln.length; j++) {
                if (ln[j].id.indexOf('___') != -1) {
                    tipo.innerHTML = ln[j].value;
                    linha.id = ln[j].id.split('___')[1]
                }
            }

            var ln = tabela.tBodies[0].rows[i]
            ln = ln.getElementsByTagName('textarea')
            console.log(ln)
            for (j = 0; j < ln.length; j++) {
                console.log(ln[j])
                console.log(ln[j].value)
                if (ln[j].id.indexOf('___') != -1) {
                    desc.innerHTML = ln[j].value;
                    console.log(ln[j].value)
                }
            }
        }


        var state = window.parent.ECM.workflowView.sequence
        if (state == 14) {
            ex.innerHTML = "<button class='btn btn-danger' data-toggle='tooltip' data-placement='top' title='Excluir' onclick='excluirItem(this)'><i class='flaticon flaticon-trash icon-sm' style='padding: 1px;'></i></button>";
        } else {
            ex.innerHTML = '----'
        }
        console.log('x')
        /*tipo.innerHTML = guardTipo[i];
        desc.innerHTML = guardDetalhe[i];
        ex.innerHTML = '----';
    */
    }
}

function validatePanel() {
    var Now = window.parent.ECM.workflowView.sequence
    var visualizacao = window.parentOBJ.ECM.workflowView.stateDescription
    console.log(visualizacao)
    if (Now == 5 || Now == 10 || Now == 24 || Now == 38 || Now == 43) {
        //console.log(document.getElementById('addItem'))
        document.getElementById('addItem').style.display = 'none'
        returnTable();
    }
    else if (visualizacao == 'Detalhes da Solicitação') {
        document.getElementById('addItem').style.display = 'none'
        returnTable();
    }
    else {
        returnTable();
        panelInput();
    }

    if (Now == 5 || Now == 7) {
        document.getElementById('responsavel').style.display = "block";
    }
    else if (Now == 0 || Now == 4 || Now == 10 || Now == 14) {
        document.getElementById('responsavel').style.display = "none";
        email();
    }

    /*if(visualizacao == 'Detalhes da Solicitação'){
        //console.log(document.getElementById('addItem'))
        document.getElementById('addItem').style.display = 'none'
        returnTable();
    }*/
}
window.addEventListener('load', validatePanel)

function email(){

    var settings = {
        "url": "https://myweb.am.sebrae.com.br/api/public/alert/customEmailSender",
        "method": "POST",
        "timeout": 20000,
        "headers": {
          "Content-Type": "application/json"
        },
        "data": JSON.stringify({
          "to": "atic.6@am.sebrae.com.br",
          "from": "intranet.am@am.sebrae.com.br",
          "subject": "teste",
          "templateId": "GestorResponsavel",
          "dialectId": "pt_BR",
          "param": {}
        }),
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });      
      
}

/***********FOMATAÇÃO DE NUMERO STRING******************/

function formatarMoeda(elem) {
    var id = elem.id
    var valor = moeda.desformatar(elem.value)
    var valorDif = moeda.formatar(valor)
    document.getElementById(id).value = valorDif
}

var moeda = {
    desformatar: function (num) {
        num = num.replace(/\./g, "");
        num = num.replace(/\,/g, ".");
        return parseFloat(num);
    },
    formatar: function (num) {
        x = 0;
        if (num < 0) {
            num = Math.abs(num);
            x = 1;
        }
        if (isNaN(num)) num = "0";
        cents = Math.floor((num * 100 + 0.5) % 100);
        num = Math.floor((num * 100 + 0.5) / 100).toString();
        if (cents < 10) cents = "0" + cents;
        for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
            num = num.substring(0, num.length - (4 * i + 3)) + '.' + num.substring(num.length - (4 * i + 3));
        ret = num + ',' + cents;
        if (x == 1) ret = ' – ' + ret;
        return ret;
    },
    arredondar: function (num) {
        return Math.round(num * Math.pow(10, 2)) / Math.pow(10, 2);
    }
}

function validateValor() {
    tabela = document.getElementById("dadosrateio");
    itens = tabela.getElementsByTagName("input");
    valor = document.getElementById("txt_valor")
    valorTotal = 0;
    for (i = 0; i < itens.length; i++) {
        if (itens[i].id.indexOf("txt_valorUtil___") != -1) {
            iTvalor = itens[i].value
            valorTotal += moeda.desformatar(iTvalor)
        }
    }
    if (valorTotal != moeda.desformatar(valor)) {
        //console.log(valorTotal)
        //console.log(moeda.desformatar(valor))
    }
}

function formataCasasDecimais(valor) {
    valor = "" + valor;

    if (valor.lastIndexOf(".") == -1) {
        valor = valor + ".00";
    }
    else {
        var casasDecimais = valor.substring(valor.lastIndexOf(".") + 1, valor.length);
        if (casasDecimais.length > 2)
            casasDecimais = casasDecimais.substring(0, 2);
        else {
            while (casasDecimais.length < 2) {
                casasDecimais = casasDecimais + "0";
            }
        }
        valor = valor.substring(0, valor.lastIndexOf(".") + 1) + casasDecimais;
    }

    return valor;
}


function setSelectedZoomItem(selectedItem) {

    var indice = -1;
    var arraySelectedItem = selectedItem.inputId.split("___");

    if (arraySelectedItem != null && arraySelectedItem != undefined && arraySelectedItem.length > 1) {
        indice = arraySelectedItem[1];
    }

    if (selectedItem["inputId"] == "txt_projeto___" + indice) {

        document.getElementById("txt_codprojeto___" + indice).value = selectedItem["CODCCUSTO"];

        reloadZoomFilterValues("txt_acao___" + indice, "txt_projeto," + document.getElementById("txt_codprojeto___" + indice).value + ",txt_acao," + document.getElementById("txt_acao___" + indice).value);

    }
    if (selectedItem["inputId"] == "txt_acao___" + indice) {

        document.getElementById("txt_codacao___" + indice).value = selectedItem["CODACAO"];

        reloadZoomFilterValues("txt_recursos___" + indice, "txt_projeto," + document.getElementById("txt_codprojeto___" + indice).value + ",txt_acao," + document.getElementById("txt_codacao___" + indice).value);

        buscaSaldo(document.getElementById("txt_codprojeto___" + indice), document.getElementById("txt_codacao___" + indice))

        var saldo = document.getElementById("txt_saldo___" + indice).value

        console.log(saldo)
        saldo = formataCasasDecimais(saldo)
        console.log(saldo)
        saldo = moeda.formatar(saldo)
        document.getElementById("txt_saldo___" + indice).value = saldo

    }
}


function buscaSaldo(projeto, acao, indx) {

    //console.log("projeto VALUE: " + projeto.value);
    //console.log("acao VALUE: " + acao.value);

    //var campo = acao;

    //if (campo.value != "") {
    if (acao != "") {
        ///var id = projeto.name.replace("txt_codprojeto___", "");
        console.log("cc id " + indx);
        //var cc1 = new Array(projeto.value + "." + acao.value);
        var cc1 = new Array(projeto + "." + acao);
        console.log("cc1: " + cc1)
        datasetsaldo = DatasetFactory.getDataset("dssaldo", cc1, null, null);
        //datasetsaldo = valuesDataset(cc1)

        console.log("DATASET SALDO LENGHT " + datasetsaldo.values.length);
        console.log("datasetsaldo: " + datasetsaldo);
        console.log("datasetsaldo.values: " + datasetsaldo.values);
        if (datasetsaldo.values.length > 0) {
            var record = datasetsaldo.values[0];
            //var record = datasetsaldo[0];
            saldo = eval("record[\"SALDO\"]");
        }
        else {
            saldo = 0
        }

        console.log(saldo);

        if (saldo == 0 || saldo == "0,00") {
            //console.log(document.getElementById("txt_saldo___1"))
            document.getElementById("txt_saldo___" + indx).value = saldo;
            document.getElementById("txt_saldo___" + indx).style = "background-color:#ea8989; color: black";
        }
        else if (saldo != 0 || saldo != "0,00") {
            //console.log(document.getElementById("txt_saldo___1"))
            document.getElementById("txt_saldo___" + indx).value = saldo;
            document.getElementById("txt_saldo___" + indx).style = "background-color:#86dc9c ; color: black";
        }

    }
}

function addRateioz() {
    wdkAddChild("dadosrateio");
    var linha = getRowDot()
    console.log("nova linha:" + linha)
    slcProjeto(linha)
    slcAcao(linha)
    slcUnidade(linha)
    //insertINP()
    //insertINPun()
}

function fnCustomDelete(elem) {
    fnWdkRemoveChild(elem);
}

$(document).ready(function () {
    $('#myTab a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });
});


$(document).ready(function() {
    var checkboxes = ["Eventos", "Projetos", "Coffee", "LandingPage", "Logo"];
    var campos = ["eventos", "projetos", "coffee", "landingPage", "logo"];

    checkboxes.forEach(function(checkboxId, index) {
        $('#' + checkboxId).change(function() {
            if (this.checked) {
                $('#' + campos[index]).collapse('show'); // Mostra o campo correspondente
                $('a[href="#' + campos[index] + '"]').parent().collapse('show'); // Mostra a aba de navegação correspondente
            } else {
                $('#' + campos[index]).collapse('hide'); // Oculta o campo correspondente
                $('a[href="#' + campos[index] + '"]').parent().collapse('hide'); // Oculta a aba de navegação correspondente
            }
        }).change(); // Chama a função change para configurar a visibilidade inicial dos campos e das abas de navegação
    });
});


/* $(document).ready(function() {
    var campos = ["eventos", "projetos", "coffee", "landingPage", "logo"];

    campos.forEach(function(campo) {
        $('a[href="#' + campo + '"]').on('show.bs.tab', function() {
            // Esconde os campos dos outros IDs
            campos.forEach(function(outroCampo) {
                if (outroCampo !== campo) {
                    $('#' + outroCampo).hide();
                }
            });
            
        }).on('hide.bs.tab', function() {
            // Mostra os campos dos outros IDs
            campos.forEach(function(outroCampo) {
                if (outroCampo !== campo) {
                    $('#' + outroCampo).show();
                }
            });
        });
    });
}); */



/* $(document).ready(function() {
    var campos = ["eventos", "projetos", "coffee", "landingPage", "logo"];

    campos.forEach(function(campo) {
        $('a[href="#' + campo + '"]').parent().removeAttr('style'); // Remove o atributo style
    });
}); */