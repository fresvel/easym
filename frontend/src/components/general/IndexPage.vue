<template>  
  <div class="ui grid" id="navbar">
      <div class="sixteen wide column">
        <div class="ui inverted segment" id="hmenu">
            <div class="ui inverted secondary menu">
                <a class="active item" @click="toggleVmenu()">
                Menu
                </a>
                <a class="item" @click="toggleNotify()">
                Notify
                </a>
                <a class="item">
                Friends
                </a>
            </div>
        </div>
      </div>
  </div>
  
  
  <div class="ui grid">
      <div class="three  wide column  mainmenu" id="vmenu" ref="vmenu">
        <div class="ui inverted vertical menu fluid" id="mainmenu" >
          <a class="item">
            Bio
          </a>
          <a class="item">
            Pics
          </a>
          <a class="item active">
            Companies
          </a>
          <a class="item active">
            Links
          </a>
        </div>
      </div>
    
      <div class="eleven wide stretched column" id="content" ref="content">
          <div class="ui segment">
            <LogrosCordinador></LogrosCordinador>
          </div>
      </div>
    
      <div class="two wide stretched column" id="vnotify" ref="vnotify">
        <div class="ui segment notify">
          This is an stretched grid column. This segment will always match the tab height
        </div>
      </div>
      
  </div>
  
  </template>
      
<script setup>  
  import LogrosCordinador from '../informes/LogrosCordinador.vue';
  import { ref } from 'vue';
  
  const vmenu = ref(null);
  const content = ref(null);
  const vnotify = ref(null);
  
  const toggleVmenu = () => {
      if (vmenu.value.style.display === 'none'){
          vmenu.value.style.display = 'block';
          if(vnotify.value.style.display === 'none'){
              content.value.className = 'thirteen wide stretched column'
              console.log("Class A")
          }else{
              content.value.className = 'eleven wide stretched column'
              console.log("Class B")
          }
      }else{
          vmenu.value.style.display = 'none';
          if(vnotify.value.style.display === 'none'){
              content.value.className = 'sixteen wide stretched column'
              console.log("Class A")
          }else{
              content.value.className = 'fourteen wide stretched column'
              console.log("Class B")
          }
      }
  
  
  };
  
  const toggleNotify = () => {
      if (vnotify.value.style.display === 'none'){
          vnotify.value.style.display = 'block';
          vnotify.value.className = 'two wide stretched column'
          if(vmenu.value.style.display === 'none'){
              content.value.className = 'fourteen wide stretched column'
              console.log("Class A")
          }else{
              content.value.className = 'eleven wide stretched column'
              console.log("Class B")
          }
      }else{
          vnotify.value.className = 'two wide column'
          vnotify.value.style.display = 'none';
          if(vmenu.value.style.display === 'none'){
              content.value.className = 'sixteen wide stretched column'
              console.log("Class A")
          }else{
              content.value.className = 'thirteen wide stretched column'
              console.log("Class B")
          }
          console.log("Class y")
  
      }
  };
      </script>
      
      <style scoped>
      #navbar {
      margin-bottom: -45px;
  }
  
  #mainmenu {
      height: 100vh;
      margin-top: 10px;
      background-color:rgb(0, 0, 15, 0.85);
  }
  
  
  
  .mainmenu {
      margin-top: 13px;
      background-color:rgb(0, 0, 15, 0.85);
  }
  
  #vmenu {
      display: block;
  }
  
  #vnotify {
      display: none;
  }
  .notify{
      background-color: rgb(74, 140, 255, 0.5);
      ;
  }
  
  #hmenu{
      background-color:rgb(0, 10, 50, 0.9);
  
  
  }
  
  #content {
      height: 100%;
  }
  
  
  #app{
      height: 100vh;
  }
  </style>
      