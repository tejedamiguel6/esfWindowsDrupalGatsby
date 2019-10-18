import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'

const Company = () => {
    return (
        <Layout>
            <h1>About us</h1>
            <p>EuroStar Fenestration is a business with more than 30 years experience in the window, door and specialty millwork industry. Recognizing the increasing popularity of European Windows, Doors, Glass and Facade products, EuroStar Fenestration specializes in sourcing these specialty products and assisting architects and builders to incorporate them into their design. While there are numerous advantages to using European Windows and Doors in energy efficiency, construction, capability, design, style, and longevity, these products often create a challenge for prospective buyers in sourcing and integrating them properly into their project. EuroStar helps bridges this gap by consulting with Architects and Builders on the proper use andoperation of European Windows and Doors, sourcing these products from exclusive vendors in Europe, and even providing installation oversight to ensure the window and door products function properly. This is further supported by our trained service staff and field service technicians here in the U.S. to provide service parts, warranty, and everyday customer service support for the product during and especially after the project is completed.</p>
            <p>Contact us with any question <Link to='/contact'>Contact</Link></p>
        </Layout>
    )
}

export default Company