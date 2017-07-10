import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import HelloWorldFunctional from './HelloWorldFunctional';

describe(HelloWorldFunctional, () => {
  // Add the rest of our tests here later!
});

const name = 'Person';
const mockRemoveGreeting = jest.fn();
const component = shallow(
  <HelloWorldFunctional name={name} removeGreeting={mockRemoveGreeting}/>
);

it('renders and matches our snapshot', () => {
  const component = renderer.create(
    <HelloWorldFunctional name="Person" />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('contains the supplied name', () => {
  expect(component.text()).toContain(name);
});

it('modifies the greeting when frenchify button is clicked', () => {
  component.find('button.frenchify').simulate('click');
  expect(component.text()).toContain('Bonjour');
});

it('calls the passed in removeGreeting function when remove button is clicked', () => {
  component.find('button.remove').simulate('click');
  expect(mockRemoveGreeting).toBeCalled();
});