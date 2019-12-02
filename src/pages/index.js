import React from 'react'
import Layout from '../components/Layout'
import FrontBlock from '../components/FrontBlocks'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import FrontBlockContentTwo from '../components/FrontBlockContentTwo'
import Map from '../components/Maps'


// New updated query with a basic page 
export const query = graphql`
   query {
    nodePage(title: { eq: "Welcome to ESF Windows" }) {
    title
    body {
      value
    }
    relationships {
      field_basic_page_image {
        relationships {
          node__page {
            relationships {
              field_basic_page_image {
                localFile {
                  childImageSharp {
                    fixed(width: 970, height: 400) {
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
  }
}
`

const IndexPage = ( { data }) => {
    const post = data.nodePage
    return (
        <Layout>
            <div>
                <Img 
                    style={{
                        marginTop: '60px',
                        backgroundSize: 'cover',
                        left: 0,
                        top: 0,
                        width: '100%',
                    }}
                    fixed={post.relationships.field_basic_page_image[0].relationships.node__page[0].relationships.field_basic_page_image[0].localFile.childImageSharp.fixed } /> 
            </div>
            <h1 div className='homeTitle'>
                {post.title}
            </h1>
            <div className='bio'>
                <div dangerouslySetInnerHTML= {{ __html: post.body.value}}></div>
            </div>
            <div className='block-one'>
            </div>
            <hr></hr>
            <FrontBlock />

            <FrontBlockContentTwo />

            <Map />
        </Layout>
    )

}

export default IndexPage
































// const IndexPage = () => {

//     const data = useStaticQuery(graphql`
//     query {
//     allNodeArticle {
//         edges {
//         node {
//             id
//             title
//             body {
//             value
//             }
//             created
//             relationships {
//             field_image {
//                 localFile {
//                 childImageSharp {
//                     fluid(maxWidth: 400, quality: 100) {
//                     base64
//                     presentationWidth
//                     presentationHeight
//                     src
//                     srcSet
//                     }
//                 }
//                 }
//             }
//             }
//         }
//         }
//         }
//     }
// `)

// console.log(data)


//     return (
//         <Layout>
//             <h2>Home page</h2>

//             <ol>
//                 {data.allNodeArticle.edges.map((edge) => (
//                     <li>
//                         <h1>
//                         {edge.node.title}
//                         </h1>

//                     </li>
                    
//                 ))}


                
//             </ol>
           
//         </Layout>
//     )
// }

// export default IndexPage;