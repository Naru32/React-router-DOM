import React from 'react'

function About() {
  return (
    <div className="py-16 sm:bg-[#e5e5e5]">
    <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
                <img
                    src="/public/Screenshot 2025-04-11 141903.png"
                    alt="image"
                    className='rounded-md'
                />
            </div>
            <div className="md:7/12 lg:w-6/12">
                <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                What I Learned About React Router DOM
                </h2>
                <p className="mt-6 text-gray-600">
                While building this project, I took a deeper dive into the React Router DOM library — and I must say, it truly unlocks the full potential of building single-page applications (SPAs) in React. 
              </p>
                <p className="mt-4 text-gray-600">
                Through hands-on experience, I learned how to:
<p>
🧭 Navigate between multiple components without reloading the page, creating a seamless SPA experience.
</p>
<p>
✨ Highlight the active route using NavLink, which improves UX by showing users where they are.
</p>
<p>
⚡ Use Loaders to fetch data or make API calls before rendering a route, making the app feel faster and more optimized.  
</p>
<p>
🛠️ Build nested routes and layouts, allowing for better-organized code and scalable route structures.
</p>
<p>
⛔ Handle 404 or unmatched routes using Route path="*" for graceful error handling.
</p>
<p>
🔄 Navigate programmatically using useNavigate() — helpful for redirecting users after a form submission or other events.
</p>
                </p>
            </div>
        </div>
    </div>
</div>
  )
}

export default About