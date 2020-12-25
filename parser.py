import re
in_file = "header.hcaml"
out_file = "header.html"

f = open(in_file, "r")

# print(f.read())

source_code = f.read()


def parser(input):

    # Current position

    _tokens = []
    _current = 0
    while _current < len(input):
        _char = input[_current]

        if (_char == "[" or _char == "]"):
            _tokens.append({ "type": "paren", "value": _char})
            _current += 1
            continue



        SPACE = " "
        if (re.search(SPACE, _char)):
            _value = ""
            while (re.search(SPACE, input[_current])):
                _value = _value + _char
                _current  = _current + 1 

            continue

        LETTERS = "[a-z]|[A-Z]|[0-9]"
        if (re.search(LETTERS, _char)):
            _value = ""
            count = _current
            while (re.search(LETTERS, input[_current])):
                _value = _value + input[_current]
                _current = _current + 1 
                count 

            _tokens.append({"type": "name", "value": _value})
            continue

        
        _current += 1
    return _tokens

token = parser(source_code)

print(token)
        



