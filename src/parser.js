module.exports = function (tokens) {
  //return tokens;
  let current = 0;
  function walk() {
    let token = {};
    node = { children: [] };

    if (tokens[current]) token = tokens[current];


    if (token && token.type === "TAG") {
      node.name = "TAG";
      node.value = token && token.value;
      //node = {
        //...node,
        //name: "TAG",
        //value: token && token.value,
      //};

      current++;
     if (tokens[current]) token = tokens[current];
    }

    if (token && token.type === "STRING") {
      node.children.push({
        name: "STRING",
        value: token.value,
        children: [],
      });
      //current++;
     //if (tokens[current]) token = tokens[current];
    }

    //while (token.type === "LEFT_PAREN" || token.type == !"RIGHT_PAREN") {
      //node.children.push(walk());
      //current++;
      //if (tokens[current]) token = tokens[current];
    //}

    //current++;
    return node;
  }

  let ast = [];

  while (current < tokens.length) {
    console.log("current in while >>", current);
    ast.push(walk());
    current++;
    token = tokens[current];
  }
  return {
    type: "Document",
    children: ast,
  };
};
