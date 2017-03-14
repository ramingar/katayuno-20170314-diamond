/**
 * Created by rafael on 13/03/17.
 */
import test from 'tape';

// Component to test
import diamondComponent from '../web/assets/src/js/diamond.component';

test('----- DiamondComponent returned value when you pass in "A".', (assert) => {
    const message = 'DiamondComponent returned value must be "A"';
    const expected = 'A';

    const diamond = diamondComponent();
    const actual = diamond.render();

    assert.equal(actual, expected, message);

    assert.end();
});

test('----- DiamondComponent returned value when you pass in "B".', (assert) => {
    const message = 'DiamondComponent returned value must be " A\nB B\n A"';
    const expected = ' A\nB B\n A';

    const diamond = diamondComponent();
    const actual = diamond.render();

    assert.equal(actual, expected, message);

    assert.end();
});

test('----- DiamondComponent returned value when you pass in "C".', (assert) => {
    const message = 'DiamondComponent returned value must be "  A\n B B\nC   C\n  A"';
    const expected = '  A\n B B\nC   C\n  A';

    const diamond = diamondComponent();
    const actual = diamond.render();

    assert.equal(actual, expected, message);

    assert.end();
});
