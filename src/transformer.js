module.exports = function parser(ast) {
  code = "";
  function walk(node) {
    //node = ast.body[current];
    if (node.type === "Element") {
      code += `<${node.value}>`;

      if (node.children.length <= 1) {
        code += node.children[0].value;
      } else {
      }

    
      code += `</${node.value || ''}>`;
    }
    return code;
  }

  let current = 0;
  while(current < ast.body.length - 1) {
    code = walk(ast.body[current++]);
    //current++;
  }
  return code;
};
