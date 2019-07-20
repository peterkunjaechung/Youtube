import React, { useState, useEffect, useContext } from "react";
import axios from 'axios'
import CommentForm from "./CommentForm";
import styled from 'styled-components';
import { Button, Icon, Comment, Label } from "semantic-ui-react";
import {AuthContext} from '../../providers/AuthProvider'; 

const defaultImage = "https://png.pngtree.com/svg/20161212/f93e57629c.svg"

const VideoComment = (props) => {
  const [comment, setComment] = useState([])
  const [showForm, setShowForm] = useState(false);
  const [userInfo, setUserInfo] = useState([])
  const video_id = props.video_id
  const comment_id = props.comment_id
  const comment_body = props.comment_body
  const delete_comment = props.delete_comment
  const edit_comment = props.edit_comment
  const user_id = props.user_id
  const {user, } = useContext(AuthContext)

  useEffect( () => {
    axios.get(`/api/videos/${video_id}/comments/${comment_id}`)
    .then( res => setComment(res.data))
  }, [])

  useEffect( () => {
    let id = comment_id
    axios.get(`/api/user-info/${user_id}/${id}`)
    .then( res => setUserInfo(res.data))
  }, [])

  const toggleForm = () => {
    setShowForm(!showForm)
  }

  const renderButtons = () => {
    if (user.id === user_id){
      return (
        <>
          <Button.Group>
            <Button size="tiny" icon color='teal' onClick={() => toggleForm()}>
              <Icon name="edit"/>
            </Button>
            <Button size="tiny" icon color='red' onClick={()=> delete_comment(comment_id)}>
              <Icon name='trash'/>
            </Button>
          </Button.Group>
        </>
      )
    }
  }

  return (
    <>
      <Comment.Content>
        {userInfo.map(u => (
          <Label as='a' image>
            <img src={u.user_image || defaultImage} />
            {u.user_name}
          </Label>
        ))}
        <Comment.Content>
          {comment_body}
        </Comment.Content>
        <div style = {{
          display: 'flex',
          alignSelf:'flex-end',
          marginTop:'10px',
          width: '1000px'
        }}>
        <Comment.Content>
          { showForm ? 
          <CommentForm
            editComment={edit_comment}
            video_id={props.video_id}
            comment_id={comment_id}
            comment_body={comment_body}
            toggleEdit={toggleForm}
          /> : 
          null}
        </Comment.Content>
        </div> 
      </Comment.Content>
      <Comment.Content>
        <Comment.Content>
          <Comment.Action>
            {user && renderButtons()}
          </Comment.Action>
        </Comment.Content>
        
      </Comment.Content>
    </>
  )
}

export default VideoComment; 
