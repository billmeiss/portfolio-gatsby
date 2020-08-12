import PropTypes from "prop-types";
import React from "react";

import Header from "./header";

function Layout({ children, title }) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-gray-200">
      <Header title={title} />

      <main className="flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16">
        {children}
      </main>

      <footer className="bg-gray-300 border-t border-gray-400">
        <nav className="flex flex-col sm:flex-row md:flex-row lg:flex-row justify-between max-w-4xl p-4 mx-auto text-sm md:p-8">
          <div className="text-gray-900 mb-3">
            Created by{` `}
            <a
              className="font-bold no-underline"
            >
              Stefan Gazzana.
            </a>
            <p className="mt-1">Built using{` `}
              <a
                className="font-bold underline"
                href="https://gatsbyjs.org"
                target="_blank"
                rel="noopener noreferrer"
              > 
                Gatsby
              </a> 
              {` `}and{` `}
              <a
                className="font-bold underline"
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                TailwindCSS
              </a>
            </p>
          </div>


          <p>
            <a
              className="font-bold text-gray-800 no-underline"
              href="https://github.com/billmeiss"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
