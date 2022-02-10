// const cipher = (letter) => {

//     let a
//     let b
//     let c
//     let d
//     let e
//     let f
//     let g
//     let h
//     let i
//     let j
//     let k
//     let l
//     let m
//     let n
//     let o
//     let p
//     let q
//     let r
//     let s
//     let t
//     let u
//     let v
//     let w
//     let x
//     let y
//     let z

//     switch(letter){
//         case 'a': 10
//         break;
//         case 'b': 5
//         break;
//         case 'c': 6
//         break;
//         case 'd': 7
//         break;
//         case 'e': 8
//         break;
//         case 'f': 9
//         break;
//         case 'g': 0
//         break;
//         case 'h': 55
//         break;
//         case 'i': 12
//         break;
//         case 'j': 123
//         break;
//         case 'k': 543
//         break;
//         case 'l': 67
//         break;
//         case 'm': 68
//         break;
//         case 'n': 69
//         break;
//         case 'o': 754
//         break;
//         case 'p': 678
//         break;
//         case 'q': 234
//         break;
//         case 'r': 753
//         break;
//         case 's': 2345
//         break;
//         case 't': 222
//         break;
//         case 'u': 22
//         break;
//         case 'v': 666
//         break;
//         case 'w': 777
//         break;
//         case 'x': 789
//         break;
//         case 'y': 765
//         break;
//         case 'z': 900
//         break;
//         default:
//             return "idk"
//     }

//     return letter
// }

// cipher('a')

const encode = (str) => {
  let noSpace = str.replaceAll(" ", "")
  let messageSplit = noSpace.toLowerCase(noSpace.split(""))
  console.log(messageSplit);
  let encoded = [];
  for (let i = 0; i < messageSplit.length; i++) {
    switch (messageSplit[i]) {
      case "a":
        encoded.push(10);
        break;
      case "b":
        encoded.push(5);
        break;
      case "c":
        encoded.push(6);
        break;
      case "d":
        encoded.push(7);
        break;
      case "e":
        encoded.push(8);
        break;
      case "f":
        encoded.push(9);
        break;
      case "g":
        encoded.push(0);
        break;
      case "h":
        encoded.push(55);
        break;
      case "i":
        encoded.push(12);
        break;
      case "j":
        encoded.push(123);
        break;
      case "k":
        encoded.push(543);
        break;
      case "l":
        encoded.push(67);
        break;
      case "m":
        encoded.push(68);
        break;
      case "n":
        encoded.push(69);
        break;
      case "o":
        encoded.push(754);
        break;
      case "p":
        encoded.push(678);
        break;
      case "q":
        encoded.push(234);
        break;
      case "r":
        encoded.push(753);
        break;
      case "s":
        encoded.push(2345);
        break;
      case "t":
        encoded.push(222);
        break;
      case "u":
        encoded.push(22);
        break;
      case "v":
        encoded.push(666);
        break;
      case "w":
        encoded.push(777);
        break;
      case "x":
        encoded.push(789);
        break;
      case "y":
        encoded.push(765);
        break;
      case "z":
        encoded.push(900);
        break;
      default:
        return "idk";
    }
  }
  let encrypted = encoded
  console.log(encrypted);
  return console.log(String(encoded).replaceAll(',', ''));
};

encode("I love cryptography");

// const asdf = (letter) => {
//     switch (letter) {
//         case 'a':
//             10
//             break;

//         default:
//             break;
//     }
// }
