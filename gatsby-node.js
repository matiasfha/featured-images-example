const {
  createRemoteFileNode,
} = require('gatsby-source-filesystem')

exports.createResolvers = ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}, pluginOptions) => {
  const { createNode } = actions
  
  createResolvers({
    Mdx: {
      cover: {
        type: `File`,
        resolve(source, args, context, info) {
          return createRemoteFileNode({
            url: source.frontmatter.cover,
            parentNodeId: source.id,
            cache,
            createNode,
            createNodeId,
            reporter,
          })

        }
      },
    },
  })
}
