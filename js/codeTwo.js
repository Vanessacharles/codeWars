// Given a random number:
//
// C#: long;
// C++: unsigned long;
// You have to return the digits of this number within an array in reverse order.


function digitize(n) {
  return n.toString().split('').map((x) => parseInt(x)).reverse();
}
