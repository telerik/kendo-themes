function role() {
    return {
        name: 'role',

        parse(text) {
            return text.trim();
        },

        allowedOn: [ 'variable' ],
    };
}

// Example
/// @role default

module.exports = { role };
