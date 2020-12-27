module.exports = function parser(ast) {
  code = "";
  function walk(node) {
    if (!node.value && node.children.length === 1) {
      if (node.children[0].type === "String" && node.children[0].value ) {
        code += node.children[0].value
      }
    }

    if (node.type === "Element") {
      code += `<${node.value}>`;

      if (node.children.length <= 1) {

        code += node.children[0].value;

      } else {
        let current = 0;
        while (current < node.children.length) {
          code = walk(node.children[current++]);
        }
      }

      code += `</${node.value || ""}>`;
    }
    return code;
  }

  let current = 0;
  while (current < ast.body.length) {
    code = walk(ast.body[current++]);
    //current++;
  }
  return code;
};
