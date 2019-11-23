import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';

const Div = styled.div`
  padding: 3em;
  display: flex;
  justify-content: space-between;
  float: right;
  position: fixed;
  align-items: center;
  background: rgba(233, 233, 233, 0.1);
  width: 80vw;
  height: 70px;
  margin-left: 20vw;
  z-index: 1;
  font-size: 1rem;
  background: #4B88A2;

  button {
    border: none;
    color: white;
    background: #BB0A21;
    font-size: 1.2rem;
    margin-right: 30px;

    &:hover {
      border: none;
      color: green;
      background: gold;
    }
  }
`;

const NavBar = () => {

    return (
        <Div>
            <Button>
                Logout
            </Button>
        </Div>
    )
}

export default NavBar