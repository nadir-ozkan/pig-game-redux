import React from 'react';

class ModalDialog extends React.Component {

  handleClose(){
    document.getElementById('myModal').style.display = "none";
  }

  render(){
    return (
      <div id="myModal" className="modal">

        <div className="modal-content">
          <div className="modal-header">
            <span className="close" onClick={this.handleClose}>&times;</span>
            <h2>{this.props.headerText}</h2>
          </div>
          <div className="modal-body">
            <h2>Pig Game Rules</h2>
            <p> Player who reaches the score 100 wins the game. </p>
            <p> Player can roll the dice and increase the current score as much as possible and should hold it by pressing hold button. </p>
            <p> If a player throws 1 players current score will be lost. </p>
            <p> If a player throws two 6 in a row, this will delete boht current score and holded score. </p>
            <h2>Credits</h2>
            <p> This game project is a part of the great Udemy course named <a href="https://www.udemy.com/the-complete-javascript-course">The Complete JavaScript Course: Build a Real-World Project </a>
              teached by <a href="https://www.udemy.com/user/jonasschmedtmann/"> Jonas Schmedtmann</a>. I highly recomend you take this course if you would like to learn advance parts of JS and to create wep applications using just JS.</p>
            <p> All the HTML and CSS is barrowed from the course content and is used with the permission of <a href="https://www.udemy.com/user/jonasschmedtmann/"> Jonas Schmedtmann</a>. </p>
            <p> Coded by <a href="https://www.linkedin.com/in/nadmez/"> Nadir Özkan </a> using React and Redux technologies as an exercise. You can access the code from <a href="https://bitbucket.org/huniyazilim/pig-game-redux">here</a>. </p>

          </div>
          <div className="modal-footer">
            <h3>{this.props.footerText}</h3>
          </div>
        </div>

      </div>
    );
  }
}

export default ModalDialog;
