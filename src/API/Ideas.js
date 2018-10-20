import React from 'react';
import axios from 'axios';

class Ideas extends React.Component {
  static updateIdea200() {
    axios.get("https://gentle-anchorage-67457.herokuapp.com/times")
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      })
  }
}

export default Ideas;
