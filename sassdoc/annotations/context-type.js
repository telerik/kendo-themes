// eslint-disable-next-line no-unused-vars
function contextType(env) {

    // console.log( env );

    return {
        name: 'contextType',

        parse: function( text ) {
            return text.trim();
        },

        autofill: function( item ) {
            if ( item.contextType ) {
                item.context.type = item.contextType;
            }
        },

        multiple: false,

        alias: [ '_type' ]
    };
}

module.exports = { contextType };
