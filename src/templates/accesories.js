import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'


export const query = graphql`
query {
  allNodeAccesories {
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
                fixed(width: 400, height: 400) {
                  base64
                  tracedSVG
                  aspectRatio
                  width
                  height
                }
              }
            }
          }
        }
      }
    }
  }
}
`
const AccessoriesTemplate = ( { data }) => {
    const post = data.allNodeAccesories
    console.log('this is in the accessories page', post)
    return (
        <Layout>

            <div>
                <h1>
                    {post.id}
                </h1>
            </div>
            
            <p>
                {JSON.stringify(post, null, 5)}
                
            </p>


        </Layout>

    )
}


export default AccessoriesTemplate