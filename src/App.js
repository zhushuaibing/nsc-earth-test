import React, { Component } from 'react';
import NSCEarth,{NSCEarthUI,HomeWidget} from 'nsc-earth';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.NSCEarth = new NSCEarth(window.Cesium);
  }

  flyTo() {
    const cameraView = {
      position: [110.5,
        26.0,
        3000],
      heading: 10, pitch: -30, roll: 0
    };
    this.NSCEarth.flyTo(cameraView);
  }


  addHomeWidget() {
    const cameraView = {
      position: [110.5,
        26.0,
        3000],
      heading: 10, pitch: -30, roll: 0
    };
    this.NSCEarth.addWidget('HomeWidget', HomeWidget, 'bottom-right', { cameraView }).then(widget => {
      console.log(widget);
    }).catch(error => {
      console.log(error);
    });
  }

  removeHomeWidget() {
    this.NSCEarth.removeWidget('HomeWidget');
  }

  render() {
    return (
      <div>
        <div className='NSCEarthViewContainer'>
          <NSCEarthUI NSCEarth={this.NSCEarth} >
            <div style={{ backgroundColor: 'red' }}>
              MyToolbar
          </div>
          </NSCEarthUI>
        </div>
        <div>
          <button onClick={this.flyTo.bind(this)}>flyTo</button>
          <button onClick={this.addHomeWidget.bind(this)}>AddHomeWidget</button>
          <button onClick={this.removeHomeWidget.bind(this)}>RemoveHomeWidget</button>
        </div>
      </div>
    );
  }
}

export default App;
