import re
import json
in_file = "header.hcaml"
tokens_file = "header.tokens.json"
out_file = "header.html"

f = open(in_file, "r")

# print(f.read())

source_code = f.read()

def tokenizer(input):

    # Current position

    _tokens = []
    _current = 0
    while _current < len(input):
        _char = input[_current]

        # CAPTURE PARANS #
        if (_char == "[" or _char == "]"):
            _tokens.append({ "type": "PAREN", "value": _char})
            _current += 1
            continue

        # CAPTURE QUOATS #
        if (_char == "\"" or _char == "'"):
            _tokens.append({ "type": "QUOAT", "value": _char})
            _current += 1
            continue

        # IGNORE SPACES #
        SPACE = " "
        if (re.search(SPACE, _char)):
            _value = ""
            while (re.search(SPACE, input[_current])):
                _value = _value + _char
                _current  = _current + 1 

            continue

        # CAPTURE WORDS #
        LETTERS = "[a-z]|[A-Z]|[0-9]"
        if (re.search(LETTERS, _char)):
            _value = ""
            count = _current
            while (re.search(LETTERS, input[_current])):
                _value = _value + input[_current]
                _current = _current + 1 
                count 

            _tokens.append({"type": "WORD", "value": _value})
            continue
        
        _current += 1
    return _tokens

tokens = tokenizer(source_code)

with open(tokens_file, "w") as fout:
    json.dump(tokens, fout)
# f.write(tokens)
# f.close()

print(tokens)
        



