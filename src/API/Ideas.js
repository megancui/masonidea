import React from 'react';
import axios from 'axios';

const uri = "https://bigideahunt.herokuapp.com/";
//const uri = "https://localhost:5000";

//    pdata = {
//   "idea": "10010100",
//   "h1": "cafeteria",
//   "h2": "fun",
//   "h3": "experience",
//   "description": "this is my description",
//   "isClaimed": 0
// }

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
          //console.log(data);
          data[i].fields.tags = [];

          if (data[i].fields.h1 !== "") {
            data[i].fields.tags[0] = data[i].fields.h1;

            if (data[i].fields.h2 !== "") {
              data[i].fields.tags[1] = data[i].fields.h2;

              if (data[i].fields.h3 !== "") {
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

  static addIdea(data, callback) {

    axios.post(uri + "ideas/add", data)
      .then(function(response) {
        console.log(response);
        callback();
        //alert("Your idea has been added. Refresh the page to see it.");
      })
      .catch(function(error) {
        console.log(error);
      })
  }

  static claimIdea(data, callback) {
    axios.post(uri + "ideas/claim", data)
      .then(function(response) {
        console.log(response);
        console.log("sent");
        callback();
        //alert("Your idea has been added. Refresh the page to see it.");
      })
      .catch(function(error) {
        console.log(error);
      })
  }
}

export default Ideas;
