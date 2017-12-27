import axios from 'axios'

const printTitle = (text) => console.log(text)

const getPost = async (postId) => {
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts/' + postId
  const res = await axios.get(apiUrl)
  printTitle(res.data.title)
}

getPost(1)
