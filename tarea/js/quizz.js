const dog = confirm("Los perros ladran");
const cat = confirm("Los gatos maúllan");
const horse = confirm("Los caballos relinchan");


dog && cat && horse && alert("Respondió correctamente ") || (!dog || !cat || !horse) && alert("No respondió correctamente");