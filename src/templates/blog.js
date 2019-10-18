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
console.log(query)

export default ({ data }) => {
  const post = data.nodeArticle
  const blogImage = post.relationships.field_image.localFile.childImageSharp.fluid

  console.log('here is the image', blogImage)
  return (
    <Layout>
      <div>
        <h1>title: {post.title}</h1>
        
        <small>
          <em>
            { Date(post.created) }
          </em>
        </small>
          {/* {JSON.stringify(post, undefined, 4)} */}

          <div dangerouslySetInnerHTML={{ __html: post.body.value }}></div>
          

          {JSON.stringify(post, undefined, 50)}

          


        
          


          
    


          { /* 
          { blogImage ? <Img fluid={ post.relationships.field_image.localFile.childImageSharp.fluid } />  
          : <div dangerouslySetInnerHTML={{ __html: post.body.value }}></div>
          }
           */}    
         
            {/* <Img fluid={ post.relationships.field_image.localFile.childImageSharp.fluid } />  */}
 
      </div>
    </Layout>
  )
}


