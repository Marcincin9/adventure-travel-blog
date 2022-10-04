import React from 'react';

const BlogFooterBottom = () => {
  return (
    <nav className="bg-sky-800">
      <div className="sm:justify-center md:justify-between container flex flex-wrap items-center mx-auto px-8 lg:max-w-7xl md:items-center md:px-8 py-4 text-white ">
        <div>
          Copyright Mardraft Journey, 2022 |
          <a className="ml-1.5 mr-1.5" href="/#">
            Sitemap
          </a>
          |
          <a className="ml-1.5" href="/#">
            Privacy Policy
          </a>
        </div>

        <div className="w-full md:w-auto" id="navbar-default">
          <ul className="flex p-4  sm:justify-center text-3xl ">
            <li>
              <a href="/#" className="py-2 pr-4 pl-3 ">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="/#" className="py-2 pr-4 pl-3 ">
                <i class="fab fa-youtube"></i>
              </a>
            </li>
            <li>
              <a href="/#" className="py-2 pr-4 pl-3 ">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="/#" className="py-2 pr-4 pl-3 ">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default BlogFooterBottom;
