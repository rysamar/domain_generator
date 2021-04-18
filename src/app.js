function domainGenerator() {
  let pronoun = ["my", "your", "her", "his", "our"];
  let adj = ["awesome", "amazing", "annoying", "incredible"];
  let noun = ["lollipop", "mountain", "sea", "tiger"];
  let domains = [".es", ".pt", ".ve", ".co", ".ru"];
  let allTheCombinations = [];
  let result = "";

  for (let indexPronoun = 0; indexPronoun < pronoun.length; indexPronoun++) {
    for (let indexAdj = 0; indexAdj < adj.length; indexAdj++) {
      for (let indexNoun = 0; indexNoun < noun.length; indexNoun++) {
        for (
          let indexDomains = 0;
          indexDomains < domains.length;
          indexDomains++
        ) {
          allTheCombinations.push(
            result.concat(
              pronoun[indexPronoun],
              adj[indexAdj],
              noun[indexNoun],
              domains[indexDomains]
            )
          );
        }
      }
    }
  }
  return allTheCombinations;
}

function documentInsertion(array) {
  for (let indexArray = 0; indexArray < array.length; indexArray++) {
    let containerList = document.querySelector("#domainGeneration");
    let listElement = document.createElement("li");
    let textList = document.createTextNode(array[indexArray]);
    listElement.appendChild(textList);
    containerList.appendChild(listElement);
  }
}

documentInsertion(domainGenerator());
