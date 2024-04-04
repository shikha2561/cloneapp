import React,{ useEffect, useState } from 'react'
// import Image from "./image.jpg";*/
// import "./Banner.css";
import axios from "axios";
import {Oval} from "react-loader-spinner";


function Banner() {
  let [bannerMovie, setBanner] = useState("");

    useEffect(function () {
        (function () {
            axios
                .get
                ("https://api.themoviedb.org/3/trending/all/week?api_key=565dda78aae2b75fafddbc4320a33b38")
                .then((res) => {
                    // console.table(res.data.results);
                    setBanner(res.data.results[0]);
                })
        })()
    }, [])
  return (
    <>
    {
      bannerMovie==""? 
   <div className=" flex justify-center"> 
  <Oval
  height="80"
  width="80"
  radius="9"
  color="gray"
  secondaryColor='gray'
  ariaLabel="loading"
  
  
/> </div>  
:
      <div className={`
      h-[40vh] md:h-[60vh]
bg-center bg-cover
flex items-end 
`}
          style={{
              backgroundImage:
                  `url(
                      https://image.tmdb.org/t/p/original/t/p/original/${bannerMovie.backdrop_path})`
          }}
      >
          <div
              className="text-xl md:text-3xl text-white bg-gray-900 bg-opacity-60 p-4 text-center w-full"
          >{bannerMovie.name}</div>
      </div>
}

  

</>
   
/* <img src={Image}/>
    <div className="parent banner-head

    ">
    <div
         className="bg-zinc-900
                  text-white
                  text-2xl
                  font-bold
                   py-10
                   bg-opacity-40
                   text-center
    "
       >M3GAN
       </div>
  </div> */

  )
}

export default Banner