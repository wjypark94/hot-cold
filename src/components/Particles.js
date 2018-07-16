import React, {Component} from 'react';
import Particles from 'react-particles-js';

class ParticlesEffect extends Component {
    render(){
        return(
            <div>
                <Particles 
              params={{
            		particles: {
                  number: {
                    value: 250,
                    density: {
                      enable: true,
                      value_area: 900
                    }
                  },
                  line_linked: {
                    enable: true,
                    distance: 20,
                    color: "#ffffff",
                    opacity: 0.4,
                    width: 1
                  },
                  "shape": {
                    "type": "polygon",
                    "stroke": {
                      "width": 0,
                      "color": "#000000"
                    },
                    "polygon": {
                      "nb_sides": 5
                    },
                  }
                 },
                  "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                      "onhover": {
                        "enable": true,
                        "mode": "repulse"
                      },
                      "onclick": {
                        "enable": true,
                        "mode": "push"
                      },
                      "resize": true
                    },
                    "modes": {
                      "grab": {
                        "distance": 400,
                        "line_linked": {
                          "opacity": 1
                        }
                      },
                      "repulse": {
                        "distance": 200,
                        "duration": 0.4
                      }
                    }
                  },
                  "retina_detect": true
            	}}
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: '0',
                right: '0',
                bottom: '0',
                left: '0',
                zIndex: -1,
              }}
            />
            </div>
        )
    }

}

export default ParticlesEffect;