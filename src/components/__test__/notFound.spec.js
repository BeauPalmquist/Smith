import React from 'react';
import { Link } from 'react-router';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import NotFound from '../notFound';

describe('<NotFound />', () => {
    it('has link to return to home page', () => {
        const wrapper = shallow(<NotFound />);
        expect(wrapper.contains(<Link to="/" className="btn btn-primary"><i className="fa fa-home fa-lg" />&nbsp;&nbsp;Home</Link>)).to.equal(true);
    });
});
