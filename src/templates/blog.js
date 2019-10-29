import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'


// export const query = graphql`
// query($slug: String!) {
//   markdownRemark(fields: { slug: { eq: $slug } }) {
//     frontmatter {
//       title
//       date
//     }
//     html
//   }
// }
// `


export const query = graphql`
  query($id: String!) {
  nodeArticle(id: { eq: $id }) {
    id
    title
    body {
      value
    }
    created
    relationships {
      field_image {
        localFile {
          childImageSharp {
            fluid(maxWidth: 400, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
}
`


export default ({ data }) => {

  const post = data.nodeArticle
  const image = data.nodeArticle.relationships.field_image

  console.log('here is the image', post)
  return (
    <Layout>
      
    <div>
        <h1>{post.title}</h1>
         {image ? (
           <div>
            <div dangerouslySetInnerHTML={{ __html: post.body.value }}></div>
            <Img fluid={ post.relationships.field_image.localFile.childImageSharp.fluid } />
           </div>
         ) : 
         <div dangerouslySetInnerHTML={{ __html: post.body.value }}></div>

         }
          <small>
          <em>
            { Date(post.created) }
          </em>
        </small>
 
    </div>
    </Layout>
  )
}


