let vat = false;
let cena = false;
var a=1;
var b=1;
let id = 0;

$(function() {
  $("#myTable").tablesorter();
  

});


	
function funkcja1() {
	if(a % 2 === 0 ){
	
		$("#myTable").trigger("sorton", [ [[0,0]] ]);
	}	
	else{
		$("#myTable").trigger("sorton", [ [[0,1]] ]);
	}
	a++;
};


function funkcja3() {
	if(b % 2 === 0 ){
		$("#myTable").trigger("sorton", [ [[2,0]] ]);
	}	
	else{
		$("#myTable").trigger("sorton", [ [[2,1]] ]);
	}
	b++;
};
	


function sprawdzTowarName() {
var formularz_obj=document.getElementById("nazwaTowaru");
var t_name = formularz_obj.value;
var blad = document.getElementById("towar_name_blad");

 

 var objRegExp  = /^[a-zA-Z]+$/;
  
if (t_name === "" || !(t_name.match(objRegExp)) ) 
    {   
		
        blad.innerHTML = "Podaj poprawną nazwe towaru"; 
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        return false; 
    }
else if (t_name.length > 10)
    {
        blad.innerHTML = "Zadluga nazwa (max 10 znakow)"; 
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        return false; 
    }
else
    {
        blad.classList.remove("invalid-feedback");
        formularz_obj.classList.remove("is-invalid");
        blad.classList.add("valid-feedback");
        formularz_obj.classList.add("is-valid");
        blad.innerHTML = ""; 
        return true;
    }        
}


function sprawdzKodTowaru() {
var formularz_obj=document.getElementById("kodTowaru");
var t_name = formularz_obj.value;
var blad = document.getElementById("kod_blad");

 

 var objRegExp  = /^[A-Za-z0-9]{2}-[A-Za-z0-9]{2}/;
  
if (t_name === "" || !(t_name.match(objRegExp)) || (t_name.length > 5)) 
    {   
        blad.innerHTML = "Podaj kod towaru w formie XX-XX"; 
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        return false; 
    }
else
    {
        blad.classList.remove("invalid-feedback");
        formularz_obj.classList.remove("is-invalid");
        blad.classList.add("valid-feedback");
        formularz_obj.classList.add("is-valid");
        blad.innerHTML = ""; 
        return true;
    } 
}


function sprawdzCeneNetto() {
var formularz_obj=document.getElementById("cenaNetto");
var t_name = formularz_obj.value;
var blad = document.getElementById("netto_blad");
 
var objRegExp  = /^[0-9]*(\.)?([0-9])?([0-9])?/;
  
if (t_name === "") 
    {   
		cena = false;
        blad.innerHTML = "Podaj cenę towaru"; 
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
		obliczBrutto(); 
        return false; 
    }
else if (!t_name.match(/^[0-9]{2}(\.)?([0-9])?([0-9])?/))
    {
		cena=false;
        blad.innerHTML = "Błąd "; 
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
		obliczBrutto(); 
        return false; 
    }
else
    {
		cena = true;
		formularz_obj.value = parseFloat(formularz_obj.value).toFixed(2);
		
        blad.classList.remove("invalid-feedback");
        formularz_obj.classList.remove("is-invalid");
        blad.classList.add("valid-feedback");
        formularz_obj.classList.add("is-valid");
        blad.innerHTML = ""; 
		obliczBrutto(); 
        return true;
    }    
}


function sprawdzVAT() {
var formularz_obj=document.getElementById("stawkaVAT");
var t_name = formularz_obj.value;
var blad = document.getElementById("vat_blad");

 

 var objRegExp  = /^[0-9]*$/
  
if (t_name === "") 
    {   
		vat = false;
        blad.innerHTML = "Podaj stawkę VAT"; 
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
		obliczBrutto(); 
        return false; 
    }
else if (t_name.length > 2)
    {
		vat = false;
        blad.innerHTML = "Zła liczba"; 
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
		obliczBrutto(); 
        return false; 
    }
else
    {
		vat = true;
        blad.classList.remove("invalid-feedback");
        formularz_obj.classList.remove("is-invalid");
        blad.classList.add("valid-feedback");
        formularz_obj.classList.add("is-valid");
        blad.innerHTML = "";
		obliczBrutto(); 
        return true;
    }     
}

function obliczBrutto(){

    if (vat && cena)
    {

		var netto = parseFloat(document.getElementById("cenaNetto").value);
		var vatt = parseFloat(document.getElementById("stawkaVAT").value);

		document.getElementById("cenaBrutto").value = (netto + (netto* (vatt/100))).toFixed(2);
	}
	else{

		document.getElementById("cenaBrutto").value = "";
	}
}




function sprawdzKategorie()
{
    var categoriesSelect = document.getElementById("kategoria");
    var selectedCategory = categoriesSelect.options[categoriesSelect.selectedIndex].value;
    var poleError = document.getElementById("category-error");
    if (selectedCategory === "0") {
        console.log("kategoria błąd");
        poleError.classList.add("invalid-feedback");
        categoriesSelect.classList.add("is-invalid");
        poleError.innerHTML = "Wybierz kategorię!";
        categoriesSelect.classList.remove("is-valid");
        return false;
    } else {
        poleError.classList.remove("invalid-feedback");
        categoriesSelect.classList.remove("is-invalid");
        poleError.classList.add("valid-feedback");
        categoriesSelect.classList.add("is-valid");

        poleError.innerHTML = "";
        return true;
    }
}



function checkboxy() {

	var formularz_obj=document.querySelectorAll('input[type="checkbox"]:checked').length;
	var blad = document.getElementById("towar_blad");
	
    if(formularz_obj < 2)
    { 	
		console.log("Niezaznaczone opcje");
        blad.classList.remove("valid-feedback");
		blad.classList.add("invalid-feedback");
        blad.classList.add("options-error");
		blad.innerHTML = "Wybierz conajmniej dwie opcje"; 
        return false;
    }
    else
    {
		console.log("Zaznaczone opcja");
		blad.classList.remove("invalid-feedback");
        blad.classList.add("valid-feedback");
        blad.innerHTML = "";
        return true;
		
    }
}


function submitForm(event) {
    event.preventDefault();
	var name = sprawdzTowarName();
	var kod = sprawdzKodTowaru();
	var netto = sprawdzCeneNetto();
	var vat = sprawdzVAT();
	var opcje = checkboxy();
	var kategorie = sprawdzKategorie();
	
	
    if ( !name || !kod || !netto || !vat || !opcje || !sprawdzKategorie) {
		
		console.log("Nie uzupełniono czegoś");
        return false;
    }
    if(sprawdzNazwe()) {
		console.log("Gitówa");
		
		var confirmation = document.getElementById("confirmation");
		confirmation.style.display = "";
		        setTimeout(function(d){ confirmation.style.display = "none"; }, 5000);
		funkcjaAdd();
		wyczysc();
		return true;
    }
	else{
	bladPowtorzenia();
	}
   return true;
}

function sprawdzNazwe()
{
    if(document.getElementById("id").value !== "")
    {
        console.log("edited item");
        return true;
    }
    var formName = document.getElementById("nazwaTowaru");
    var tableWareNames = document.getElementsByName("tableWareName");
    for (var i = 0; i<tableWareNames.length; i++)
    {
        if(tableWareNames[i].innerHTML === formName.value){
            return false;
        }
    }
    return true;
}

function bladPowtorzenia(){
    var duplication = document.getElementById("duplication-error");
    duplication.style.display = "";
    setTimeout(function(d){
        duplication.style.display = "none";
    }, 5000);
    console.log("duplikat error");
}


function wyczysc()
{
    vat = false;
    price = false;
    var name = document.getElementById("nazwaTowaru");
    name.value = "";
    name.classList.remove("is-valid");
    var code = document.getElementById("kodTowaru");
    code.value = "";
    code.classList.remove("is-valid");
    var nettoPrice = document.getElementById("cenaNetto");
    nettoPrice.value = "";
    nettoPrice.classList.remove("is-valid");
    var bruttoPrice = document.getElementById("cenaBrutto");
    bruttoPrice.value = "";
    bruttoPrice.classList.remove("is-valid");
    var vatElem = document.getElementById("stawkaVAT");
    vatElem.value = "";
    vatElem.classList.remove("is-valid");
    var checkedBox = document.querySelectorAll('input[type="checkbox"]:checked');
    for(var i = 0; i < checkedBox.length;i++)
    {
        checkedBox[i].checked = false;
    }
    var categories = document.getElementById('kategoria');
    categories.value = 0;
    document.getElementById('kategoria').classList.remove("is-valid");
    document.getElementById("ocena3").checked = true;
    document.getElementById("id").value = "";
}





function wypelnijFormluarz(values) {
    vat = true;
    price = true;
    var id = document.getElementById('id');
    id.value = values[0];
    var name = document.getElementById("nazwaTowaru");
    name.value = values[1];
    var code = document.getElementById("kodTowaru");
    code.value = values[2];
    var nettoPrice = document.getElementById("cenaNetto");
    nettoPrice.value = values[3];
    var bruttoPrice = document.getElementById("cenaBrutto");
    bruttoPrice.value = values[5];
    var vatElem = document.getElementById("stawkaVAT");
    vatElem.value = values[4];
    var categories = document.getElementById('kategoria');
	console.log(categories.value);
    categories.value = values[6];
    var checkedBox = document.getElementsByName('opcja');
    for(var i = 0; i < checkedBox.length; i++)
    {
		console.log("checkbox");
        checkedBox[i].checked = values[7].includes(checkedBox[i].value);
    }
    var rates = document.getElementsByName("Ocena");
    for(var i = 0; i < rates.length; i++)
    {
        rates[i].checked = values[8].includes(rates[i].value);
    }
    var imageElem = document.getElementById("Image");
    imageElem.value = values[9];
}


$(function() {	  
//usuwanie
	$('#myTable').delegate('button.remove', 'click', function () {
	console.log("chuj");
	var t = $('table');
	$(this).closest('tr').remove();
	t.trigger('update');
	return false;
	});
	
//edycja

	$('#myTable').delegate('button.edit', 'click', function () {
		var tds = $(this).closest('tr').children();
		console.log("edycja");
		var values = [];
		for (var i=0; i < 10; i++)
		{
			values.push(tds[i].innerHTML);
		}
		
		wypelnijFormluarz(values);
		console.log("edycj");
	});


	$('#myTable').delegate('button.add', 'click', function () {
       console.log("add");
       var tds = $(this).closest('tr').children();

       var rowWareName = tds[1].innerHTML;
       var rowPrice = tds[5].innerHTML;
       var items = localStorage.getItem("items") === null ? [] : JSON.parse(localStorage.getItem("items"));
       var item = {
           "wareName" : rowWareName,
           "warePrice" : rowPrice
       };
       //check if item is there
       items.push(item);
       localStorage.setItem("items", JSON.stringify(items));

        showCardAddConfirmation();
    });

    function showCardAddConfirmation() {
        var confirmation = document.getElementById("card-add-info");
        confirmation.style.display = "";
        setTimeout(function(d){
            confirmation.style.display = "none";
        }, 5000);
        console.log("dodano do koszyka");
    }
	
	
});



function getNextId() {
    id++;
    return id;
}



function funkcjaAdd(){
		
	var optionsElem = document.querySelectorAll('input[type="checkbox"]:checked');
	var options = "";
	for(i = 0;  i  < optionsElem.length; i++)
	{
		options += optionsElem[i].value;
		options += ", ";
	}

	options = options.slice(0, -1);
	var row = '';
	
	
	if(document.getElementById('id').value !== "")
    {
		var rowFromTable;
		var currentId = document.getElementById('id').value;
		console.log("AAAAAAAAA");
		var tableIds = document.getElementsByName("tableId");
		for (var i = 0; i<tableIds.length; i++)
		{
			if(tableIds[i].innerHTML === currentId){
				rowFromTable = tableIds[i];
			}
		}
		console.log("przed");
		rowFromTable.closest('tr').remove();
		        var t = $('table');
        t.trigger('update');
		console.log("po");
		var row = '<tr><td name="tableId">' + rowFromTable.innerHTML +'</td><td name = "tableWareName">' 
				+ document.getElementById("nazwaTowaru").value + '</td><td>' + document.getElementById("kodTowaru").value
				+ '</td><td>' + document.getElementById("cenaNetto").value + '</td><td>' + document.getElementById("stawkaVAT").value
				+ '</td><td>' + document.getElementById("cenaBrutto").value + '</td><td>' + document.getElementById('kategoria').value 
				+ '</td><td>'+ options +'</td><td> ' + $('input[name=Ocena]:checked').val() +
				'</td><td>image</td><td><button type="button" class="remove" title="Usuń przedmiot">Usuń</button></td><td>' +
					'<button type="button" class="edit" title="Edycja">Edytuj</button></td>' +
					'<td><button type = "button" class="add" title="Dodaj do koszyka">Dodaj</button></td></tr>';

	}
	else {
		var currentId = document.getElementById('id').value;
		console.log("aaaaaaaaa");
		var idToTable = getNextId();
		var row = '<tr><td name="tableId">' + idToTable +'</td><td name = "tableWareName">' 
				+ document.getElementById("nazwaTowaru").value + '</td><td>' + document.getElementById("kodTowaru").value
				+ '</td><td>' + document.getElementById("cenaNetto").value + '</td><td>' + document.getElementById("stawkaVAT").value
				+ '</td><td>' + document.getElementById("cenaBrutto").value + '</td><td>' + document.getElementById('kategoria').value 
				+ '</td><td>'+ options +'</td><td> ' + $('input[name=Ocena]:checked').val() +
				'</td><td>image</td><td><button type="button" class="remove" title="Usuń przedmiot">Usuń</button></td><td>' +
					'<button type="button" class="edit" title="Edycja">Edytuj</button></td>' +
					'<td><button type = "button" class="add" title="Dodaj do koszyka">Dodaj</button></td></tr>';

		}
	
	$row = $(row),
	// resort table using the current sort; set to false to prevent resort, otherwise
	// any other value in resort will automatically trigger the table resort.
	resort = true;
	$('#myTable')
	  .find('tbody').append($row)
	  .trigger('addRows', [$row, resort]);
	return false;

}

function sortowanie()
{
    var sorting = document.getElementById("sort");
    var selectedSorting = sorting.options[sorting.selectedIndex].value;
    if(selectedSorting === "Cena_min"){
        $("#myTable").trigger("sorton", [ [[3,0]] ]);
    }
    else if (selectedSorting === "Cena_max"){
        $("#myTable").trigger("sorton", [ [[3,1]] ]);
    }
    else if (selectedSorting === "Ocena_min"){
        $("#myTable").trigger("sorton", [ [[8,0]] ]);
    }
    else if (selectedSorting === "Ocena_max"){
        $("#myTable").trigger("sorton", [ [[8,1]] ]);
    }
    else if (selectedSorting === "Nazwa_A"){
        $("#myTable").trigger("sorton", [ [[1,0]] ]);
    }
    else if (selectedSorting === "Nazwa_Z"){
        $("#myTable").trigger("sorton", [ [[1,1]] ]);
    }
    else{
		console.log("Błąd sortowania");
    }
}



function  koszyk() {
    var items =  JSON.parse(localStorage.getItem("items"));
    if (items === null)
    {
        return false;
    }
    for (var i = 0; i < items.length; i++)
    {
        var row = '<tr><td>' + items[i].wareName + '</td>' +
            '<td name="warePrice">' + items[i].warePrice + '</td>' +
            '<td name="productQuantity"> <input onchange="przelicz()"  type="number" min="1" value="1" ' +
            'style="max-width:40px"></tdname>' +
            '</tr>';

    var $row = $(row);
    // resort table using the current sort; set to false to prevent resort, otherwise
    // any other value in resort will automatically trigger the table resort.
    var resort = true;
    $('#cardTable')
        .find('tbody').append($row)
        .trigger('addRows', [$row, resort]);
    }
    przelicz();
}

function przelicz() {
    var sum = 0;
    var rows = $("#cardTable").find("tr:gt(0)");
    for (var i = 0; i < rows.length; i++)
    {
        sum = sum + (rows[i].children[1].innerHTML * rows[i].children[2].children[0].value);
    }
    sum = sum +  parseFloat(document.getElementById("delivery").value);
    document.getElementById("totalPrice").innerHTML = sum;
}



function zamow() {
    //add dialog
    $('#cardTable')
        .find('tbody').empty();
    localStorage.clear();

    document.getElementById("totalPrice").innerHTML = 0;
}

function zamknijKoszyk() {
    $('#cardTable')
        .find('tbody').empty();
    localStorage.clear();
    document.getElementById("totalPrice").innerHTML = 0;
}
