import React from 'react';
import styled from 'styled-components';
import { ValidatorComponent } from 'react-form-validator-core';

import Input from './Input';
import ErrorMessage from './InputErrorMessage';

class ValidatedInput extends ValidatorComponent {
  render() {
    const errorText = this.getErrorMessage();
    const { errorMessages, validators, requiredError, validatorListener, ...rest } = this.props;
    return (
      <InputCont>
        {!this.isValid() && <ErrorMessage data-test-error={rest.name}>{errorText}</ErrorMessage>}
        <Input error={!this.isValid()} {...rest} />
      </InputCont>
    );
  }
}

const InputCont = styled.div`
  position: relative;
`;

export default ValidatedInput;
