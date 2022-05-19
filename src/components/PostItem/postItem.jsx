import React, {useState} from 'react';
import nasaLogo from '../../assets/nasa-logo.png';
import heartBlank from '../../assets/heartempty.svg';
import heartFull from '../../assets/heart.svg';
import './postItem.scss';

function PostItem(props) {

  const [liked, setLiked] = useState("unliked");

  function changeLike() {
    if (liked === "unliked") {
      setLiked("liked");
    } else {
      setLiked("unliked");
    }
  }

  return (
    <div className='card' tabIndex={0}>
      <div className='card__nav'>
        <img className="card__nasaLogo" src={nasaLogo} alt="nasa logo"></img>
        <p>Nasa</p>
      </div>
      <img src={props.post.url} alt="space" className='card__img'></img>
      <div className='card__content'>
        <div className='card__like'>
          {liked === "unliked" ? <img src={heartBlank} alt="empty heart" className='card__heart' onClick={changeLike}></img> :
          <img src={heartFull} alt="full heart" className='card__heart' onClick={changeLike}></img>
        }
        </div>
        <div className='card__info'>
          <h2 className='card__title'>{props.post.title}</h2>
          <h2 className='card__date'>{props.post.date}</h2>
        </div>
        <div className='card__desc-box'>
          <p className='card__desc'>{props.post.explanation}</p>
        </div>
      </div>
    </div>
  );
}

export default PostItem;