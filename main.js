function Calculate()
{
    let lb=document.getElementById("lower_bond").value;
    let ub=document.getElementById("upper_bond").value;
    if(parseInt(lb)>parseInt(ub) || isNaN(parseInt(lb)) || isNaN(parseInt(ub)))
    {
        alert("Please! Enter valid bounds");
        return;
    }
    let result=Math.floor(Math.random()*(parseInt(ub)-parseInt(lb)+1)+parseInt(lb));
    document.getElementById("answer").innerHTML= result;
}