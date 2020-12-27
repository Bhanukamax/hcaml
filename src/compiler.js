const fs = require("fs").promises;
const lexer = require("./lexer");
const parser = require("./parser");

async function main() {
  const code = (await fs.readFile("header.hcaml")).toString();

  lexer.reset(code);
  let token;
  let tokens = [];

  while (true) {
    token = lexer.next();
    console.log("token>>>", token);
    if (token) {
      console.log("got token", token);
      tokens.push({
        type: token.type,
        value: token.value,
      });
    } else {
      break;
    }
  }

  console.log(code);
  const filteredTokens = tokens.filter(
    (item) => item.type !== "WS" && item.type !== "NL"
  );
  console.log("all tokens", JSON.stringify(tokens));

  const ast = parser(filteredTokens);

  console.log("ast >>>", filteredTokens);
    

  fs.writeFile("header.tokens.json", JSON.stringify(filteredTokens));
}

main().catch((error) => console.log(error.stack));
