import Nav from 'react-bootstrap/Nav';

function Navigation() {
  return (
    <>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Watch List </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Favorites</Nav.Link>
        </Nav.Item>


      </Nav>
    </>
  );
}

export default Navigation;
