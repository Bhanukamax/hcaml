function getString(stringWithQoutes) {
  return stringWithQoutes.substr(1, stringWithQoutes.length - 2);
}

module.exports = function parser(tokens) {
  let current = 0;
  //return tokens;

  function walk() {
    let token = tokens[current];
    let node = { children: [], attributes: {} };

    if (token.type === "TAG") {
      //return {
      node.type = "Element";
      node.value = token.value;
      //};
      token = tokens[++current];
    }

    if (token.type === "CLASS_NAME") {
        node.attributes.className = token.value

      token = tokens[++current];
    }

    if (token.type === "STRING") {
      node.children.push({
        type: "String",
        value: getString(token.value),
      });

      current++;

      return {
        type: node.type,
        value: node.value,
        attributes : node.attributes,
        children: node.children,
      };
    }

    if (token.type === "OPEN_PAREN") {
      token = tokens[++current];

      while (token.type !== "CLOSE_PAREN") {
        node.children.push(walk());
        token = tokens[current];
      }

      current++;

      return {
        type: node.type,
        value: node.value,
        attributes : node.attributes,
        children: node.children,
      };
    }

    throw new TypeError(token.type);
  }

  let ast = {
    type: "Program",
    body: [],
  };

  while (current < tokens.length) {
    ast.body.push(walk());
  }

  // At the end of our parser we'll return the AST.
  return ast;
};
