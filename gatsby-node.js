const path = require('path')


// module.exports.onCreateNode = ({ node, actions }) => {
//     const { createNodeField } = actions

//     if(node.internal.type === 'MarkdownRemark'){
//         const slug = path.basename(node.fileAbsolutePath, '.md')
//         createNodeField({
//             node,
//             name: 'slug',
//             value: slug
//         })
//     }
// }

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')
    const res = await graphql(`
        query {
            allNodeArticle {
                edges {
                    node {
                        id
                        title
                        created(formatString: "MMMM Do, YYYY")
                    }
                }
            }
        }
    `)
    console.log(JSON.stringify(res, null, 4))

    res.data.allNodeArticle.edges.forEach(({node}) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${node.id}`,
            context: {
                id: node.id
            }
        })

    })

}