import React from 'react';
import expect from 'expect';
import { shallow, mount, render } from 'enzyme';
import NotFound from '../notFound';

describe("<NotFound />", function() {
    it("does something", function() {
        const wrapper = shallow(<NotFound  />);
        expect(wrapper.find('.center').length).toBe(1);
    });
});
