import React from 'react'
import Card from '../shared/Card'
import {Link} from 'react-router-dom'

function AboutPage() {
  return (
      <Card>

        <div className='about'>
            <h1> This is the about page</h1>
            <p> Hello there welcome here</p>

            <Link to="/">
              click here
            </Link>
            
            
        </div>
      </Card>
  )
}

export default AboutPage