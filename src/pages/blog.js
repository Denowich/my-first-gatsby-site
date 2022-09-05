import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const Blog = ({ data }) => {
  return (
    <Layout pageTitle='My Blogs:'>
      {data.allFile.nodes.map((node) => (
        <li key={node.name}>{node.name}</li>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export const Head = () => <Seo title='Blog Page' />;
export default Blog;
