import PropTypes from "prop-types";
import React from "react";

import Header from "./header";

function Layout({ children, title }) {
  return (
    <>
      <Header title={title} />
      <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-gray-50">
        <main className="flex-1 w-full max-w-4xl px-4 py-4 mx-auto md:px-8 md:py-10">
          {children}
        </main>
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
