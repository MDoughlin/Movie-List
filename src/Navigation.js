import Nav from 'react-bootstrap/Nav';
import React from 'react';
import { Outlet } from 'react-router-dom';
function Navigation() {
  return (
    <>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default Navigation;
