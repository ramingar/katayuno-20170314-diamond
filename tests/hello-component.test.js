/**
 * Created by rafael on 13/03/17.
 */
import test from 'tape';

// Component to test
import helloComponent from '../web/assets/src/js/hello.component';

test('HelloComponent.sayHello() behaviour.', (assert) => {
    const expected = 'Hello World!';

    const hello = helloComponent();
    const actual = hello.sayHello();

    assert.equal(actual, expected,
        'HelloComponent.sayHello() must return *Hello World!*');

    assert.end();
});