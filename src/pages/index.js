import * as React from "react"
import { Link, graphql } from 'gatsby'

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}


// markup
const IndexPage = ({ data: { allMdx } }) => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        Congratulations
        <br />
        <span style={headingAccentStyles}>— you just made a Gatsby site! </span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
      <ul style={listStyles}>
        {allMdx.nodes.map(node => (
          <li key={node.slug} style={{ ...listItemStyles}}>
             
            <span>
              <Link
                style={linkStyle}
                to={`/posts/${node.slug}`} 
              >
                {node.frontmatter.title}
              </Link>
              <p style={descriptionStyle}>{node.frontmatter.description}</p>
            </span>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default IndexPage

export const query = graphql`
  query AllArticles {
  allMdx {
    nodes {
      slug
      frontmatter {
        title
        description
      }
      cover {
        childImageSharp {
          gatsbyImageData(width: 100, placeholder: BLURRED)
        }
      }
    }
  }
}
`
