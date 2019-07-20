import React,{useState, useContext, useEffect} from 'react';
import axios from 'axios';
import styled from "styled-components";
import Comments from "./comments/Comments"
import {Image, Segment, Container, Input, Icon, Header, Grid, Form, Modal, Button} from 'semantic-ui-react';



const ViewVideo = () => { 
  return (
    <>
      <Image src={require('../images/starter-pic.png')} fluid />  
      <Segment.Group as={segmentStyle}>
        <Segment as={miniMargin}>
          <Grid columns={2}>
              <Grid.Column>
                <Header
                  as='h2'
                  content='Video Title'
                  subheader='Date Imported'
                />
              </Grid.Column>
              <Grid.Column textAlign="right">
                <Button basic>
                  <Icon color='yellow' name='thumbs up'/>
                  upvotes
                </Button>
                <Button basic>
                  <Icon color='yellow' name='thumbs down'/>
                  downvotes
                </Button>
              </Grid.Column>
          </Grid>
        </Segment>
        <Segment as={miniMargin}>
          <br/>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Header as='h2'>
                  <Image src={require('../images/avatar.png')} />
                  <Header.Content>
                    User Name
                    <Header.Subheader>X number of subscribers</Header.Subheader>
                  </Header.Content>
                </Header>
              </Grid.Column>
              <Grid.Column textAlign="right">
                <Button color='red'>
                    add as friend
                </Button>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Header as={descriptionFont}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
              ex ea commodo consequat.
              </Header>
              <br/>
            </Grid.Row>
          </Grid>
        </Segment>
      </Segment.Group>
      <Grid as={miniMargin}>
        <Grid.Row>
          <Grid.Column width={10}>
            <Comments/>
          </Grid.Column>
          <Grid.Column width={6}>
            <Header as={subheaderFont}>
              Other Videos
            </Header>
            <Segment>
              <Grid.Column>
                vid preview
              </Grid.Column>
              <Grid.Column>
                Video Description
              </Grid.Column>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
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
const subheaderFont = styled.div`
  font-size: 24px !important;
  font-weight: normal !important;
`

export default ViewVideo



        























// <Header as={subheaderFont}>
// X comments
// </Header>
// <Segment>
// <Header as='h1'>
//   <Image src={require('../images/miniAvatar.png')} />
//   <Input transparent placeholder='Add a public comment' as={inputWords} />
// </Header>
// </Segment>
// {/* THIS IS WHAT YOU MAP THROUGH !!!!!  */}
// <Segment>
// <Header as='h1'>
//   <Image src={require('../images/miniAvatar.png')} />
//   <Header.Content>
//     User Name
//     <Header.Subheader>how long ago posted</Header.Subheader>
//   </Header.Content>
//   <Header as={commentWords}>
//     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
//     dolore magna aliqua. 
//   </Header>
// </Header>
// </Segment>
// {/* THIS IS WHAT YOU MAP THROUGH !!!!!  */}
// {/* THIS IS WHAT YOU MAP THROUGH !!!!!  */}
// <Segment>
// <Header as='h1'>
//   <Image src={require('../images/miniAvatar.png')} />
//   <Header.Content>
//     User Name
//     <Header.Subheader>how long ago posted</Header.Subheader>
//   </Header.Content>
//   <Header as={commentWords}>
//     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
//     dolore magna aliqua. 
//   </Header>
// </Header>
// </Segment>
// {/* THIS IS WHAT YOU MAP THROUGH !!!!!  */}






