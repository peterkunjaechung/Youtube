import React, {useState, useEffect} from 'react'
import {Segment, Comment, Image} from 'semantic-ui-react'; 
import axios from 'axios'; 

const Comments = () => {
  const [toggleForm, setToggleForm ] = useState(false); 
  const [comments, setComments] = useState([]); 


  // render all comments for the video 
  useEffect(() => {
    axios.get(`/api/videos/${video_id}/comments`)
    .then( res => setComments(res.data))
  }, []); 

  // 





  // render individual comments 
  const renderComments = () => {
    {comments.map(comment => {
      <VideoComment
      video_id={comment.video_id}
      comment_id={comment_id}
      title={comment.title}
      body={comment.body}
      user_id={comment.user_id}



      />
    })}
  }




  return (
    <Segment padded raised>

      <Comment.Group>
       {renderComments()}
      </Comment.Group>
      

      
    </Segment>
  )
}

export default Comments
