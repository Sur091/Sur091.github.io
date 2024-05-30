const myAddFriendComponent = {
    schema: {
    },
    init() {

      const addFriend = () => {
        console.log("Count addFriend()")
        const element = document.createElement('a-entity')
        // Copying properties
        const childElementComponents = this.el.children[0].components;
        ['gltf-model', 'animation-mixer', 'scale'].forEach((key) => {
          const attributeName = childElementComponents[key].attrName
          const attributeValue = childElementComponents[key].attrValue
          element.setAttribute(attributeName, attributeValue)
        })
        // Add randomness to the my-circle-animation component
        element.setAttribute('my-circle-animation',
          `radius:${Math.random() * 300 + 30}; 
          tilt:${Math.random() * 0.5}; 
          angularSpeed:${(Math.random() < 0.5) ? 2.0 : -2.0}`)
        // element.el.setAttribute('position', `${x} ${y} ${z}`)
        if (this.el.children.length <= 13) {
          this.el.appendChild(element)
        }
      }
  
      this.el.sceneEl.addEventListener('click', addFriend)
    },
  }
  
AFRAME.registerComponent('add-fiend', myAddFriendComponent);

  