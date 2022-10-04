import React from 'react';

const BlogFooterTop = () => {
  return (
    <div className="bg-gray-200">
      <div className="flex flex-wrap justify-around gap-2 pt-20 pb-20 lg:max-w-7xl mx-auto py-14 px-8 md:items-center md:px-8">
        <div className="pb-10">
          <p className="font-bold uppercase mb-1.5">
            Hello Guys, just to let you know...
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="text-center">
          <div className="font-bold">DESTINATIONS</div>
          <a href="/#">
            <p className="mt-1.5">Scotland</p>
          </a>
          <a href="/#">
            <p className="mt-1.5">Wales</p>
          </a>
          <a href="/#">
            <p className="mt-1.5">England</p>
          </a>
        </div>

        <div className="text-center">
          <div className="font-bold">START HERE</div>
          <a href="/#">
            <p className="mt-1.5">About</p>
          </a>
          <a href="/#">
            <p className="mt-1.5">Blog</p>
          </a>
          <a href="/#">
            <p className="mt-1.5">Contact</p>
          </a>
        </div>

        <div className="text-center">
          <div className="font-bold">RESOURCES </div>
          <a href="/#">
            <p className="mt-1.5">Travel Guides</p>
          </a>
          <a href="/#">
            <p className="mt-1.5">Trekking</p>
          </a>
          <a href="/#">
            <p className="mt-1.5">Gallery</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogFooterTop;
