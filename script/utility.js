function getElementById(id){
    const value = document.getElementById(id).innerText
    const convertValue = parseInt(value)
    return convertValue
}

function getInnerTextById(id){
    const value = document.getElementById(id).innerText
    const convertedValue = parseInt(value)
    return convertedValue
}
function setInnerTextByIDandValue(id,value)
{
    document.getElementById(id).innerText = value;
}

