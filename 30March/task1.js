// SLICE WILL CREATE A NEW ARRAY

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
console.log(citrus)

let gamil="viveksatram120@gmail.com"
let shortmail=gamil.slice(0, gamil.indexOf("@"))
console.log(shortmail)

// Substring

let FullName="Satram Vivek"
let name=FullName.substring(0,4)
console.log(name)
 
// substrac
let card = "1234567812345678";
let last4 = card.substr(-4);
console.log( last4);

// replace()
let Place="i am going to banglore,i am going to banglore";
let change=Place.replace("banglore","hyderbad")
console.log(change)

let sport="i like too play cricket";
let changee=sport.replace("cricket", "Volleyball")
console.log(changee)

// replaceAll()
let man="I am Superman. My father is also a Superman"
let bat=man.replaceAll( "Superman"," batman")
console.log(bat)

// 6. toUpperCase()
let Surname="Satram Vivek"
let Caps=Surname.toUpperCase(Surname)
console.log(Caps)

// Lowercase()
let Realname="Element"
let lower=Realname.toLocaleLowerCase(Realname)
console.log(lower)

// trim()
let namee= "    i was name is vivek"
let pername=namee.trim()
console.log(pername)

//  Trimst()
let colour="       im black"
let col=colour.trimStart()
console.log(col)
 
// trimend()
let num= " i am fine    "
let numm= num.trimEnd()
console.log(numm)
// 12. padStart()

let invoice = "45";
console.log(invoice.padStart(5, "0")); // 00045

let ni="85"
console.log(ni.padStart(7,"0"));
// 13. padEnd()
let na = "Vivek";
console.log(na.padEnd(10, "*"));
// 14. charAt()

let nnnn="vivek"
console.log(nnnn.charAt(0))

// 15. split()

let data = "apple,banana,mango";
let fruitss = data.split(",");
console.log(fruitss);


let firstName = "  VIVEK ";
let lastName = "satram";
let email = "VIVEK123@GMAIL.COM";
let message = "He said \"Welcome to our site\"";

// 1. Trim whitespace
firstName = firstName.trim();

// 2. Convert case
firstName = firstName.toLowerCase();
lastName = lastName.toLowerCase();

// 3. Concatenation (Full Name)
let fullName = firstName + " " + lastName;

// 4. Length check (password example)
let password = "vivek@123";
console.log("Password Length:", password.length);

// 5. Escape characters
console.log("Message:", message);

// 6. Breaking long string
let info = "Welcome " + fullName +
           " to our platform. Enjoy learning JavaScript!";
console.log(info);

// 7. Find substring
console.log("Is Gmail:", email.toLowerCase().includes("@gmail"));

// 8. String search
console.log("Position of 'JavaScript':", info.indexOf("JavaScript"));

// 9. Replace text
let status = "Payment failed";
status = status.replace("failed", "successful");
console.log("Status:", status);

// 10. Access character
console.log("First letter:", fullName[0]);

// 11. String comparison
let loginEmail = "vivek123@gmail.com";
console.log("Login Match:", email.toLowerCase() === loginEmail);

// 12. String as object
let strObj = new String("hello");
console.log("Type:", typeof strObj);
