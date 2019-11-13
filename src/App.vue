<template>
  <div class='app'>
    <div>
      <div class='header'>
        <img class='header__logo' src='img/logo.png'/>
        <h1 class='header__title'>Number</h1>
      </div>
      <h2 style='text-align: center'>
        Smooth number transitions library for Vue.js
      </h2>
      <v-number class='v-number' :value='number' />
    </div>
    <div style='margin-top: 100px'>
      <p>Usage:</p>
      <code>
        <div>
          &#60;v-number v-model='someValue'&#62;
        </div>
      </code>
      <!-- <input style='margin-top: 15px' type='number' v-model='number' @focus='clearInterval' /> -->
    </div>
    <div style='flex: 1'></div>
    <div>
      <iframe src="https://ghbtns.com/github-btn.html?user=maxflex&repo=v-number&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>
    </div>
  </div>
</template>

<script>
import VNumber from './components/VNumber'

export default {
  components: {
    VNumber
  },

  data() {
    return {
      number: 1,
      intervalSpeed: 2000,
      interval: null,
    }
  },
  
  created() {
    this.startInterval()
  },

  methods: {
    startInterval() {
      this.interval = setInterval(() => this.number++, this.intervalSpeed)
    },

    clearInterval() {
      clearInterval(this.interval)
    },
  }
}
</script>

<style lang='scss'>
html, body {
  height: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
  background: linear-gradient(to bottom, #34495e, #1e647c, #00818f, #009e90, #41b883); 
  color: white;
  font-family: 'Open Sans', sans-serif;
}

code {
  background: rgba(black, .5);
  width: 460px;
  display: block;
  padding: 20px;
  border-radius: 2px;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;

  &__logo {
    height: 120px;
  }

  &__title {
    font-size: 82px;
    margin-left: 18px;
  }
}

.v-number {
  font-size: 100px;
  color: PaleVioletRed;
}

.app {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  align-items: center;
}

input {
  border: none;
  border-radius: 4px;
  padding: 10px;
  font-size: 16px;
  background: rgba(white, .5);
  outline: none;
  width: 60px;
}
</style>