const myCircleAnimationComponent = {
    schema: {
      radius: {type: 'number', default: 0.5},
      tilt: {type: 'number', default: 0.4},
      angularSpeed: {type: 'number', default: -2.0},
    },
    init() {
        const {object3D} = this.el

        const {radius, tilt, angularSpeed} = this.data

        const xPosition = angle => radius * Math.cos(angle)
        const yPosition = angle => radius * Math.sin(angle)
        const zPosition = angle => tilt * Math.cos(angle)

        const onready = () => {
        console.log("reality ready")
        this.el.sceneEl.removeEventListener('realityready', onready)
        object3D.visible = false
        }

        this.el.sceneEl.addEventListener('realityready', onready)


        const initialAngle = 2 * Math.random() * Math.PI
        object3D.position.copy({
            x: xPosition(initialAngle),
            y: yPosition(initialAngle),
            z: zPosition(initialAngle),
        });
        object3D.visible = true


  
    //   this.el.sceneEl.addEventListener('arjs:source-found', setModel)
    //   this.el.sceneEl.addEventListener('arjs:source-found', showModel);
    //   this.el.sceneEl.addEventListener('arjs:source-lost', hideModel);
    },
    tick() {
        const {object3D} = this.el;

        // console.log(`The position is: ${object3D.position.x} ${object3D.position.y} ${object3D.position.z}`);

        const xPosition = angle => radius * Math.cos(angle)
        const yPosition = angle => radius * Math.sin(angle)
        const zPosition = angle => tilt * Math.cos(angle)
        
        const {radius, tilt, angularSpeed} = this.data
        const deltaTime = 1.0 / 55.0
        const deltaTheta = angularSpeed * deltaTime
        const angle = Math.atan2(object3D.position.y, object3D.position.x) + deltaTheta
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

        this.el.setAttribute('rotation', `${0} ${toDegrees(-angle / 16.0) * angularSpeed} ${0}`)
        // console.log(this.el.getAttribute('rotation'))
        // object3D.scale.set(detail.scale, detail.scale, detail.scale)
        object3D.visible = true
  
        // console.log("I am seeing the image.")
    }
  }
  
AFRAME.registerComponent('circle-animation', myCircleAnimationComponent);
  