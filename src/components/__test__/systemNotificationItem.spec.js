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

   /* it('should have some props', () => {
        const wrapper =  shallow(SystemNotificationItem(1, createMockRestoreItem()));

        console.log(wrapper.props().key);
    });*/

    describe('when rendering a system notification item', () => {
        let wrapper;

        beforeEach(() => {
            wrapper  = shallow(SystemNotificationItem(1, createMockRestoreItem()));
        });

        it('should render a list item as the root', () => {
            expect(wrapper.is('li')).to.equal(true);
        });

        it('should render a single badge', () => {
            expect(wrapper.find('.notifications-badge')).to.have.length(1);
        });

        it('should render a details section', () => {
            expect(wrapper.find('.notification-details')).to.have.length(1);
        });

        it('should render a details section with a header for the notification', () => {
            const notificationDetails = wrapper.find('.notification-details');

            expect(notificationDetails.find('.notification-header')).to.have.length(1);
        });

        it('should render a details section with meta for the date of the notification', () => {
            const notificationDetails = wrapper.find('.notification-details');

            expect(notificationDetails.find('.notification-meta')).to.have.length(1);
        });
    });

    describe('when rendering a system notification item badge', () => {

        const tests = [
            {
                args: {
                    key: 1,
                    item: createMockDownTimeItem()
                },
                expected: {
                    badgeColorSelector: '.w_bg_red',
                    iconSelector: '.fa-flash'
                }
            },
            {
                args: {
                    key: 1,
                    item: createMockWarningItem()
                },
                expected: {
                    badgeColorSelector: '.w_bg_yellow',
                    iconSelector: '.fa-bullhorn'
                }
            },
            {
                args: {
                    key: 1,
                    item: createMockRestoreItem()
                },
                expected: {
                    badgeColorSelector: '.w_bg_green',
                    iconSelector: '.fa-check'
                }
            }
        ];
        tests.forEach(({args ,expected}) => {

            const wrapper = shallow(SystemNotificationItem(args.key, args.item));
            const badge = wrapper.find('.notifications-badge');

            it(`should display a ${ expected.badgeColorSelector } badge`, () => {
                expect(badge.childAt(0).is(expected.badgeColorSelector), `Expected badge color selector ${expected.badgeColorSelect} was not present. ${badge.html()}`).to.equal(true);
            });

            it(`should display a ${expected.iconSelector} icon`, () => {
                const icon = badge.find('.fa');
                expect(icon).to.have.length(1);
                expect(icon.is(expected.iconSelector), `Expected icon selector ${expected.iconSelector} was not present, ${icon.html()}`).to.equal(true);
            });
        });



    });
});