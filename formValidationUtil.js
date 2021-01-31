

function petNameValidation(petName, minlength)
{
document.getElementById("petNameError").innerHTML = null;
var petNameLen = petName.value.length;
if (petNameLen < minlength)
{
document.getElementById("petNameError").innerHTML = "Error: The pet’s name is too short.";
return false;
}
return true;
}

function petTypeValidation(petType)
{
document.getElementById("petTypeError").innerHTML = null;
var petTypeValue = petType.value;
if (petTypeValue <= 0)
{
document.getElementById("petTypeError").innerHTML = "Error: You must select and option.";
return false;
}
return true;
}
function confirmValidation(confirm)
{
document.getElementById("confirmError").innerHTML = null;
var confirmChd = confirm.checked;
if (confirmChd == false)
{
document.getElementById("confirmError").innerHTML = "Error: You must confirm your pet’s information.";
return false;
}
return true;
}

export {petNameValidation, petTypeValidation, confirmValidation };