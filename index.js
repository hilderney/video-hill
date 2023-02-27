const readline = require('readline-sync')
function start() {
  const content = {}

  content.searchTerm = askAndReturnSearchTerm()
  content.prefix = askAndReturnPrefix()

  function askAndReturnSearchTerm() {
    return readline.question('Type a Manhua Title: ')
  }

  function askAndReturnPrefix() {
    const prefixes = ['Story', 'Sinopsis', 'Curiosities', 'Characters']
    const selectedPrefixIndex =  readline.keyInSelect(prefixes, 'Escolha uma opção: ')
    const selectedPrefixText = prefixes[selectedPrefixIndex]

    return selectedPrefixText
  }

  console.log(content)
}

start()