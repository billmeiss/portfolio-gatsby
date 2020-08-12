import React from "react";
import { Link, graphql } from "gatsby"

import Layout from "../components/layout";
import SEO from "../components/seo";

function ProjectPage({ data }) {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout title="Projects">
      <SEO
        keywords={[`developer`, `projects`, `react`, `javascript`]}
        title="Projects"
      />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        return (
          <article key={node.fields.slug} className="mb-3 p-6 bg-gray-100 border-b-8 hover:text-purple-600 hover:border-purple-600">
            <header>
              <h3 className="text-xl sm:text-4xl md:text-4xl lg:text-4xl font-bold">
                <Link to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small className="text-md font-medium text-purple-800 mb-1">{node.frontmatter.date}</small>
            </header>
            <section className="text-md sm:text-lg md:text-lg lg:text-lg text-gray-800">
              <p 
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description
                }}
              />
            </section>
          </article>
        );
      })}
    </Layout>
  );
}

export default ProjectPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
