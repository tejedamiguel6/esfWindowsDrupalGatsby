import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'




export const query = graphql`
query($id: String!) {
  nodeAccesories(id: { eq: $id }) {
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
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
}
`
const AccessoriesTemplate = ({ data }) => {
    const post = data.nodeAccesories
    const image = data.nodeAccesories.relationships
    console.log('here is the image', post)
    return (
        <Layout>
            <div>
                <h1>
                    {post.title}
                </h1>
                {image ? (
                  <div>
                    <div dangerouslySetInnerHTML={{ __html: post.body.value }}></div>
                    <Img fixed={ post.relationships.field_accessories_image[0].localFile.childImageSharp.fixed } />
                  </div>
                ) :
                <div dangerouslySetInnerHTML={{ __html: post.body.value }}></div>
                }
            </div> 
        </Layout>

    )
}

export default AccessoriesTemplate