import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'


const IndexPage = () => {
    return (
        <Layout>
            <h3>This is the index/home page</h3>
            <p>Drupal Backend reactjs Frontend</p>
            <p>News Read out News
                <Link to='/blog'> Read our blog</Link>
            </p>
            <p>Check out our Linkedin <a  target="_blank" href='https://www.linkedin.com/company/eurostar-fenestration-llc'>EuroStar</a></p>
        </Layout>
    )
}

export default IndexPage;
