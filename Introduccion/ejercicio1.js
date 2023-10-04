//dinero de cada uno
let dineroRober = prompt("ingrese cantidad de dinero de roberto:  ");
let dineroPedro = prompt("ingrese cantidad de dinero de pedro: ");
let dineroCofla = prompt("ingrese cantida de dinero de cofla: ");

//precios helados
const palitoAgua = 0.6;
const palitoCrema = 1;
const bombonHeladix = 1.6;
const bombonHeladovich = 1.7;
const bombanHelardo = 0.8;
const potecitoConConfites = 2.9;
const poteCuarto = 2.9;

//condicionantes para cada persona
if(dineroRober>=palitoAgua && dineroRober<=palitoCrema){
    alert("pedro, comprate el palito de agua");
}else if(dineroRober>=palitoCrema && dineroRober<bombonHeladix){
    alert("pedro, comprate el palito de crema");
}else if(dineroRober>=bombonHeladix && dineroRober<bombonHeladovich){
    alert("pedro, comprate el bombon de heladix");
}else if(dineroRober>=bombonHeladovich && dineroRober<bombanHelardo){
    alert("pedro, comprate el bombon Heladovich");
}else if(dineroRober>=bombanHelardo && dineroRober<potecitoConConfites){
    alert("pedro, comprate el bombon helardo");
}else if(dineroRober>=potecitoConConfites){
    alert("pedro, comprate el potecito con confites o el pote de 1/4 ");
}else{
    alert("no te alcanza nada pedro :(");
}

if(dineroPedro>=palitoAgua && dineroPedro<=palitoCrema){
    alert("pedro, comprate el palito de agua");
}else if(dineroPedro>=palitoCrema && dineroPedro<bombonHeladix){
    alert("pedro, comprate el palito de crema");
}else if(dineroPedro>=bombonHeladix && dineroPedro<bombonHeladovich){
    alert("pedro, comprate el bombon de heladix");
}else if(dineroPedro>=bombonHeladovich && dineroPedro<bombanHelardo){
    alert("pedro, comprate el bombon Heladovich");
}else if(dineroPedro>=bombanHelardo && dineroPedro<potecitoConConfites){
    alert("pedro, comprate el bombon helardo");
}else if(dineroPedro>=potecitoConConfites){
    alert("pedro, comprate el potecito con confites o el pote de 1/4 ");
}else{
    alert("no te alcanza nada pedro :(");
}

if(dineroCofla>=palitoAgua && dineroCofla<=palitoCrema){
    alert("Cofla, comprate el palito de agua");
}else if(dineroCofla>=palitoCrema && dineroCofla<bombonHeladix){
    alert("Cofla, comprate el palito de crema");
}else if(dineroCofla>=bombonHeladix && dineroCofla<bombonHeladovich){
    alert("Cofla, comprate el bombon de heladix");
}else if(dineroCofla>=bombonHeladovich && dineroCofla<bombanHelardo){
    alert("Cofla, comprate el bombon Heladovich");
}else if(dineroCofla>=bombanHelardo && dineroCofla<potecitoConConfites){
    alert("Cofla, comprate el bombon helardo");
}else if(dineroCofla>=potecitoConConfites){
    alert("Cofla, comprate el potecito con confites o el pote de 1/4 ");
}else{
    alert("no te alcanza nada Cofla :(");
}

