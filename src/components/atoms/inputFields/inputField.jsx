import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class inputField extends Component {
  onChange = () => {
    this.props.handleChange;
  }
  render() {
    let { inputs, value } = this.props;
    const inputForms = inputs.map((input) => {
      return (
        <div className="form-group" key={input.id} data-test="inputFieldGroup">
          <label className="form-label">{input.label}</label>
          <input type={input.type} placeholder={input.placeholder} id={input.formId} name={input.name} value={value} className={input.className} onChange={this.onChange} data-test={input.name} />
          {input.error && (<p className={classnames('erroremail', {
            'erroremail-hide': input.error
          })}>{input.error}</p>)}
        </div>
      )
    });
    return (
      <div>
        {inputForms}
      </div>
    )
  }
}

inputField.propTypes = {
  inputs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    formId: PropTypes.string,
    className: PropTypes.string,
    error: PropTypes.string,
  })),
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired
};

export default inputField;
