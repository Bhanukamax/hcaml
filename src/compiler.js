#!/home/bm/.nvm/versions/node/v12.9.0/bin/node
const fs = require("fs").promises;
const lexer = require("./lexer");
const parser = require("./parser");
const transformer = require("./transformer");

async function main() {
  const fileName = process.argv[2]
  const code = (await fs.readFile(fileName)).toString();

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
  const code = transformer(ast);
    

  fs.writeFile(`${fileName}.json`, JSON.stringify(filteredTokens, null, 2));
  fs.writeFile(`${fileName}.ast.json`, JSON.stringify(ast, null, 2));
  fs.writeFile(`${fileName}.html`, code);
  } catch(e) {
    console.log('parser ERROR >>>', e.stack);
  }
  console.log('the args :: ', process.argv[2])
}

main().catch((error) => console.log(error.stack));
