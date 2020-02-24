import React  from 'react'



const dataUtils = function DataUtils(){
    var dataAtual
        var data = new Date(),
            dia  = data.getDate().toString(),
            diaF = (dia.length == 1) ? '0'+dia : dia,
            mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
            mesF = (mes.length == 1) ? '0'+mes : mes,
            anoF = data.getFullYear();
            dataAtual = diaF+"/"+mesF+"/"+anoF;
  
    return(
        dataAtual
    )
}


export default dataUtils