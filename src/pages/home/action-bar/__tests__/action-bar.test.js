import React, { useState as useStateMock } from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { ActionBar } from '../action-bar';

configure({ adapter: new Adapter() });

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

describe('ActionBar', () => {
  let setState = null;

  beforeEach(() => {
    setState = jest.fn();
    useStateMock.mockImplementation(init => [init, setState]);
  });

  it('renders sort and flter texts', () => {
    const wrapper = shallow(<ActionBar />);
    expect(wrapper.find('.sort-switch').length).toEqual(1);
    expect(wrapper.find('.filter-switch').length).toEqual(1);
  });

  it('updates state by pressing the sort switch', () => {
    const wrapper = shallow(<ActionBar />);
    wrapper.find('.sort-switch').simulate('click');
    expect(setState).toHaveBeenCalledWith(true);
  });

  it('updates state by pressing the sort switch', () => {
    const wrapper = shallow(<ActionBar />);
    wrapper.find('.filter-switch').simulate('click');
    expect(setState).toHaveBeenCalledWith(true);
  });
});
