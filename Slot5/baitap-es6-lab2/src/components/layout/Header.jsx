import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { APP_NAME, menuItems } from '../../data/menu';

const Header = () => (
  <Navbar bg="dark" variant="dark" expand="md">
    <Container>
      <Navbar.Brand href="#home">{APP_NAME}</Navbar.Brand>
      <Nav className="ms-auto">
        {menuItems.map(({ label, href }) => (
          <Nav.Link key={href} href={href}>
            {label}
          </Nav.Link>
        ))}
      </Nav>
    </Container>
  </Navbar>
);

export default Header;