import React, {useEffect, useState} from "react";
import {Form, Button, Header,  } from 'semantic-ui-react';
import axios from 'axios'


const CreateVideo = (props) => {
    
    const [video, setVideo] = useState([])
    const [title, setTitle] = useState([])
    const [description, setDescription] = useState([])
    const [genre, setGenre] = useState([])
    const [duration, setDuration] = useState([])
    const [trailer, setTrailer] = useState([])    
    
    const handleSubmit = (e) => {
        e.preventDefault();
         axios.post("/api/videos", { title, description, genre, duration, trailer, } )
         .then( res => {
           props.history.push("/")
     
         })
      }
   

    const handleChangeTitle = (e) => {
        setTitle( e.target.value); 
      }
    const handleChangeDescription = (e) => {
        setDescription( e.target.value); 
      }
    const handleChangeGenre = (e) => {
        setGenre( e.target.value); 
      }
    const handleChangeDuration = (e) => {
        setDuration( e.target.value); 
      }
    const handleChangeTrailer = (e) => {
        setTrailer( e.target.value); 
      }
     
    
    return (
    <>
    <Header 
        as='h1'
        textAlign='center'
        style={{padding: '20px'}}
        > 
        
    Upload Your Video </Header>

       <Form onSubmit={handleSubmit}>
            <Form.Input
                placeholder="Title"
                label="title"
                 value={title}
                onChange={handleChangeTitle}
          />
            <Form.Input
                placeholder="Genre"
                label="genre"
                 value={genre}
                onChange={handleChangeGenre}
          />
            <Form.Input
                placeholder="Duration"
                label="duration"
                 value={duration}
                onChange={handleChangeDuration}
          />
            <Form.Input
                placeholder="Trailer"
                label="trailer"
                 value={trailer}
                onChange={handleChangeTrailer}
          />
            <Form.Input
                placeholder="Description"
                label="description"
                 value={description}
                onChange={handleChangeDescription}
          />

           <Button onClick={handleSubmit}> 
            Submit
           </Button>
        </Form>
    </>
    )
}

export default CreateVideo;