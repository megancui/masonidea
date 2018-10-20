import React from 'react';
import axios from 'axios';

const uri = "https://bigideahunt.herokuapp.com/";

class Ideas extends React.Component {
  static updateIdea200() {
    axios.get(uri + "times")
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      })
  }

  static getIdeas(callback) {
    axios.get(uri + "get/ideas")
      .then(function(response) {
        console.log(response);
        callback(response.data);

      })
      .catch(function(error) {
        console.log(error);

      })
  }
}

export default Ideas;
