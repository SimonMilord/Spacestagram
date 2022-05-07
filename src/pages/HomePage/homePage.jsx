import React, {useEffect, useState} from 'react';
import './homePage.scss';
import PostItem from '../../components/PostItem/postItem';
import axios from "axios";
import Loader from "../../components/Loader/loader";

const URL = process.env.REACT_APP_API_URL;
const KEY = process.env.REACT_APP_API_KEY;

function HomePage(props) {

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(()=> {
    console.log("in the useeffect");
    getPosts();
  }, []);

  function getPosts() {
    setIsLoading(true);
    axios
      .get(`${URL}api_key=${KEY}&count=10`)
      .then((res) => {
        setPosts(res.data);
        setIsLoading(false);
        console.log(res.data);
      })
      .catch((err) => {
        setErrorMessage("Unable to fetch Nasa pictures");
        setIsLoading(false);
      });
  }

  return (
    <div className='homepage'>
      {isLoading ? <Loader /> :
      <ul className='list'>
        {posts && posts.map((post, key) => (
          <PostItem post={post} key={key}/>
        ))}
      </ul>
      }
    </div>
  );
}

export default HomePage;