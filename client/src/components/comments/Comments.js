import React, {useState, useEffect} from 'react'
import {Segment, Comment, Image} from 'semantic-ui-react'; 
import axios from 'axios'; 

const Comments = () => {
  const [comments, setComments] = useState([]); 


  // render all comments for the video 
  useEffect(() => {
    axios.get(`/api/videos/${video_id}/comments`)
    .then( res => setComments(res.data))

  }, [])

  // add comments 




  return (
    <Segment padded raised>

      <Comment.Group>

      </Comment.Group>
      

      
    </Segment>
  )
}

export default Comments
