import React, { useState, useEffect, } from 'react'
import axios from 'axios'
import VideoComment from './VideoComment'
import styled from "styled-components";
import CommentForm from './CommentForm'
// import { Comment, Container, Button, Icon, } from 'semantic-ui-react';
import {Image, Comment, Segment, Container, Input, Icon, Header, Grid, Form, Modal, Button} from 'semantic-ui-react';

const Comments = (props) => {
  const [comments, setComments] = useState([])
  const [showForm, setShowForm] = useState(false)
  const video_id = props.video_id

  useEffect(() => {
    axios.get(`/api/videos/${3}/comments`)
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

  return(
    <>
      <>
        <Header as={subheaderFont}>
          X comments
        </Header>
        <CommentForm
          comments={comments}
          setComments={setComments}
          addComment={addComment}
          video_id={props.video_id}
          toggleForm={toggle}
        />
      </>
      <>
        {comments.map(c => (
          <VideoComment 
            video_id = {3}
            comment_id = {c.id}
            comment_body = {c.body}
            user_id = {c.user_id}
            delete_comment={deleteComment}
            edit_comment={editComment}
            created={c.created_at}
          />
        ))}
      </>
    </>
  )
}

const miniMargin = styled.div`
  margin-right: 20px !important;
  margin-left: 20px !important;
`
const segmentStyle = styled.div`
  margin-right: 20px !important;
  margin-left: 20px !important;
  background: white !important;
`
const descriptionFont = styled.div`
  font-size: 16px !important;
  font-weight: normal !important;
  margin-right: 10px !important;
  margin-left: 10px !important;
`
const commentWords = styled.div`
  margin-top: 5px !important;
  margin-right: 10px !important;
  margin-left: 82px !important;
  font-size: 14px !important;
  font-weight: normal !important;
`
const subheaderFont = styled.div`
  font-size: 24px !important;
  font-weight: normal !important;
`
const inputWords = styled.div`
  font-size: 18px !important;
  font-weight: normal !important;
  margin: 5px !important;
`

export default Comments; 
