main();
function main()
{
    var userInput = (prompt("Enter your letter Grade of A,B,C,D or F:  "));
    switch (userInput)
    {
        case ("A") :
            alert("A is 90-100: ");
            break;
        case ("B"):
            alert("B is 80-89: ");
            break;
        case ("C"):
            alert("C is 70-79: ");
            break;
        case ("D"):
           alert("D is 60-69: ");
            break;
        case ("F"):
            alert("F is below 60: ");
            break;
        default:
            alert("Error!!!!");
            break;
    }
}