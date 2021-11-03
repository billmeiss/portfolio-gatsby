import React from "react";
import { Link } from "gatsby"

import Layout from "../components/layout";
import SEO from "../components/seo";
import developerIllustration from "../images/developer-illustration.svg";

function IndexPage() {
  return (
    <Layout title="Home">
      <SEO
        keywords={[`gatsby`, `developer`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="text-center">
        <img
          alt="Cat and human sitting on a couch"
          className="block w-full sm:w-3/5 md:w-2/5 lg:w-2/5 mx-auto -mt-2 mb-8"
          src={developerIllustration}
        />

        <div className="flex flex-col">
          <h2 className="p-3 text-2xl font-bold">Hey incredible people!</h2>
          <h2 className="inline-block p-3 mb-4 text-2xl text-gray-100 font-bold bg-purple-600 border-b-8">
            I&apos;m Stefan, a full-stack developer living in the heart of Australia.
          </h2>
        </div>

        <div className="py-3 font-semibold text-gray-800">
          <p className="leading-loose">
            My favourite language is Javascript, my vocabulary extending to frameworks like Node.js and React.js.
          </p>
          <p className="leading-loose">
            Check out some <Link to="/projects" className="text-gray-800 font-bold">projects</Link> I&apos;ve worked on recently.
          </p>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
