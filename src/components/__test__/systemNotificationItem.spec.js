import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import SystemNotificationItem from '../systemNotificationItem';

function createMockDownTimeItem(){
    return {
        message: 'The system is dead',
        type: 'downtime',
        sent: new Date('3/25/2016')
    };
}

function createMockWarningItem(){
    return {
        message: 'The system is going down',
        type: 'warning',
        sent: new Date('3/25/2016')
    };
}

function createMockRestoreItem(){
    return {
        message: 'The system is back up',
        type: 'restore',
        sent: new Date('3/25/2016')
    };
}

describe('<SystemNotificationItem />', () => {
    it('has link to return to home page', () => {
        const wrapper = shallow(<NotFound />);
        expect(wrapper.contains(<Link to="/" className="btn btn-primary"><i className="fa fa-home fa-lg" />&nbsp;&nbsp;Home</Link>)).to.equal(true);
    });
});
