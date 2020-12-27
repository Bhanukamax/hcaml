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
    (item) => item.type !== "WHITE_SPACE" && item.type !== "LINE_BRAKE"
  );

  try {

  const ast = parser(filteredTokens);
  console.log("all tokens", tokens);
  console.log("filtered tokens", filteredTokens);

  console.log("ast >>>", ast);
    

  fs.writeFile("header.tokens.json", JSON.stringify(filteredTokens, null, 2));
  fs.writeFile("header.ast.json", JSON.stringify(ast, null, 2));
  } catch(e) {
    console.log('parser ERROR >>>', e.stack);
  }
}

main().catch((error) => console.log(error.stack));
