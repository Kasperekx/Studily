import styled from 'styled-components';
import { ReactComponent as DeleteIcon } from 'assets/delete-icon.svg';
import React from 'react';

const DeleteButton = styled.button`
  width: 25px;
  height: 25px;
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: 50px;
  border: none;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 100%;
    height: 100%;
  }
`;

const Button = (props) => {
  return (
    <DeleteButton {...props}>
      <DeleteIcon />
    </DeleteButton>
  );
};

export default Button;
