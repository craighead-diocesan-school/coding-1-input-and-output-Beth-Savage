// ####################################
// ######## ----- Welcome ----- #######
// ####################################

function welcome() {
  let name = prompt('What is your name')

  alert('We want to know if you like programming!')

  let answer = prompt('Do you like programming ' + name + '?')

  alert('Great, you said ' + answer + '!')
  alert("Let's learn some code today.")
}

function questionnaire() {
  // write the code for your questionnaire here
  let name = prompt('What is your name?')
  alert('Hello ' +name)
  let breakfast = prompt('What did you have for breakfast today?')
  alert('I like ' + breakfast + ' for breakfast!')
  let colour = prompt('What is your favourite colour?')
  alert('I like ' + colour + ' too!')
  let age = prompt('How old are you?')
  age = Number(age)
  age = (age + 1)
  alert('On your next birthday you will be ' + age)
}
