import React from 'react';
import expect from 'expect';
import { shallow, mount, render } from 'enzyme';
import { Root } from '../root';

describe.skip("<Root />", function() {
    let props = {
        auth: expect.createSpy(),
        notify: expect.createSpy(),
        router: expect.createSpy(),
        config: expect.createSpy()
    };
    it("does something", function() {
       const wrapper = shallow(<Root {...props} />);
        console.log(wrapper.debug());
    });
})