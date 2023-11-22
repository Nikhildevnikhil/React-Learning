import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";


function Github(){
    const data = useLoaderData();
    // const [data,setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/nikhildevnikhil')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // },[])
    return(
        <div className='text-center p-4 text-3xl bg-gray-500 m-4 text-white'>
            Github Followers : {data.followers}
            <img src={data.avatar_url} alt="git dp" width={200}></img>
        </div>
    );
}
export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/nikhildevnikhil')
    return response.json();
}