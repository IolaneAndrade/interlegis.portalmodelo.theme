var getLocalization = function () {
    var localizationobj = {};
    localizationobj.percentSymbol = "%";
    localizationobj.currencySymbol = "R$";
    localizationobj.currencySymbolposition = "antes";
    localizationobj.decimalSeparator = '.';
    localizationobj.thousandsSeparator = ';';
    localizationobj.pagerGoToPageString = "Vá para a página:";
    localizationobj.pagerShowRowsString = " Mostrar linhas:";
    localizationobj.pagerRangeString = " de ";
    localizationobj.pagerPreviousButtonString = "anterior";
    localizationobj.pagerNextButtonString = "próximo";
    localizationobj.pagerFirstButtonsSring = "primeiro";
    localizationobj.pagerLastButtonString = "último";
    localizationobj.filterApplyString = "Aplicar";
    localizationobj.filterCancelString = "Cancelar";
    localizationobj.filterClearString = "Limpar Filtro";
    localizationobj.filterString = "avançado";
    localizationobj.filterSearchString = "Procurar:";
    localizationobj.filterStringComparisonOperators = ['vazio', 'não vazio', 'contem', 'contains(match case)',
       'does not contain', 'does not contain(match case)', 'starts with', 'starts with(match case)',
       'ends with', 'ends with(match case)', 'equal', 'equal(match case)', 'null', 'not null'];
    localizationobj.filterNumericComparisonOperators = ['equal', 'not equal', 'less than', 'less than or equal', 'greater than', 'greater than or equal', 'null', 'not null'];
    localizationobj.filterDateComparisonOperators = ['equal', 'not equal', 'less than', 'less than or equal', 'greater than', 'greater than or equal', 'null', 'not null'];
    localizationobj.filterBooleanComparisoOoperators = ['equal', 'not equal'];
    localizationobj.validationString = "O valor introduzido não é válido";
    localizationobj.emptyDataString = "Nenhum dado para exibir";
    localizationobj.filterSelectString = "Selecionar Filtro";
    localizationobj.loadText = "Carregando...";
    localizationobj.clearString = "Limpo";
    localizationobj.todayString = "Hoje";
    localizationobj.loadingErrorMessage = "Os dados ainda estão sendo carregados e você não pode definir uma propriedade ou chamar um método. Você pode fazer isso quando a ligação de dados estiver concluída. JqxTreeGrid gera o evento 'bindingComplete' quando a ligação é concluída.";
    var days = {
        names: ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"],
        namesAbbr: ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"],
        namesShort: ["D", "S", "T", "Q", "Q", "S", "S"]
    };
    localizationobj.days = days;
    var months = {
        names: ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro", ""],
        namesAbbr: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez", ""]
    };
    var patterns = {
        d: "dd/MM/yyyy",
        D: "dddd, d' de 'MMMM' de 'yyyy",
        t: "HH:mm",
        T: "HH:mm:ss",
        f: "dddd, d' de 'MMMM' de 'yyyy HH:mm",
        F: "dddd, d' de 'MMMM' de 'yyyy HH:mm:ss",
        M: "dd' de 'MMMM",
        Y: "MMMM' de 'yyyy"
    };
    localizationobj.patterns = patterns;
    localizationobj.months = months;
    return localizationobj;
};

//Função para mostrar mensagem box na página
//modo de usar:
//  msgBox(options);
//options:
//  titlle - título da janela
//  msg - mensagem a ser exibida
//  type - tipo de mensagem: error(default), information, question
//  callback: function(btns) - função de retorno dos botões precionados
//      btns.Cancel - botão Não
//      btns.Ok - botão Sim ou OK
//      btns.None - janela fechada no botão fechar

function msgBox(options) {

    "use strict"
    //Padrões definidos caso não seja definido options
    var defaults = {
        title: 'title',
        msg: 'msg',
        type: "error",
        callback: null,
    }

    // Create options by extending defaults with the passed in arugments
    if (arguments[0] && typeof arguments[0] === "object") {
        options = extendDefaults(defaults, arguments[0]);
    }

    //criar os elemntos da janela

    //elemento janela
    var modal = document.createElement('div');
    //elemento header
    var header = document.createElement('div');
    //elemento Content
    var Content = document.createElement('div');

    //criar elementos do título

    //ícone da janela
    var iconWindow = document.createElement('i');
    //Titulo da janela
    var titleWindow = document.createElement('span');

    //Criar elementos do Content

    //ícone da mensagem
    var iconMsg = document.createElement('i');
    //Parágrafo que conterá a mensgem
    var mensagem = document.createElement('p');

    //Criar elementos de organizacao entre a mensagem e os botões

    //div clearfix
    var clearFix = document.createElement('div');
    //Linha horizontal
    var line = document.createElement('hr');

    //Criar botões

    //Botão Confimar ou Sim
    var btn1 = document.createElement('button');
    //Botão Não
    var btn2 = document.createElement('button');

    //Configurar elementos da janela

    //Nomes dos elementos
    modal.setAttribute("id", "msgWindow");
    btn1.setAttribute("id", "btn1");
    btn2.setAttribute("id", "btn2");

    //Configurar Título
    //ícone
    iconWindow.setAttribute("class", "icon icon-brasao");
    iconWindow.setAttribute("style", "margin-right: 15px");
    //Título
    titleWindow.innerHTML = options.title;

    //Configurar Content
    Content.setAttribute("style", "padding-top:20px;");

    //Configurar itens do Content

    //Configurar ícone conforme a opção type
    iconMsg.setAttribute("class", options.type === 'error' ? "fa fa-times-circle fa-4x pull-left" :
        options.type === 'information' ? "fa fa-info-circle fa-4x pull-left iconInfromation" :
            options.type === 'question' ? "fa fa-question-circle fa-4x pull-left" : "");

    iconMsg.setAttribute("style", options.type === 'error' ? "color:darkred; margin-right: 15px; margin-left: 15px" :
        options.type === 'information' ? "color:darkblue; margin-right: 15px; margin-left: 15px" :
            options.type === 'question' ? "color:darkblue; margin-right: 15px; margin-left: 15px" : "");
    //Configurar o prargrafo da mensagem com a mensagem
    mensagem.innerHTML = options.msg;

    //Configurar os itens de fixação
    clearFix.setAttribute("class", "clearfix");

    //Configurar os botões conforme a opção type
    btn1.setAttribute("class", "btn btn-primary pull-right");
    btn1.setAttribute("style", "width:100px");
    btn1.setAttribute("type", "button");
    btn1.setAttribute("id", "btn1");
    btn1.innerHTML = options.type === 'error' ? "Confirmar" :
        options.type === 'information' ? "Confirmar" :
            options.type === 'question' ? "Sim" : "";

    btn2.setAttribute("class", "btn btn-default pull-right");
    btn2.setAttribute("style", options.type === 'error' ? "width:100px; display:none" :
        options.type === 'information' ? "width:100px; display:none" :
            options.type === 'question' ? "width:100px; display:default" : "");
    btn2.setAttribute("type", "button");
    btn2.setAttribute("id", "btn2");
    btn2.innerHTML = "Não";

    //Montar a Estrutura da janela
    header.appendChild(iconWindow);
    header.appendChild(titleWindow);

    Content.appendChild(iconMsg);
    Content.appendChild(mensagem);
    Content.appendChild(clearFix);
    Content.appendChild(line);
    Content.appendChild(btn1);
    Content.appendChild(btn2);

    modal.appendChild(header);
    modal.appendChild(Content);

    document.body.appendChild(modal);

    $("#msgWindow").jqxWindow({
        width: 450,
        theme: 'custom',
        isModal: true,
        autoOpen: true,
        modalOpacity: 0.8,
        draggable: false,
        resizable: false,
        showCloseButton: false,
        okButton: $('#btn1'),
        cancelButton: $('#btn2'),
        keyboardNavigation: false

    });

    $("#msgWindow").on('close', function (event) {
        if (typeof options.callback === 'function') {
            options.callback(event.args.dialogResult);
        }

        var element = document.getElementById("msgWindow");
        element.parentNode.removeChild(element);

    });




    //Funções diversas
    // Utility method to extend defaults with user options
    function extendDefaults(source, properties) {
        var property;
        for (property in properties) {
            if (properties.hasOwnProperty(property)) {
                source[property] = properties[property];
            }
        }
        return source;
    }
}