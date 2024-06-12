// ####################################
// #### ----- Non-Maori Mihi ----- ####
// ####################################

function nonMaoriMihi() {
  alert('Non-Māori Mihi')
  alert('This program will help you build a basic mihi.')
  alert("First, you'll be asked a series of questions, then your mihi will be ready.")

  
  let name = prompt('What is your name?')
  let mountian = prompt('What is your favourite mountian?')
  let river = prompt('What is your favourite river?')
  let home = prompt('What town do you live in?')
  // more questions and answers here

  alert('Your mihi:')
  // more outputs here
  alert('Tēnā koutou,')
  alert('Kei te mihi au ki a ' + mountian + ',')
  alert('Kei te mihi au ki a ' + river + ',')
  alert('Nō ' + home + ' au,')
  alert('Ko ' + name + ' tōku ingoa,')
  alert('Tēnā koutou,')
  alert('Tēnā koutou,')
  alert('Tēnā koutou, katoa.')
}