module.exports = function parser(ast) {
  code = "";
  function walk(node) {
    // if has only one child
    if (!node.value && node.children.length === 1) {
      // if it's a plain text
      if (node.children[0].type === "String" && node.children[0].value) {
        code += node.children[0].value;
      }
    }

    if (node.type === "Element") {
      code += `<${node.value}>`;

      // If element has only one childe which is a string
      if (node.children.length <= 1 && node.children[0].value) {
        code += node.children[0].value;
      } else if (
        /*
         *{
         *  "type": "Element",
         *  "value": "p",
         *  "children": [
         *    {
         *      "children": [
         *        {
         *          "type": "String",
         *          "value": "\"this will be undefined\""
         *        }
         *      ]
         *    }
         *  ]
         *}
         *
         */
        node.children.length <= 1 &&
        node.children[0] &&
        node.children[0].children.length <= 1 &&
        node.children[0].children[0].value &&
        node.children[0].children[0].type == "String"
      ) {
        code += node.children[0].children[0].value;
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


