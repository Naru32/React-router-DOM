import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

  let data = useLoaderData()

let [repos,setRepos] =  useState([])
 useEffect(()=>{
   fetch(
    'https://api.github.com/users/Naru32/repos'
).then(
    res=> res.json()
).then(repo => 
    {
    //    console.log(data);
        setRepos(repo)
    }
)   
 }, [])   
 console.log(data);
 console.log(repos);
  
  return (
    <>
    <div className='py-14'>
        <div className='className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6'>
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center">
                    <div className="md:5/12 lg:w-5/12 md:mx-auto">
                        <img
                            src={data.avatar_url}
                            alt="image"
                            className='rounded-2xl lg:size-72 sm:size-4/12 sm:mx-auto md:size-44'
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12 md:my-auto">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl sm:text-2xl sm:text-center">
                        Github Profile
                        </h2>
                        <div className='container m-auto px-6 text-gray-600 md:px-8 xl:px-6 sm:text-center sm:text-xl'>
                         Username : {data.login}
                         <br />
                         Followers : {data.followers} 
                        </div>
                    </div>
                    <div className='lg:w-6/12 md:my-auto text-lg font-bold'>
                      Total projects: {data.public_repos}
                    </div>
          </div>          
          </div>
    </div>
   <div className='className="max-w-4xl mx-auto p-4'>
   <h2 className="text-2xl text-gray-900 font-bold md:text-4xl sm:text-2xl sm:text-center flex items-center justify-center">
                        My github Repositories
                        </h2>
    <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center sm:bg-[#e5e5e5] sm:pb-0 mt-1 sm:space-y-0 sm:px-4 sm:w-fit">  
                          {
                            repos.map((val)=> {
                              return(
                                <div key={val.id} className='border border-gray-200 rounded-2xl shadow-sm p-4 hover:shadow-md transition duration-300 bg-gray-100'>
                                <a  
                                href={val.html_url}
                                target="_blank"
                                rel="noreferrer"
                                className="text-xl font-semibold text-[#58727f] hover:underline">
                                  {val.name}
                                </a>
                                <p className='text-gray-700 mt-2'>
                                {val.description ? val.description : "No description provided"}
                                </p>
                                </div> 
                              )
                            })
                          }
                    
    </div>
    </div> 
    </>
  )
}

export default Github