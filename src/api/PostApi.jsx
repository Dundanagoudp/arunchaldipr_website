import axios from "axios";

const api=axios.create({
      baseURL:"https://jsonplaceholder.typicode.com",
})

// get post data 

export const PostsData=()=>{
      return api.get(`/posts`);
}

// export const PostPhoto=()=>{
//       return api.get(`/photos`);
// }