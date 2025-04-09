const pali =document.getElementById("palindrome")


function reversestring(str){
    return str.split("").reverse().join("")
}








function check()
{
    const value =pali.value
    const reverse=reversestring(value)

    if(value == reverse)
    {
        alert("P A L I N D R O M E")

    }else{
        alert("Not today")
    }

    input.value=""
}