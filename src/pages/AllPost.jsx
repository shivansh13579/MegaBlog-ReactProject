import React, {useState,useEffect} from 'react'
import { Container,PostCard } from '../components'
import appwriteService from "../appwrite/config";
function AllPost() {
    const [posts,setPosts] = useState([])
    useEffect(()=>{},[])
    appwriteService.getPost([]).then((posts) => {
        if(posts){
            setPosts(posts.documents)
        }
    })
  return (
    <div className='w-full py-8'>
    <Container>
        <div className='flex flex-wrap'>
           {posts.map((post)=>(
            
           ))}
        </div>
    </Container>
      
    </div>
  )
}

export default AllPost
