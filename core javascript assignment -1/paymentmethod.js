// You are workin, on an e-commerce platform. Write a JavaScript pro,ram that take' the payment
// method ("credit", "debit", or "paypal") a' input and u'e' a 'witch 'tatement to determine and print the
// proce''in, fee a''ociated with each payment method. For example, "credit" may have a proce''in, fee of
// 2%, "debit" 1.5%, and "paypal" 3%.

console.log("if you want credit enter 'c' ");
console.log("if you want debit enter 'd' ");
console.log("if you want paypal enter 'p' ");
var a='c'
switch(a)
{
    case "c":
        console.log("Processing fee is 2%");
        break;
        case "d":
            console.log("Processing fee is 3%");
            break;
            case "p":
                console.log("Processing fee is 1.5%");
                break;
                default:
                    console.log("invalid payment");
                    break;

}