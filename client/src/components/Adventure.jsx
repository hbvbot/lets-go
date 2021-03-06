import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class Adventure extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address0: '',
      address1: '',
      image_url: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const context = this;
    axios({
      method: 'post',
      url: '/food',
      data: {
        zipcode:90045
      }
    }).then(function(res) {
      const item = res.data.businesses[Math.floor(Math.random()*res.data.businesses.length)];
      context.setState({
        name: item.name,
        address0: `${item.location.display_address[0]}`,
        address1: `${item.location.display_address[1]}`,
        image_url: item.image_url
      });
      console.log(item)
      //RES SENDING BACK THIS INFO
      //item.name, item.url, item.image_url,
      //item.address1, item.city, item.state,
      //item.zip_code
    });
  }

  render() {
    return (
      <div className="adventure-container" onClick={this.handleClick}>
        <h4>Test</h4>
        <h3>{this.state.name}</h3>
        <h6>{this.state.address0}</h6>
        <h6>{this.state.address1}</h6>
        <img className="images" src={this.state.image_url} alt={this.state.name} />
      </div>
    );
  }
}



export default Adventure;
