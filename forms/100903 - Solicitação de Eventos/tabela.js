function getRow2() {
    var table = document.getElementById('dadosItemGrafica')
    var tbody = table.tBodies[0]
    var rows = tbody.rows
    var slc = rows[rows.length - 1].getElementsByTagName('input')
    console.log(slc)
    if (slc[slc.length - 1].id.indexOf('___') != -1) {
        return slc[slc.length - 1].id.split('___')[1]
    }
}


function addItens2() {
    wdkAddChild("dadosItemGrafica");
}

function fnCustomDeleteItem(elem) {
    fnWdkRemoveChild(elem);
}

//var guardTipo = [''];
//var guardDetalhe = [''];

function adicionarItem2() {
    var tabela = document.getElementsByClassName('errada')[0];
    var numeroLinhas = tabela.rows.length;
    var tp2 = document.getElementById("tp_soli2");
    var dt2 = document.getElementById("dt2");
    if (tp2.value != '' && dt2.value != '') {
        addItens2()
        var index = getRow2()
        var linha = tabela.tBodies[0].insertRow(numeroLinhas - 1);
        linha.id = index
        var tipoSolicitacao2 = linha.insertCell(0);
        var det = linha.insertCell(1);
        var excloi = linha.insertCell(2);
        /*tipoSolicitacao.innerHTML = tp.value
        det.innerHTML = dt.value*/
        document.getElementById('tipo_grafica___' + index).value = tp2.value
        document.getElementById('detalhe_grafica___' + index).value = dt2.value


        tipoSolicitacao2.innerHTML = document.getElementById('tipo_grafica___' + index).value
        det.innerHTML = document.getElementById('detalhe_grafica___' + index).value
        excloi.innerHTML = "<button class='btn btn-danger' data-toggle='tooltip' data-placement='top' title='Excluir' onclick='excluirItem2(this)'><i class='flaticon flaticon-trash icon-sm' style='padding: 1px;'></i></button>";

        /* guardTipo.push(tp.value)
         guardDetalhe.push(dt.value)
         console.log(guardTipo)
         console.log(guardDetalhe)*/


        dt2.value = '';

    }
    else {
        alert("É necessário preencher os campos 'Tipo de Demanda' e 'Informações Específicas'")
    }
}//var a = [1, -1, 3, 4 ]

function excluirItem2(linha) {
    var index = linha.parentNode.parentNode.id;
    var idDel2 = 'delGrafica___' + index
    var n = 1

    a = document.getElementById(idDel2)
    if (a == null) {
        b = document.getElementById('tipo_grafica___' + index)
        if (b) {
            a = b.parentElement.parentElement.parentElement.getElementsByTagName('i')
            a = a[0]
        }
    }
    fnCustomDeleteItem(a)
    var i = linha.parentNode.parentNode.rowIndex;
    document.getElementsByClassName('errada')[0].deleteRow(i);
    /*guardTipo[index] = '';
    console.log(guardTipo)
*/
}


function panelInput2() {
    var divaAll = document.getElementById('inputGrafica1')
    /****************label************************/
    var vlabel = document.createElement('label')
    att = document.createAttribute('for')
    att.value = 'tp_soli2'
    vlabel.setAttributeNode(att)
    vlabel.innerText = 'Tipo de Serviço Gráfico: '

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
    att.value = 'tp_soli2'
    vselect.setAttributeNode(att)
    att = document.createAttribute('id')
    att.value = 'tp_soli2'
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

    var optgp2 = document.createElement('optgroup')
    att = document.createAttribute('label')
    att.value = 'Demanda de Serviço/Produto'
    optgp2.setAttributeNode(att)
    for (i = 0; i < arrayOption.length; i++) {
        var opt = arrayOption[i].split(' - ')
        att = document.createAttribute('label')
        var voption = document.createElement('option')
        att = document.createAttribute('value')
        if (opt[0] == 'Demanda de Serviço/Produto') {
            att.value = opt[1]
            voption.setAttributeNode(att)
            voption.innerText = opt[1]
            optgp2.appendChild(voption)
        }
    }
    vselect.appendChild(optgp2)


    var optgp3 = document.createElement('optgroup')
    att = document.createAttribute('label')
    att.value = 'Serviço de Comunicação'
    optgp3.setAttributeNode(att)
    for (i = 0; i < arrayOption.length; i++) {
        var opt = arrayOption[i].split(' - ')
        att = document.createAttribute('label')
        var voption = document.createElement('option')
        att = document.createAttribute('value')
        if (opt[0] == 'Serviço de Comunicação') {
            att.value = opt[1]
            voption.setAttributeNode(att)
            voption.innerText = opt[1]
            optgp3.appendChild(voption)
        }
    }
    vselect.appendChild(optgp3)

    divaAll.appendChild(vselect)


    /***************************************************************** */
    var divaAll2 = document.getElementById('inputGrafica2')

    /***********label**************************** */
    var vlabel = document.createElement('label')
    att = document.createAttribute('for')
    att.value = 'dt2'
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
    att.value = 'dt2'
    vtextarea.setAttributeNode(att)
    att = document.createAttribute('name')
    att.value = 'dt2'
    vtextarea.setAttributeNode(att)
    att = document.createAttribute('id')
    att.value = 'dt2'
    vtextarea.setAttributeNode(att)
    att = document.createAttribute('class')
    att.value = 'form-control'
    vtextarea.setAttributeNode(att)

    divaAll2.appendChild(vtextarea)
}



function returnTable2() {
    var tabela = document.getElementById('dadosItemGrafica');
    var numeroLinhas = tabela.tBodies[0].rows.length;
    console.log(numeroLinhas)
    var tableNew = document.getElementsByClassName('errada')[0];
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
                if (a == 'tipo_grafica') {
                    if (ln[j].id.indexOf('___') != -1) {
                        tipo.innerHTML = ln[j].innerText;
                        linha.id = ln[j].id.split('___')[1]
                    }
                }
                if (a == 'detalhe_grafica') {
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
            ex.innerHTML = "<button class='btn btn-danger' data-toggle='tooltip' data-placement='top' title='Excluir' onclick='excluirItem2(this)'><i class='flaticon flaticon-trash icon-sm' style='padding: 1px;'></i></button>";
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

function validatePanel2() {
    var Now = window.parent.ECM.workflowView.sequence
    var visualizacao = window.parentOBJ.ECM.workflowView.stateDescription
    console.log(visualizacao)
    if (Now == 5 || Now == 10 || Now == 24 || Now == 38 || Now == 43) {
        //console.log(document.getElementById('addItem'))
        document.getElementById('addGrafica').style.display = 'none'
        returnTable2();
    }
    else if (visualizacao == 'Detalhes da Solicitação') {
        document.getElementById('addGrafica').style.display = 'none'
        returnTable2();
    }
    else {
        returnTable2();
        panelInput2();
    }

    if (Now == 5 || Now == 7) {
        document.getElementById('responsavel2').style.display = "block";
    }
    else if (Now == 0 || Now == 4 || Now == 10 || Now == 14) {
        document.getElementById('responsavel2').style.display = "none";
        email();
    }

    /*if(visualizacao == 'Detalhes da Solicitação'){
        //console.log(document.getElementById('addItem'))
        document.getElementById('addItem').style.display = 'none'
        returnTable();
    }*/
}
window.addEventListener('load', validatePanel2);