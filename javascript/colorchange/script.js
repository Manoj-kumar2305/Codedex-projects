
let stone = document.getElementById('stone');
let randomNumber = Math.floor(Math.random() * 9 + 1);

switch (randomNumber) {
  case 1:
    stone.style.backgroundColor = 'red';
    break;
  case 2:
    stone.style.backgroundColor = 'orange';
    break;
  case 3:
    stone.style.backgroundColor = 'yellow';
    break;
  case 4:
    stone.style.backgroundColor = 'green';
    break;
  case 5:
    stone.style.backgroundColor = 'blue';
    break;
  case 6:
    stone.style.backgroundColor = '#4169e1';
    break;
  case 7:
    stone.style.backgroundColor = '#00008b';
    break;
  case 8:
    stone.style.backgroundColor = 'purple';
    break;
  case 9:
    stone.style.backgroundColor = 'black';
    break;
  default:
    alert('not a valid random number!!');
}

