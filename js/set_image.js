//Visibility toggle
    AFRAME.registerComponent('splash', {
      init: function () {
        var go = document.querySelector('#go_button');//initializing go button entity
        var menu = document.querySelector('#home_page');//initializing home page entity
        //go button click event
        go.addEventListener('click', () => { 
        menu.setAttribute('visible', true);//toggle visibility
        });

        
      }
    });

//3D box
    AFRAME.registerComponent('wireframe', {
        dependencies: ['material'],
        init: function () {
        this.el.components.material.material.wireframe = true;
        }
    });

//Site Content
    AFRAME.registerComponent('homescreen', {
        //dependencies: ['material'],
        init: function () {
          var removeButton = document.querySelector('#remove_button');

          removeButton.addEventListener('click', () => {
            var contentLayout = document.querySelector('#content_layout');
            contentLayout.parentNode.removeChild(contentLayout);
            return false;
          });
        },

        update: function(){
          var menuButton = document.querySelector('#menu_button');
          var menuPage = document.querySelector('#menu_page');

          menuButton.addEventListener('click', ()=>{
            menuPage.setAttribute('visible', true);
            console.log("menupage");
          });

        }
    });    