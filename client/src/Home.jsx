import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import axios from 'axios'

const Home = () => {
  const [email, setEmail] = useState('')

  const handleEmailSubmit = async (e) => {
    e.preventDefault()
    setEmail(email)
    console.log(email)
    const res = await axios.post("http://localhost:8000/api/v1/sendemail", { email })
    console.log("response:", res)
  }

  return (
    <div className='container mt-2'>
      <div className='d-flex justify-content-center'>
        <h2>Send Email with Node JS</h2>
      </div>

      <div className='d-flex justify-content-center'>
        <Form className='mt-2 col-lg-6' >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleEmailSubmit}>
            Send Email
          </Button>
        </Form>

      </div>
      <div>

      </div>
    </div>
  )
}

export default Home