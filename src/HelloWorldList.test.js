import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import HelloWorldList from './HelloWorldList';
import AddGreeter from './AddGreeter';
import HelloWorldFunctional from './HelloWorldFunctional';

describe(HelloWorldList, () => {
  const component = shallow(
    <HelloWorldList />
  );
  // Add the rest of our tests here

    it('renders and matches our snapshot', () => {
        const component = renderer.create(
            <HelloWorldList />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('contains an AddGreeter subcomponent', () => {
        expect(component.find(AddGreeter)).toHaveLength(1);
    });

    it('contains the same number of HelloWorldFunctional components as greetings', () => {
        const helloWorlds = component.find(HelloWorldFunctional).length;
        const greetings   = component.state('greetings').length;
        expect(helloWorlds).toEqual(greetings);
    });

    it('adds another greeting when the add greeting function is called', () => {
        const before = component.find(HelloWorldFunctional).length;
        component.instance().addGreeting('Sample');
        const after = component.find(HelloWorldFunctional).length;
        expect(after).toBeGreaterThan(before);
    });

    it('removes a greeting from the list when the remove greeting function is called', () => {
        const before   = component.find(HelloWorldFunctional).length;
        const removeMe = component.state('greetings')[0];
        component.instance().removeGreeting(removeMe);
        const after = component.find(HelloWorldFunctional).length;
        expect(after).toBeLessThan(before);
    });

});