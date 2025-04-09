/*მომხმარებელს შემოატანინეთ თვის სახელი მაგ:("იანვარი" , "თებერვალი") , თქვენი მიზანია დაადგინოთ მომხმარებლის შემოტანილი თვე სეზონის რომელი პერიოდია (ზაფხული,ზამთარი,შემოდგომა,თუ გაზაფხული)*/

let month = prompt("enter a month:");

switch(month) {
    case "january":
    case "february":
    case "december":
        console.log("winter");
        break;
    case "march":
    case "april":
    case "may":
        console.log("spring");
        break;
    case "june":
    case "july":
    case "august":
        console.log("summer");
        break;
    case "september":
    case "october":
    case "november":
        console.log("autumn");
        break;
    default:
        console.log("enter an existing month");
}
