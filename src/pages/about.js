import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const About = () => {
  return (
    <Layout pageTitle='About Me:'>
      <p>Hello! My name is Den! I'm Web-Developer !</p>
    </Layout>
  );
};
export const Head = () => <Seo title='About page' />;
export default About;
