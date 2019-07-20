import React, { useState, useEffect, } from 'react'
import axios from 'axios'
import VideoComment from './VideoComment'
import CommentForm from './CommentForm'
import { Comment, Container, Button, Icon, } from 'semantic-ui-react';

const Comments = (props) => {
  const [comments, setComments] = useState([])
  const [showForm, setShowForm] = useState(false)
  const video_id = props.video_id

  useEffect(() => {
    axios.get(`/api/videos/${video_id}/comments`)
    .then( res => setComments(res.data))
  }, [])

  const toggle = () =>{
    setShowForm(!showForm)
  }

  const addComment = (comment) =>{
    setComments([...comments, comment])
  }

  const editComment = (id, comment) => {
    const editedComment = comments.map(c => {
      if (c.id === id) {
        return comment
      } 
      else {
        return c
      }
    })
    return setComments(editedComment)
  }

  const deleteComment = (c_id) =>{
    axios.delete(`/api/videos/${props.video_id}/comments/${c_id}`)
    .then(res =>{
      setComments(comments.filter(c => c.id !== c_id))
      })
  }

  const showComments = () => {
    return (
      <Container>
        {comments.map(c => (
          <VideoComment 
            video_id = {video_id}
            id = {c.id}
            body = {c.body}
            user_id = {c.user_id}
            delete_comment={deleteComment}
            edit_comment={editComment}
            showComments={showComments}
          />
        ))}
      </Container>
    )
  }

  return(
    <>
      <div style= {{marginTop: '30px'}}>
        <hr/>
        <h1>Comments</h1>
        <Button color='red' onClick={toggle}>
          <Icon name='paper plane outline'/>
        </Button>
        { showForm ? 
          <CommentForm
            showComments={showComments}
            comments={comments}
            setComments={setComments}
            addComment={addComment}
            video_id={props.video_id}
            toggleForm={toggle}
          /> : 
          null
        }
        <div style={{display:'flex', justifyContent:'flex-start', marginTop:'30px'}}>
          <Comment.Group>
            {showComments()}
          </Comment.Group>
        </div>
      </div>
    </>
  )
}

export default Comments; 
