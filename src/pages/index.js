import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage({ data }) {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout title="Home">
      <SEO
        keywords={[`gatsby`, `developer`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="text-center">
        <h2 className="font-semibold text-md text-gray-800 leading-loose">
          I&apos;m Stefan, a product minded developer based in Australia.
        </h2>
        <p className="py-3 text-sm font-semibold text-gray-800 leading-loose mb-5">
          I work across the stack, but tend to lean to the front end since I
          love seeing the product build before my eyes!
        </p>
      </section>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        return (
          <Link key={node.fields.slug} to={node.fields.slug}>
            <article className="mb-3 p-6 bg-gray-100 rounded-lg hover:shadow-lg hover:text-gray-900 hover:border-gray-900">
              <header>
                <h3 className="text-xl sm:text-4xl md:text-4xl lg:text-4xl font-bold">
                  {title}
                </h3>
                <small className="text-md font-medium text-gray-800 mb-1">
                  {node.frontmatter.date}
                </small>
              </header>
            </article>
          </Link>
        );
      })}
    </Layout>
  );
}

export default IndexPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
