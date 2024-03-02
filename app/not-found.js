import LargeButton from '@/components/Button/LargeButton';
import React from 'react';

const Page = () => {

  return (
    <div className="py-16">
      <div className="container mx-auto px-5 md:px-0 flex flex-col  justify-center items-center">
        <div className="mt-5  flex flex-col items-center justify-center w-full md:w-2/3 lg:w-1/2 xl:w-2/6">
          <img src="/assets/img/404.png" alt="Not Found" />
          <p className="text-center  text-3xl font-semibold">Page not found</p>
          <p className="text-center mt-5">
            Oops! Looks like you followed a bad link. If you think this is a problem with us, please tell us.
          </p>
          <div className="mt-5 w-full md:w-1/2">
            <a href="/" className="w-full">
              <LargeButton
                text="Go Back Home"
                textColor="text-white"
                background="bg-success"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;