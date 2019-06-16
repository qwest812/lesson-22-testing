
QUnit.module("Calculate",function () {

    QUnit.test('sum', function (assert) {
        assert.equal(sum(2,5),7, "good sum");
    });


    QUnit.test('dif',function (assert) {
        assert.equal(dif(4,0),false,"good diff false")
    });
    QUnit.test('',function (assert) {
        assert.equal(dif(10,2),5,"good diff")
    });
    QUnit.test('mult',function (assert) {
        assert.equal(multiplication(4,3),12,"good mult")
    });
    QUnit.test('minus',function (assert) {
        assert.equal(minus(-3,-4),1,"good minus")
    });
});
