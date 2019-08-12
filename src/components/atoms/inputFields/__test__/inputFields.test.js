import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import checkPropTypes from 'check-prop-types';
import InputField from '../inputField.jsx';
import { findByTestAttr } from '../../../../../utils';

configure({ adapter: new Adapter() });

const setUp = (props = {}, handleChange={}) => {
  const component = shallow(<InputField inputs={props} handleChange={handleChange} />);
  return component;
};



describe('INPUT FORM', () => {

  describe('HAVE PROPS', () => {
    let component;
    beforeEach(() => {
      // FORM
      const inputState = [
        { id: 1, label: 'First Name', type: 'text', placeholder: 'First Name', formId: 'firstname', name: 'firstName', className: 'form-input', error: '' },
        { id: 2, label: 'Last Name', type: 'text', placeholder: 'Last Name', formId: 'lastname', name: 'lastName', className: 'form-input', error: '' },
        { id: 3, label: 'Email', type: 'text', placeholder: 'Email', formId: 'email', name: 'email', className: 'form-input', error: '' },
        { id: 4, label: 'Password', type: 'password', placeholder: 'Password', formId: 'password', name: 'password', className: 'form-input', error: '' }
      ];

      // HANDLECHANGE
      const handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      }
      component = setUp(inputState, handleChange)
    });

    it('Should have 4 INPUTS', () => {
      const wrapper = findByTestAttr(component, 'inputFieldGroup');
      expect(wrapper.length).toBe(4);
    });

    it('Should have FIRSTNAME INPUT', () => {
      const wrapper = findByTestAttr(component, 'firstName');
      expect(wrapper.length).toBe(1);
    });
    it('Should have LASTNAME INPUT', () => {
      const wrapper = findByTestAttr(component, 'lastName');
      expect(wrapper.length).toBe(1);
    });
    it('Should have EMAIL INPUT', () => {
      const wrapper = findByTestAttr(component, 'email');
      expect(wrapper.length).toBe(1);
    });
    it('Should have PASSWORD INPUT', () => {
      const wrapper = findByTestAttr(component, 'password');
      expect(wrapper.length).toBe(1);
    });
  });

  describe('CHECK PROPTYPES', () => {
    it('Proptype should not throw an error', () => {
      const handleFunc = () => {}
      const expectedProps = {
        inputs: [{
          id: 1,
          label: 'label',
          type: 'type',
          placeholder: 'placeholder',
          name: 'name',
          formId: 'formId',
          className: 'classname',
          error: 'error',
        }],
        value: 'value',
        handleChange: handleFunc
      };

      const propsErr = checkPropTypes(
        InputField.propTypes,
        expectedProps,
        'props',
        InputField.name
      );
      expect(propsErr).toBeUndefined();
    })
  })
});
