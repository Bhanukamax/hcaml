module.exports = function parser(ast) {
  let current = 0;
  let node = {};
  let code = "";
  function walk() {
    node = ast.body[current];
    if (node.type === "Element") {
      code += `<${node.value}>`;

      if (node.children.length === 1) {
        code += node.children[0].value;
      }
      code += `</${node.value}>`;
    }
    current++;
    while(current < ast.body.length) {
      walk()
    }
  }

  walk()
  return code;
};
