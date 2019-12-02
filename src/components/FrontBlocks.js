import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'


const FrontBlock = () => {
    const data = useStaticQuery(graphql`
    query {
    allNodeAccesories  {
        edges {
        node {
            id
            title
            body {
            value
            }
        relationships {
          field_accessories_image {
            localFile {
              childImageSharp {
                fixed(width: 300, height: 300) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
}
`)
    return (
        <div>
            {/* {JSON.stringify(data, undefined, 8)} */}
            <div className='container'>
                {data.allNodeAccesories.edges.map((edge) => (
                    <ol className='hover'>
                        <nav>
                        <li className='item1'>
                            <Link to={`/accessories/${edge.node.id}`}>
                            <h1>{edge.node.title}</h1>
                            <Img fixed={edge.node.relationships.field_accessories_image[0].localFile.childImageSharp.fixed }/>     
                            </Link>
                        </li>
                        </nav>
                    </ol>
                )) }
            </div>
        </div>
    )
}

export default FrontBlock