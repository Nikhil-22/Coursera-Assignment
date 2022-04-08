/* updates displayed interest rate based on slider position */
function updateRate()
{
    var rateval = document.getElementById("rate").value + "%";
    document.getElementById("rate_val").innerText=rateval;
}

function compute()
{
    var principal = document.getElementById("principal").value;
    /* validation for pricipal value, user must input positive number */
    if (principal <= 0){
      alert("Enter a positive number");
      document.getElementById("principal").focus();
      return false;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    /* fetches current year and adds the number of years that the user inputs */
    var year = new Date().getFullYear() + parseInt(years);

    output = "If you deposit <mark>" + principal + "</mark>,<br>at an interest rate of <mark>";
    output += rate + "</mark>.<br>You will receive an amount of <mark>";
    output += interest + "</mark>,<br>in the year <mark>" + year + "</mark>.<br>";
    /* displays the output text after calculations are computed */
    document.getElementById("result").innerHTML=output


}