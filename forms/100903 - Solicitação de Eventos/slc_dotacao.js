function codProjeto() {
    var dataset = DatasetFactory.getDataset("dsprojeto", null, null, null);
    return dataset.values
}

function codAcaoUnidade() {
    var dataset = DatasetFactory.getDataset("dsc_TT", null, null, null);
    return dataset.values
}


function optAcao(linha) {
    var vdatalistA = document.getElementById("browsersA")
    while (vdatalistA.hasChildNodes()) {
        vdatalistA.removeChild(vdatalistA.firstChild);
    }

    var vdatalistU = document.getElementById("browsersU")
    while (vdatalistU.hasChildNodes()) {
        vdatalistU.removeChild(vdatalistU.firstChild);
    }

    var GetUni = []

    var arrayOption = codAcaoUnidade()
    var proj = document.getElementById("txt_codprojeto___" + linha).value

    for (i = 0; i < arrayOption.length; i++) {
        var codproj = arrayOption[i].CODIGO
        if (codproj.length > 5 && codproj.split(".")[2] == null) {
            if (codproj.split('.')[0] == proj) {
                var voption = document.createElement('option')
                att = document.createAttribute('value')
                att.value = arrayOption[i].NOME
                voption.setAttributeNode(att)
                voption.innerText = arrayOption[i].CODIGO
                vdatalistA.appendChild(voption)
            }
        } else if (codproj.length > 5) {
            if (codproj.split('.')[0] == proj) {
                GetUni.push(arrayOption[i].NOME)
                //console.log(codproj)
            }
        }
    }
    //console.log(GetUni)

    var ArrayUni = GetUni.filter(function (el, i) {
        return GetUni.indexOf(el) === i;
    });
    //console.log(ArrayUni)
    for (j = 0; j < ArrayUni.length; j++) {
        var voptionU = document.createElement('option')
        att = document.createAttribute('value')
        att.value = ArrayUni[j]
        voptionU.setAttributeNode(att)
        //voptionU.innerText =  ArrayUni[i]
        vdatalistU.appendChild(voptionU)
    }

}
/*
function optUnidade(linha){
    var vdatalistU = document.getElementById("browsersU")
    while (vdatalistU.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }

    var arrayOption = codAcaoUnidade()  
    var proj = document.getElementById("txt_codprojeto___"+linha).value

    for(i = 0; i < arrayOption.length; i++){
        var codproj = arrayOption[i].CODIGO
        if(codproj.length>12){
            console.log(proj)
            if(codproj.split('.')[0]== proj){
                console.log(codproj)
                var voption = document.createElement('option')
                att = document.createAttribute('value')
                att.value = arrayOption[i].NOME
                voption.setAttributeNode(att)
                voption.innerText = arrayOption[i].CODIGO
                vdatalistU.appendChild(voption)
            }
        }
    }

}*/

function getRowDot() {
    var table = document.getElementById('dadosrateio')
    var tbody = table.tBodies[0]
    var rows = tbody.rows
    var slc = rows[rows.length - 1].getElementsByTagName('input')
    // console.log(slc)
    if (slc[slc.length - 1].id.indexOf('___') != -1) {
        console.log("linha: " + slc[slc.length - 1].id.split('___')[1])
        return slc[slc.length - 1].id.split('___')[1]
    }
}

function verificaDotacao() {
    var linha = getRowDot()
    console.log(linha)
    // var Now = window.parent.ECM.workflowView.sequence
    // var visualizacao = window.parent.ECM.workflowView.stateDescription
    //console.log("etapa for: "+ Now)

    for (var i = 1; i <= linha; i++) {
        console.log("entrou for verificação ... linha: " + i)
        slcProjeto(i)
        slcAcao(i)
        slcUnidade(i)

        //console.log("etapa for if: "+ Now)

        //if(Now==0 || Now==4 || Now == 47 || Now==36 || visualizacao == "Detalhes da Solicitação"){
        if (document.getElementById("txt_codrecurso___" + i).value != "") {
            var codigo = (document.getElementById("txt_codrecurso___" + i).value).split(".")
            console.log("{ projeto: " + codigo[0] + "\nacao: " + codigo[1] + "\nunidade:" + codigo[2] + " }")
            var Array = codAcaoUnidade()

            for (j = 0; j < Array.length; j++) {
                var acao = codigo[0] + '.' + codigo[1]
                //console.log("ACAO for: "+acao)

                if (codigo[0] == Array[j].CODIGO && (Array[j].CODIGO).split('.')[1] == null) {
                    document.getElementById("slc_projeto_" + i).value = Array[j].NOME
                }
                else if (acao == Array[j].CODIGO && (Array[j].CODIGO).split('.')[2] == null) {
                    document.getElementById("slc_acao_" + i).value = Array[j].NOME
                }
                else if (codigo[2] == (Array[j].CODIGO).split('.')[2]) {
                    document.getElementById("slc_unidade_" + i).value = Array[j].NOME
                }
            }
        }

        var pro = document.getElementById("txt_codprojeto___" + i).value
        var ac = (document.getElementById("txt_codacao___" + i).value).split('.')[1]

        if (document.getElementById("txt_saldo___" + i).value == '') {
            console.log("{pro: " + pro + "\nac: " + ac + "\ni: " + i + "}")
            buscaSaldo(pro, ac, i)

            var saldo = document.getElementById("txt_saldo___" + i).value

            //console.log(saldo)
            saldo = formataCasasDecimais(saldo)
            console.log(saldo)
            saldo = moeda.formatar(saldo)
            document.getElementById("txt_saldo___" + i).value = saldo
        }
        else {
            document.getElementById("txt_saldo___" + i).value = document.getElementById("txt_saldo___" + i).value
        }


        //}
        /*else {
            if(document.getElementById("txt_codrecurso___"+i).value != ""){
                var codigo = (document.getElementById("txt_codrecurso___"+i).value).split(".")
                var Array = codAcaoUnidade()

                for(j=0; j< Array.length; j++){
                    if(codigo[0] == Array[j].CODIGO && (Array[j].CODIGO).split('.')[1] == null){
                        document.getElementById("slc_projeto_"+i).value = Array[j].NOME
                    }
                    else if(codigo[1] == (Array[j].CODIGO).split('.')[1] && (Array[j].CODIGO).split('.')[2] == null){
                        document.getElementById("slc_acao_"+i).value = Array[j].NOME
                    }
                    else if(codigo[2] == (Array[j].CODIGO).split('.')[2]){
                        document.getElementById("slc_unidade_"+i).value = Array[j].NOME
                    }
                }
            }
            
            //var pro = document.getElementById("_txt_codprojeto___"+i).value
            //var ac = (document.getElementById("_txt_codacao___"+i).value).split('.')[1]

            /*console.log("linha: "+ i)
            buscaSaldo(pro,ac,i)

            var saldo = document.getElementById("_txt_saldo___"+i).value

            console.log(saldo)
            saldo = formataCasasDecimais(saldo)
            console.log(saldo)
            saldo = moeda.formatar(saldo)*/
        //} 
        optAcao(linha)

    }


}
window.addEventListener("load", verificaDotacao)


function slcProjeto(linha) {
    //var linha = getRow()
    //var divaAll = document.getElementById('projetov___'+linha)
    var Now = window.parent.ECM.workflowView.sequence
    var visualizacao = window.parent.ECM.workflowView.stateDescription

    console.log(document.getElementsByClassName("projetov")[linha])

    if(document.getElementsByClassName("projetov")[linha] == undefined){
        console.log("undefined")
        var posicao = document.getElementsByClassName("projetov").length - 1
    }
    else{
        console.log("not undefined")
        var posicao = linha
    }

    var divaAll = document.getElementsByClassName("projetov")[posicao]

    /****************label************************/
    var vlabel = document.createElement('label')
    att = document.createAttribute('for')
    att.value = 'slc_projeto'
    vlabel.setAttributeNode(att)
    vlabel.innerText = 'Projeto'

    var vspan = document.createElement('span')
    att = document.createAttribute('class')
    att.value = 'Obrigatorio'
    vspan.setAttributeNode(att)

    var vstrong = document.createElement('strong')
    vstrong.innerText = '*'

    vlabel.appendChild(vspan)
    vspan.appendChild(vstrong)

    divaAll.appendChild(vlabel)

    /*************select***************/
    

    var vselect = document.createElement('input')
    att = document.createAttribute('list')
    att.value = 'browsersP'
    vselect.setAttributeNode(att)
    att = document.createAttribute('class')
    att.value = 'form-control'
    vselect.setAttributeNode(att)
    att = document.createAttribute('name')
    att.value = 'slc_projeto'
    vselect.setAttributeNode(att)
    att = document.createAttribute('id')
    att.value = 'slc_projeto_' + linha
    vselect.setAttributeNode(att)
    att = document.createAttribute('placeholder')
    att.value = 'Escolha o Projeto'
    vselect.setAttributeNode(att)
    att = document.createAttribute('autocomplete')
    att.value = 'off'
    vselect.setAttributeNode(att)



    if (visualizacao == "Detalhes da Solicitação") {
        att = document.createAttribute('readonly')
        vselect.setAttributeNode(att)
    }
    else if (Now == 5 || Now == 10 || Now == 24 || Now == 38 || Now == 43 || Now == 45 || Now == 78 || Now == 85 || Now == 89 || Now == 109) {
        att = document.createAttribute('readonly')
        vselect.setAttributeNode(att)
    }

    var vdatalist = document.createElement('datalist')
    att = document.createAttribute('id')
    att.value = 'browsersP'
    vdatalist.setAttributeNode(att)

    /*********options**********/
    var arrayOption = codProjeto()
    for (i = 0; i < arrayOption.length; i++) {
        var voption = document.createElement('option')
        att = document.createAttribute('value')
        att.value = arrayOption[i].NOME
        voption.setAttributeNode(att)
        voption.innerText = arrayOption[i].CODCCUSTO
        vdatalist.appendChild(voption)
    }

    divaAll.appendChild(vselect)
    divaAll.appendChild(vdatalist)

    document.getElementById("slc_projeto_" + linha).addEventListener("change", function () {
        //console.log("mudou")
        document.getElementById('slc_acao_' + linha).value = ''
        document.getElementById('slc_unidade_' + linha).value = ''
        var proj = document.getElementById("slc_projeto_" + linha).value
        console.log(proj)
        for (i = 0; i < 
            arrayOption.length; i++) {
            if (arrayOption[i].NOME == proj) {
                //console.log("é")
                document.getElementById("txt_codprojeto___" + linha).value = arrayOption[i].CODCCUSTO
                break;
            }
        }
        optAcao(linha)
    })

}
//window.addEventListener("load",slcProjeto)


function slcAcao(linha) {
    //var linha = getRow()
    //var divaAll = document.getElementById('acaov___'+linha)

    var Now = window.parent.ECM.workflowView.sequence
    var visualizacao = window.parent.ECM.workflowView.stateDescription

    console.log(document.getElementsByClassName("projetov")[linha])

    if(document.getElementsByClassName("projetov")[linha] == undefined){
        console.log("undefined")
        var posicao = document.getElementsByClassName("projetov").length - 1
    }
    else{
        console.log("not undefined")
        var posicao = linha
    }

    var divaAll = document.getElementsByClassName("acaov")[posicao]
    /****************label************************/
    var vlabel = document.createElement('label')
    att = document.createAttribute('for')
    att.value = 'slc_acao'
    vlabel.setAttributeNode(att)
    vlabel.innerText = 'Ação'

    var vspan = document.createElement('span')
    att = document.createAttribute('class')
    att.value = 'Obrigatorio'
    vspan.setAttributeNode(att)

    var vstrong = document.createElement('strong')
    vstrong.innerText = '*'

    vlabel.appendChild(vspan)
    vspan.appendChild(vstrong)

    divaAll.appendChild(vlabel)

    /*************select***************/
    var vselect = document.createElement('input')
    att = document.createAttribute('list')
    att.value = 'browsersA'
    vselect.setAttributeNode(att)
    att = document.createAttribute('class')
    att.value = 'form-control'
    vselect.setAttributeNode(att)
    att = document.createAttribute('name')
    att.value = 'slc_acao'
    vselect.setAttributeNode(att)
    att = document.createAttribute('id')
    att.value = 'slc_acao_' + linha
    vselect.setAttributeNode(att)
    att = document.createAttribute('placeholder')
    att.value = 'Escolha a Ação'
    vselect.setAttributeNode(att)
    att = document.createAttribute('autocomplete')
    att.value = 'off'
    vselect.setAttributeNode(att)

    var Now = window.parent.ECM.workflowView.sequence
    var visualizacao = window.parent.ECM.workflowView.stateDescription

    if (visualizacao == "Detalhes da Solicitação") {
        att = document.createAttribute('readonly')
        vselect.setAttributeNode(att)
    }
    else if (Now == 5 || Now == 10 || Now == 24 || Now == 38 || Now == 43 || Now == 45 || Now == 78  || Now == 85 || Now == 89 || Now == 109)  {
        att = document.createAttribute('readonly')
        vselect.setAttributeNode(att)
    }

    var vdatalist = document.createElement('datalist')
    att = document.createAttribute('id')
    att.value = 'browsersA'
    vdatalist.setAttributeNode(att)

    divaAll.appendChild(vselect)
    divaAll.appendChild(vdatalist)

    document.getElementById("slc_acao_" + linha).addEventListener('change', function () {
        var arrayOption = codAcaoUnidade()
        var codAcao = document.getElementById("slc_acao_" + linha).value
        var codPro = document.getElementById("txt_codprojeto___" + linha).value
        console.log(codAcao)
        for (i = 0; i < arrayOption.length; i++) {
            var Proj = arrayOption[i].CODIGO.split(".")[0]
            console.log("codigo do projeto ACAO: "+Proj)
            if (arrayOption[i].NOME == codAcao && Proj == codPro) {
                //console.log("é")
                document.getElementById("txt_codacao___" + linha).value = arrayOption[i].CODIGO
                break;
            }
        }

        document.getElementById("slc_unidade_" + linha).value = ''

        var pro = document.getElementById("txt_codprojeto___" + linha).value
        var ac = (document.getElementById("txt_codacao___" + linha).value).split('.')[1]

        buscaSaldo(pro, ac, linha)

        var saldo = document.getElementById("txt_saldo___" + linha).value

        //console.log(saldo)
        saldo = formataCasasDecimais(saldo)
        console.log(saldo)
        saldo = moeda.formatar(saldo)
        document.getElementById("txt_saldo___" + linha).value = saldo

    })
}

function slcUnidade(linha) {
    //var linha = getRow()
    //var divaAll = document.getElementById('unidadev___'+linha)

    var Now = window.parent.ECM.workflowView.sequence
    var visualizacao = window.parent.ECM.workflowView.stateDescription

    console.log(document.getElementsByClassName("projetov")[linha])

    if(document.getElementsByClassName("projetov")[linha] == undefined){
        console.log("undefined")
        var posicao = document.getElementsByClassName("projetov").length - 1
    }
    else{
        console.log("not undefined")
        var posicao = linha
    }

    var divaAll = document.getElementsByClassName("unidadev")[posicao]

    /****************label************************/
    var vlabel = document.createElement('label')
    att = document.createAttribute('for')
    att.value = 'slc_unidade'
    vlabel.setAttributeNode(att)
    vlabel.innerText = 'Unidade'

    var vspan = document.createElement('span')
    att = document.createAttribute('class')
    att.value = 'Obrigatorio'
    vspan.setAttributeNode(att)

    var vstrong = document.createElement('strong')
    vstrong.innerText = '*'

    vlabel.appendChild(vspan)
    vspan.appendChild(vstrong)

    divaAll.appendChild(vlabel)

    /*************select***************/
    var vselect = document.createElement('input')
    att = document.createAttribute('list')
    att.value = 'browsersU'
    vselect.setAttributeNode(att)
    att = document.createAttribute('class')
    att.value = 'form-control'
    vselect.setAttributeNode(att)
    att = document.createAttribute('name')
    att.value = 'slc_unidade'
    vselect.setAttributeNode(att)
    att = document.createAttribute('id')
    att.value = 'slc_unidade_' + linha
    vselect.setAttributeNode(att)
    att = document.createAttribute('placeholder')
    att.value = 'Escolha a Unidade'
    vselect.setAttributeNode(att)
    att = document.createAttribute('autocomplete')
    att.value = 'off'
    vselect.setAttributeNode(att)


    var Now = window.parent.ECM.workflowView.sequence
    var visualizacao = window.parent.ECM.workflowView.stateDescription

    if (visualizacao == "Detalhes da Solicitação") {
        att = document.createAttribute('readonly')
        vselect.setAttributeNode(att)
    }
    else if (Now == 5 || Now == 10 || Now == 24 || Now == 38 || Now == 43 || Now == 45 || Now == 78 || Now == 85 || Now == 89 || Now || 109) {
        att = document.createAttribute('readonly')
        vselect.setAttributeNode(att)
    }

    var vdatalist = document.createElement('datalist')
    att = document.createAttribute('id')
    att.value = 'browsersU'
    vdatalist.setAttributeNode(att)

    divaAll.appendChild(vselect)
    divaAll.appendChild(vdatalist)

    document.getElementById("slc_unidade_" + linha).addEventListener('change', function () {
        var arrayOption = codAcaoUnidade()
        var codUni = document.getElementById("slc_unidade_" + linha).value
        var codPro = document.getElementById("txt_codprojeto___" + linha).value
        console.log(codUni)
        for (i = 0; i < arrayOption.length; i++) {
            var Proj = arrayOption[i].CODIGO.split(".")[0]
            console.log("codigo do projeto ACAO: "+Proj)
            if (arrayOption[i].NOME == codUni && Proj == codPro) {
                //console.log("é")
                document.getElementById("txt_codrecurso___" + linha).value = document.getElementById("txt_codacao___" + linha).value + "." + (arrayOption[i].CODIGO).split(".")[2]
                break;
            }
        }

    })
}