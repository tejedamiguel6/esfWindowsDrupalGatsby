import React from 'react'

import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/Layout'

import blogStyles from './blog.module.scss'




const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allNodeArticle {
                edges {
                    node {
                        id
                        title
                        body {
                            value
                        }
                        created
                        relationships {
                            field_image {
                                localFile {
                                    publicURL
                                    childImageSharp {
                                        fluid(maxWidth: 400, quality: 100) {
                                            base64
                                            presentationWidth
                                            presentationHeight
                                            src
                                            srcSet

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
        <Layout>

            <h1>Company Blog</h1>
            <p>all blog post from drupals' back end will show up here</p>

            <ol className={blogStyles.posts}>

                {data.allNodeArticle.edges.map((edge) => (
                    <nav>
                        
                        <li className={blogStyles.post}>
                        <Link to={`/blog/${edge.node.id}`} >
                            <h1 className={blogStyles.post}>{edge.node.title}</h1>
                            <p>{edge.node.created}</p>
                            
                        </Link>
                        </li>
                       
                    </nav>
                ))}

            
            </ol>

        </Layout>
               
    )
}

export default BlogPage