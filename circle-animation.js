const myCircleAnimationComponent = {
    schema: {
      radius: {type: 'number', default: 0.5},
      tilt: {type: 'number', default: 0.4},
      angularSpeed: {type: 'number', default: -2.0},
    },
    init() {
        const {object3D} = this.el

        const {radius, tilt, angularSpeed} = this.data

        const center = {
            x: 225.0,
            y: -125.0,
        }
        
        // Functions to calculate the x, y, and z positions
        const xPosition = angle => radius * Math.cos(angle) + center.x
        const zPosition = angle => radius * Math.sin(angle) + center.y
        const yPosition = angle => tilt * Math.cos(angle)
    
        // Calculate the position
        const initialAngle = 2 * Math.random() * Math.PI
        object3D.position.copy({
            x: xPosition(initialAngle),
            y: yPosition(initialAngle),
            z: zPosition(initialAngle),
        });
        object3D.visible = true;
    },

    tick() {
        const {object3D} = this.el;

        const center = {
            x: 225.0,
            y: -125.0,
        }

        // console.log(`The position is: ${object3D.position.x} ${object3D.position.y} ${object3D.position.z}`);

        const xPosition = angle => radius * Math.cos(angle) + center.x
        const zPosition = angle => radius * Math.sin(angle) + center.y
        const yPosition = angle => tilt * Math.cos(angle)
        
        const {radius, tilt, angularSpeed} = this.data
        const deltaTime = 1.0 / 55.0
        const deltaTheta = angularSpeed * deltaTime
        const angle = Math.atan2(object3D.position.z - center.y, object3D.position.x - center.x) + deltaTheta
        // const angle = speed * time
        object3D.position.copy({
          x: xPosition(angle),
          y: yPosition(angle),
          z: zPosition(angle),
        })
        // Finding and setting the rotation of the object.
        const toDegrees = (theta) => {
          const factor = 180.0 * Math.PI
          return factor * theta
        }

        this.el.setAttribute('rotation', `${toDegrees(angle) / 8.0 - 90} ${90} ${-90}`)
    }
  }
  
AFRAME.registerComponent('circle-animation', myCircleAnimationComponent);
  