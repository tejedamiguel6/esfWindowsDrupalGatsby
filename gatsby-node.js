const path = require('path')

// use this to build the slug for your pages

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
    // query everything from every page youre going to need on here
    const res = await graphql(`
    {
        allNodeArticle {
          edges {
            node {
              id
              title
              created(formatString: "MMMM Do, YYYY")
            }
          }
        }
        allNodeAccesories {
          edges {
            node {
              id
              title
              created
            }
          }
        }
      }
    `)
    if(res.errors) {
        console.error(res.errors)
    }
    console.log(JSON.stringify(res, null, 4))
    // destructuring object query results 
    const { allNodeArticle, allNodeAccesories } = res.data
    allNodeArticle.edges.forEach(({node}) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${node.id}`,
            context: {
                id: node.id
            }
        })

    })


    const accessoriesTemplate = path.resolve('./src/templates/accesories.js')
    allNodeAccesories.edges.forEach(({ node }) => {
        createPage({
            component: accessoriesTemplate,
            path: `/accessories/${node.id}`,
            context: {
                id: node.id
            }
            
        })

    })
}

