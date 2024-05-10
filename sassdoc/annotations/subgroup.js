const reqRegEx = /\s*(?:{(.*)})?\s*(?:\[([^\]]*)])?\s*-?\s*([\S\s]*)\s*$/;

function subGroup() {
    return {
        name: 'subGroup',

        parse(text) {
            let match = reqRegEx.exec(text.trim());

            let obj = {};

            if (match[1]) {
                obj.name = match[1];
            }

            if (match[2]) {
                obj.value = match[2]
                    .split(/\s*,\s*|\s*\n\s*/)
                    .map(v => v.trim());
            }

            if (match[3]) {
                obj.description = match[3];
            }

            return obj;
        },

        alias: [ 'subgroup' ],

        allowedOn: [ 'variable' ],
    };
}

// Example
/// @subgroup {name} [value1, value2, value3] - description

module.exports = { subGroup };
