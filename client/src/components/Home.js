import React from 'react';
import axios from 'axios';
import { Link, } from 'react-router-dom';
import { Header, Image, Grid, Card, Button, Icon, } from 'semantic-ui-react';

class Home extends React.Component {
  state = { videos: [], };
  
  componentDidMount() {
    axios.get('/api/videos')
      .then(res => console.log(res.data))//this.setState({ videos: res.data, }))
  }
  
  // sample = () => {
  //   const { videos, } = this.state;

  //   if (videos.length) {
  //     const index = Math.floor(Math.random() * videos.length);
  //     return videos[index];
  //   } else {
  //     return null;
  //   }
  // }

  // downVote = (id) => {
  //   const { videos, } = this.state;
  //   this.setState({ videos: videos.filter( v => v.id !== id ), });
  // }

  // upvote = (id) => {
  //   const { videos, } = this.state;
  //   axios.put(`/api/videos/${id}`)
  //     .then( () => this.setState({ videos: videos.filter( v => v.id !== id ), }) )
  // }
  
  render() {
    const { videos, } = this.state;
      return (
        <>
          <br />
          <Header as='h1'>All Videos</Header>
          <br />
          <Grid columns={5}>
            <Grid.Row>
          {videos.map( v => (
              <Grid.Column>
                <Image src={require(`../images/${v.thumbnail}`)} />
                <Header>
                  {v.title}
                </Header>
              </Grid.Column>

          ))}
            </Grid.Row>
          </Grid>
        </>
      );
}
}

export default Home;


// {videos.map(v => )}
//           <Card key={video.id}>
//             <Image src={require('../images/starter-pic.png')} />
//             <Card.Content>
//               <Link to={`/videos/${video.id}`}>
//               <Card.Header>
//                 { video.title }
//               </Card.Header>
//               <Card.Description>
//                 { video.genre }
//               </Card.Description>
//               </Link>
//               <Card.Meta>
//                 { video.description }
//               </Card.Meta>
//             </Card.Content>
//             <Card.Content extra>
//             <Button color="red" icon basic onClick={() => this.downVote(video.id)}>
//                 <Icon name="thumbs down" />
//               </Button>
//               <Button color="green" icon basic onClick={() => this.upvote(video.id)}>
//                 <Icon name="thumbs up" />
//               </Button>
//             </Card.Content>
//           </Card>
//         </>