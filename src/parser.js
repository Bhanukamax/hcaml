module.exports = function(tokens) {
    //return tokens;
    const ast = [];
    current = 0;
    while (current < tokens.length) {

        let token = tokens[current];
        node = {}

        if (token.type === 'TAG') {
            node = {
                type: 'ELEMENT',
                name: token.value,
                children: []
            }

            current++;
            token = tokens[current];

            if (token.type == "STRING") {
                node.children.push({
                    type: 'TEXT',
                    value: token.value
                })
            }
            

            ast.push(node);
            current++;
            continue;
        }

        

        

        current++;
    }
    return {
        type: 'Document',
        children: ast
    };
}
