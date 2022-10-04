import React from 'react';

const CardWhereToStay = () => {
  return (
    <div className="flex flex-wrap justify-around text-center">
      <div className="mb-5 ml-2.5 mr-2.5 block max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <article>
          <a href="/#">
            <img
              class="rounded-t-lg"
              src="https://albagamefishing.com/wp-content/uploads/2019/12/Fishing-Hotel-Near-Glencoe1.jpg"
              alt="where to stay in scotland"
            />
          </a>
          <div class="p-5">
            <a href="/#">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                WHERE TO STAY IN SCOTLAND
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
              src="https://deih43ym53wif.cloudfront.net/castle-caernarfon-wales-shutterstock_753300670_c1ddfd3b74.jpeg"
              alt="where to stay in wales"
            />
          </a>
          <div class="p-5">
            <a href="/#">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                WHERE TO STAY IN WALES
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
              src="https://www.we-love-england.com/images/accommodation/large/1480/lorton-house-self-catering-accommodation.jpg"
              alt="where to stay in england"
            />
          </a>
          <div class="p-5">
            <a href="/#">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                WHERE TO STAY IN ENGLAND
              </h5>
            </a>
          </div>
        </article>
      </div>
    </div>
  );
};

export default CardWhereToStay;
