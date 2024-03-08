import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'

const ContactForm = () => {
  const [correo, setCorreo] = useState('')
  const [descripcion, setDescripcion] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Formulario enviado')
  }

  return (
    <Container>
      <Form className='text-center m-3' onSubmit={handleSubmit}>
        <h2>Cuentanos, ¿En qué te podemos ayudar? </h2>
        <Form.Group className='px-5' controlId='correo'>
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control type='email' value={correo} onChange={(e) => setCorreo(e.target.value)} />
        </Form.Group>
        <Form.Group className='px-5' controlId='descripcion'>
          <Form.Label>Descripción</Form.Label>
          <Form.Control as='textarea' rows={3} value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
        </Form.Group>
        <Button className='m-3' variant='primary' type='submit'>Enviar</Button>
      </Form>
    </Container>
  )
}

export default ContactForm
