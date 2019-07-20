import React from 'react';
import axios from 'axios';
import { Link, } from 'react-router-dom';
import { Header, Image, Card, Button, Icon, } from 'semantic-ui-react';

class Home extends React.Component {
  state = { videos: [], };
  
  componentDidMount() {
    axios.get('/api/videos')
      .then(res => this.setState({ videos: res.data, }))
  }
  
  sample = () => {
    const { videos, } = this.state;

    if (videos.length) {
      const index = Math.floor(Math.random() * videos.length);
      return videos[index];
    } else {
      return null;
    }
  }

  downVote = (id) => {
    const { videos, } = this.state;
    this.setState({ videos: videos.filter( v => v.id !== id ), });
  }

  upvote = (id) => {
    const { videos, } = this.state;
    axios.put(`/api/videos/${id}`)
      .then( () => this.setState({ videos: videos.filter( v => v.id !== id ), }) )
  }
  
  render() {
    const video = this.sample();
    if (video) {
      return (
        <div>
          <br />
          <Header as='h1'>Video</Header>
          <br />
          <Card key={video.id}>
            <Image src={video.trailer} />
            <Card.Content>
              <Card.Header>
                { video.title }
              </Card.Header>
              <Card.Description>
                { video.genre }
              </Card.Description>
              <Card.Meta>
                { video.description }
              </Card.Meta>
            </Card.Content>
            <Card.Content extra>
            <Button color="red" icon basic onClick={() => this.downVote(video.id)}>
                <Icon name="thumbs down" />
              </Button>
              <Button color="green" icon basic onClick={() => this.upvote(video.id)}>
                <Icon name="thumbs up" />
              </Button>
            </Card.Content>
          </Card>
          <Link to="/video">
            <Button color="blue">
              My Videos
            </Button>
          </Link>
        </div>
      );
    } else {
      return <Header textAlign="center">No More Videos</Header>
    }
  }
}

export default Home;

