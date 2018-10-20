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
    axios.get(uri + "ideas/get")
      .then(function(response) {
        //console.log(response);

        var data = response.data;

        for (var i = 0; i < data.length; i++) {
          console.log(data);
          data[i].fields.tags = [];

          if (data[i].fields.h1 != "") {
            data[i].fields.tags[0] = data[i].fields.h1;

            if (data[i].fields.h2 != "") {
              data[i].fields.tags[1] = data[i].fields.h2;

              if (data[i].fields.h3 != "") {
                data[i].fields.tags[2] = data[i].fields.h3;
              }
            }
          }
        }

        console.log(data);

        callback(data);

      })
      .catch(function(error) {
        console.log(error);

      })
  }

  static addIdea(data) {

  }
}

export default Ideas;
