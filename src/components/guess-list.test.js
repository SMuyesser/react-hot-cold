import React from 'react';
import {shallow} from 'enzyme';

import GuessList from './guess-list.js';

describe('<GuessList/>', () => {

	it('Renders without crashing', () => {
		const seedGuesses = [];
		for (let i=0; i<10; i++) {
			seedGuesses.push(`Guess ${i}`)
		}
		shallow(<GuessList guesses={seedGuesses} />);
	});

    it('Renders a list of guesses', () => {
        const values = [11, 4, 18];
        const wrapper = shallow(<GuessList guesses={values} />);
        const items = wrapper.find('li');
        expect(items.length).toEqual(values.length);
        values.forEach((value, index) => {
            expect(items.at(index).text()).toEqual(value.toString());
        });
    });

});