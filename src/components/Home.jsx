import React from 'react'
import { Link } from 'react-router-dom'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl ml-0">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
            <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-9 h-full sm:h-full sm:w-full">
              <DotLottieReact src='https://lottie.host/cb768ee6-b422-477c-ae0f-8b8e879ed304/L9iMLwzhHU.lottie' loop autoplay/>
                </div>
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-2">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="lg:text-3xl lg:mr-0 font-bold sm:text-2xl sm:absolute sm:top-0 right-9">
                        Welcome to React-Router-DOM
                        </h2>
                    </div>
                </div>
          <h1 className="text-center sm:text-lg py-10 font-medium lg:text-3xl lg:relative lg:bottom-10 lg:left-11 sm:relative sm:left-1.5 sm:bottom-8">
            <p>This is a demo project built to practice routing with React Router DOM.</p>
            <p>Use the navigation above to explore different pages.</p>
          </h1>
            </aside>
        </div>
  )
}

export default Home