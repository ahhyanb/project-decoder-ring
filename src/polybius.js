// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  function polybius(input, encode = true) {
    const polybiusSquare = [
      ["A", "B", "C", "D", "E"],
      ["F", "G", "H", "I/J", "K"],
      ["L", "M", "N", "O", "P"],
      ["Q", "R", "S", "T", "U"],
      ["V", "W", "X", "Y", "Z"],
    ];

    function findCoordinates(letter) {
      for (let column = 0; column < polybiusSquare[0].length; column++) {
        for (let row = 0; row < polybiusSquare.length; row++) {
          if (polybiusSquare[row][column].includes(letter)) {
            return [(column + 1).toString(), (row + 1).toString()];
          }
        }
      }
      return null;
    }

    let result = "";

    if (encode) {
      for (let i = 0; i < input.length; i++) {
        let character = input[i].toUpperCase();
        let encodedCharacter = "";

        if (character === " ") {
          result += " ";
        } else {
          if (character === "I" || character === "J") {
            encodedCharacter = "42";
          } else {
            const coordinates = findCoordinates(character);
            if (coordinates) {
              encodedCharacter = coordinates.join("");
            }
          }
        }
        result += encodedCharacter;
      }
    } else {
      const findLetters = (coordinates) => {
        const [column, row] = coordinates;
        return polybiusSquare[column - 1][row -1];
      };
      const pairs = [];
      for (let i = 0; i < input.length; i += 2){
        const pair = input.slice(i, i + 2);
        pairs.push(pair);
      }
    }

    return result;
  }



  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
