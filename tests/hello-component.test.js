/**
 * Created by rafael on 13/03/17.
 */
/*

 - LETTER: 'D':

    A
   B B
  C   C
 D     D
  C   C
   B B
    A


 - spaces between letters in each row:

    A => 0 = 2*0 - 1 -> 0
    B => 1 = 2*1 - 1
    C => 3 = 2*2 - 1
    D => 5 = 2*3 - 1

 - spaces before the first letter in each row:

    A B C [D]
    3 2 1  0

    A => 3 = D - A
    B => 2 = D - B
    C => 1 = D - C
    D => 0 = D - D

 */

import test from 'tape';

// Component to test
import diamondComponent from '../web/assets/src/js/diamond.component';

test('----- DiamondComponent returned value when you pass in "A".', (assert) => {
    const message = 'Diamond returned value must be "A".';
    const expected = 'A';

    const diamond = diamondComponent('A');
    const actual = diamond.render();

    assert.equal(actual, expected, message);

    assert.end();
});

test('----- DiamondComponent returned value when you pass in "B".', (assert) => {
    const message = 'Diamond  returned value must be " A\nB B\n A".';
    const expected = ' A\nB B\n A';

    const diamond = diamondComponent('B');
    const actual = diamond.render();

    assert.equal(actual, expected, message);

    assert.end();
});

test('----- DiamondComponent returned value when you pass in "C".', (assert) => {
    const message = 'Diamond returned value must be "  A\n B B\nC   C\n  A".';
    const expected = '  A\n B B\nC   C\n B B\n  A';

    const diamond = diamondComponent('C');
    const actual = diamond.render();

    assert.equal(actual, expected, message);

    assert.end();
});

test('----- DiamondComponent row method when you pass in "D" to the method and a bigger or equal letter to the factory.', (assert) => {
    const message = 'Diamond\'s row method returned value must be "D     D".';
    const expected = 'D     D';

    const diamond = diamondComponent('D');
    const actual = diamond.row('D');

    assert.equal(actual, expected, message);

    assert.end();
});

test('----- DiamondComponent row method error control when you pass in "D" to the factory and "F" to the method.', (assert) => {
    const message = 'Argument for Diamond\'s row method can\'t be a letter bigger than letter passed to the factory. ' +
        'Row must be return "".';
    const expected = '';

    const diamond = diamondComponent('D');
    const actual = diamond.row('F');

    assert.equal(actual, expected, message);

    assert.end();
});


test('----- DiamondComponent leftSpaces method.', (assert) => {
    const message = 'When you pass in "A" to the method and "D" to the factory, ' +
        'the returned value must be "   ".';
    const expected = '   ';

    const diamond = diamondComponent('D');
    const actual = diamond.leftSpaces('A');

    assert.equal(actual, expected, message);

    assert.end();
});


test('----- DiamondComponent leftSpaces method when factory letter is smaller than letter passed in to the method.', (assert) => {
    const message = 'When you pass in to the factory an inferior letter than to the method' +
        'the returned value must be "".';
    const expected = '';

    const diamond = diamondComponent('D');
    const actual = diamond.leftSpaces('G');

    assert.equal(actual, expected, message);

    assert.end();
});
