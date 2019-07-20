import React, { useState, useEffect, } from "react";
import axios from 'axios'
import styled from "styled-components";
import { Header, Segment, Icon, Grid, Input, Image } from "semantic-ui-react";

const CommentForm = (props) => {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const video_id = props.video_id
  const comment_id = props.comment_id

  useEffect( () => {
    if(props.comment_id){
      setTitle(props.comment_title)
      setBody(props.comment_body)
    } else {
      setTitle("")
      setBody("")
    }
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    if (comment_id) {
      return axios.put(`/api/videos/${video_id}/comments/${comment_id}`, {
        title: title,
        body: body
      })
        .then(res => {
          props.editComment(comment_id, res.data)
          props.toggleEdit()
        })
    } 
    else {
      axios.post(`/api/videos/${video_id}/comments`, {title: title, body: body, video_id:video_id})
      .then(res => {
        props.addComment(res.data)
        props.toggleForm()
      })
    };
  };

  return ( 
  <Segment>
    <Grid>
      <Grid.Row>
        <Grid.Column width={14}>
          <Header as='h1'>
            <Image src={require('../../images/miniAvatar.png')} />
            <Input 
              transparent 
              // label = "Body"
              required 
              value = {body}
              placeholder='Add a public comment' 
              as={inputWords} 
              onChange = {(e) => setBody(e.target.value)}
              />
          </Header>
        </Grid.Column>
        <Grid.Column width={2}>
          <Icon 
            name='paper plane' 
            color='grey' 
            size="large" 
            onClick={handleSubmit} 
            style={{cursor:'pointer'}}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
  );
};

const inputWords = styled.div`
  font-size: 18px !important;
  font-weight: normal !important;
  margin: 5px !important;
`

export default CommentForm;