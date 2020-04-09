let num = 50;

if (num <= 49) {
    console.log("No");
} else if (num > 100) {
    console.log("More enough")
} else {
    console.log("Yes");
}

(num == 50) ? console.log("Yes") : console.log("No");

switch (num) {
    case num < 49:
        console.log("No");
        break;
    case num < 100:
        console.log("More enough");
        break;
    case 50:
        console.log("Yes");
        break;
    default:
        console.log("It is Error!");
        break;
}

// while (num < 55) {
//     console.log(num);
//     num++;
// }

do {
    console.log(num);
    num++;
}
while (num < 55);

for (let i = 1; i < 8; i++) {
    if (i == 6) {
        continue;
    }
    console.log(i);
}