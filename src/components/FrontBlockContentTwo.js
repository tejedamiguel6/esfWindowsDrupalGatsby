import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Img from 'gatsby-image'


const FrontBlockContentTwo  = () => {
    const data = useStaticQuery(graphql`
    query {
    allNodeContentType2 {
    edges {
      node {
        title
        body {
          value
        }
        relationships {
          field_content_type_2image {
            localFile {
              childImageSharp {
                fixed(width: 530, height: 530) {
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


console.log('heres your data', data.node)

console.log(data)
    return (
        <div>
            <h3 className='featureProjects'>Feature Projects</h3>
            <div className='second-main-content'>
            {data.allNodeContentType2.edges.map((edge) => (
                <nav>
                <ol>
                    <li className='item1-list'>
                        <Link to={`/contenttype2/${edge.node.id}`}>
                            <p className='titleMiddle'>{edge.node.title}</p>
                            <Img className='secondContentItems'
                            fixed={edge.node.relationships.field_content_type_2image[0].localFile.childImageSharp.fixed } />
                        </Link>
                    </li>
                </ol>
                </nav> 

            ))}
       
        </div>
        </div>
    )
}


export default FrontBlockContentTwo