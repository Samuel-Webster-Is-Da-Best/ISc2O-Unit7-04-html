document.getElementById('button').addEventListener('click', disc)

function disc () {
  // read input
  const age = parseInt(document.getElementById('inp').value)
  const day = document.getElementById('inp2').value
  // determine if they are elegible
  if (day === 'thursday' || day === 'tuesday') {
    document.getElementById('ans').innerHTML = 'You are elegible for student pricing!'
  } else if (age > 12 && age < 21) {
    document.getElementById('ans').innerHTML = 'You are elegible for student pricing!'
  } else {
    document.getElementById('ans').innerHTML = 'You must pay normal prices'
  }
}
