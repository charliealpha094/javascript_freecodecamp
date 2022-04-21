// Done by Carlos Amaral (2021/05/25)

// Another way of solving the counting cards challenge

var count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count ++;
      break;
    case 10:
    case "J":
    case "Q":
    case "k":
    case "A":
      count --;
      break;
  }
  if (count <= 0) {
    return count + " Hold";
  }
  else {
    return count + " Bet";
  }
}
