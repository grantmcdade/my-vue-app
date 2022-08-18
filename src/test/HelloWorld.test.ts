import { fireEvent } from '@testing-library/dom';
import { render } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import HelloWorld from '../components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
    it('Prints the message that is provided', () => {
        const { getByText } = render(HelloWorld, {
            props: {
                msg: 'Test',
            },
        })

        expect(getByText('Test')).toBeDefined();
    });

    it('Increases the counter when the button is clicked', async () => {
        const { getByTestId } = render(HelloWorld, {
            props: {
                msg: 'Test',
            },
        })

        const button = getByTestId('increment-button')
        expect(button).toBeDefined();
        expect(button.textContent).toBe('count is 0')

        await fireEvent.click(button);
        expect(button.textContent).toBe('count is 1')

        await fireEvent.click(button);
        expect(button.textContent).toBe('count is 2')
    });
});