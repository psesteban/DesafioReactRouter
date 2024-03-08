import 'bootswatch/dist/journal/bootstrap.min.css'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigator = () => {
  return (
    <Navbar bg='primary' data-bs-theme='dark'>
      <Container>
        <Nav className='me-auto'>
          <Link to='/' className='text-white text-decoration-none px-2'>🏠 Home</Link>
          <Link to='/contact' className='text-white text-decoration-none'>📒 Contacto</Link>
        </Nav>
        <Navbar.Brand>Happy Cake 🍰</Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Navigator
