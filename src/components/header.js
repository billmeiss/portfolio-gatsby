import React from "react";

function Header() {
  return (
    <header>
      <div className="relative bg-gray-900">
        <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
          <div className="text-center sm:px-16">
            <p className="font-medium text-white">
              <span className="block sm:ml-2 sm:inline-block">
                <a
                  href="https://www.linkedin.com/in/stefan-gazzana-17a102141/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-white underline"
                >
                  Let&apos;s chat
                  <span aria-hidden="true"> &rarr;</span>
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
