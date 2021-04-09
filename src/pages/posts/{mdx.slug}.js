import React from "react"
import { graphql } from "gatsby" // We need to explicitly import GraphQL here.
import { MDXRenderer } from "gatsby-plugin-mdx"; //Since we want to render MDX, we need this plugin.
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function PostPage({ data: { mdx} }) {
	const image = getImage(mdx.cover)
	return (
		<div>
			<h1>{mdx.frontmatter.title}</h1>
			<GatsbyImage image={image} alt={mdx.frontmatter.title} />
			<br />
			<span>{mdx.frontmatter.date}</span>
			<MDXRenderer>{mdx.body}</MDXRenderer>
		</div>
	)
}

export const query = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
				date
				description
      }
			cover {
	      childImageSharp {
					gatsbyImageData(width: 600, placeholder: BLURRED)
	      }
	    }
			body
    }
  }
`
