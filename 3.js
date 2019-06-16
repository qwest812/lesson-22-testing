QUnit.test( 'deepEqual failing test', function( assert ) {
    assert.deepEqual( {
        a: 'Albert',
        b: 'Berta',
        num: 123
    }, {
        a: 'Albert',
        b: 'Berta',
        num: '123' // Fails: the number `123` is not strictly equal to the string `'123'`.
    } );
} );