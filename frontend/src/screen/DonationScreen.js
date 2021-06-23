import React, { useState } from 'react'

import {
  Card,
  Button,
  InputGroup,
  FormControl,
  Row,
  Col,
  ProgressBar,
  Alert,
} from 'react-bootstrap'
import Stripe from '../components/stripe/Stripe'
import Backdrop from '../components/backdrop/Backdrop'
import FormContainer from '../components/formContainer/FormContainer'
import GridContainer from '../components/gridContainer/GridContainer'
import { MdAttachMoney } from 'react-icons/md'

const DonationScreen = () => {
  const [money, setMoney] = useState('')

  const now = 70

  return (
    <div>
      <Backdrop>
        <GridContainer direction='rtl'>
          <Stripe gridColumn='7/14' color='#fcd669' gridRow='1' />
          <Stripe gridColumn='1/5' color='#43458b' gridRow='1' />
          <Stripe gridColumn='4/10' gridRow='2' />
          <Stripe gridColumn='1/3' color='#fcd669' gridRow='2' />
          <Stripe gridColumn='1/3' color='#43458b' gridRow='7' />
          <Stripe gridColumn='1/4' color='#fcd669' gridRow='8' />
          <Stripe gridColumn='10/14' color='#43458b' gridRow='11' />
          <Stripe gridColumn='12/14' gridRow='12' />
        </GridContainer>
      </Backdrop>
      <FormContainer>
        <Card className='p-3 m-auto w-75'>
          <Card.Body>
            <Alert className='text-center p-2' variant='info'>
              <strong>$167</strong> still needed for this project
            </Alert>
            <ProgressBar
              className=' m-4 '
              variant='warning'
              now={now}
              label={`${now}%`}
              animated
              striped
            />
            <article>
              <label>
                <label style={{ color: 'orange' }}>Only 3 days left</label> to
                fund this project !
              </label>
              <p>
                Join the 42 other donors who have already supported this
                project. Every dollar helps.{' '}
              </p>
            </article>
            <div>
              <Row className='justify-content-md-center'>
                <Col md='auto'>
                  {' '}
                  <InputGroup size='lg' className='mb-3'>
                    <InputGroup.Text>
                      <MdAttachMoney />
                    </InputGroup.Text>
                    <FormControl
                      type='number'
                      onChange={(e) => {
                        setMoney(e.target.value)
                      }}
                    />
                  </InputGroup>
                </Col>
              </Row>
              <Row className='justify-content-md-center'>
                <Col md='auto'>
                  {' '}
                  <Button variant='success' className='btn-block'>
                    Give Now
                  </Button>
                </Col>
              </Row>
            </div>
          </Card.Body>
        </Card>
      </FormContainer>
    </div>
  )
}

export default DonationScreen
