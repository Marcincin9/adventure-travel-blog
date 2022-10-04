import React from 'react';

const CardThingsTodo = () => {
  return (
    <div className="flex flex-wrap justify-around text-center">
      <div className="mb-5 ml-2.5 mr-2.5 block max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <article>
          <a href="/#">
            <img
              class="rounded-t-lg"
              src="https://deih43ym53wif.cloudfront.net/scotland-540119_89be5fa890.jpeg"
              alt="things to do in scotland"
            />
          </a>
          <div class="p-5">
            <a href="/#">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                15 AWESOME THINGS TO DO IN SCOTLAND
              </h5>
            </a>
          </div>
        </article>
      </div>

      <div className="mb-5 ml-2.5 mr-2.5 block max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <article>
          <a href="/#">
            <img
              class="rounded-t-lg"
              src="https://i2-prod.walesonline.co.uk/incoming/article12723062.ece/ALTERNATES/s615b/dinorwic-slate-quarry-wales.jpg"
              alt="things to do in wales"
            />
          </a>
          <div class="p-5">
            <a href="/#">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                10 AWESOME THINGS TO DO IN WALES
              </h5>
            </a>
          </div>
        </article>
      </div>

      <div className="mb-5 ml-2.5 mr-2.5 block max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <article>
          <a href="/#">
            <img
              class="rounded-t-lg"
              src="https://lp-cms-production.imgix.net/2022-03/Durham%20Castle%20England%20UK%20CathrynGallacher%20shutterstock_569546740.jpg"
              alt="things to do in england"
            />
          </a>
          <div class="p-5">
            <a href="/#">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                12 AWESOME THINGS TO DO IN ENGLAND
              </h5>
            </a>
          </div>
        </article>
      </div>
    </div>
  );
};

export default CardThingsTodo;
