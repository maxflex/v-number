<template>
  <div class="app">
    <div>
      <div class="header">
        <img class="header__logo" src="img/logo.png" />
        <h1 class="header__title">Number</h1>
      </div>
      <h2 style="text-align: center">
        Animated number transition & likes counter library for Vue.js<br />
      </h2>
      <v-number class="v-number-example" :value="number" />
    </div>
    <div style="margin-top: 100px">
      <p>Likes counter animation example:</p>
      <div class="likes-counter-example">
        <div class="likes-counter-example__likes">
          <i class="material-icons">favorite</i>
          <v-number v-model="likes"></v-number>
          <span> people liked </span>
        </div>
        <div class="likes-counter-example__button" @click="like()">
          <i class="material-icons">thumb_up</i>
          <span>Like</span>
        </div>
      </div>
      <p style="margin-top: 60px">Usage:</p>
      <code>
        <div>
          &#60;v-number v-model='someValue'&#62;
        </div>
      </code>
      <!-- <input style='margin-top: 15px' type='number' v-model='number' @focus='clearInterval' /> -->
    </div>
    <div style="flex: 1"></div>
    <div>
      <iframe
        src="https://ghbtns.com/github-btn.html?user=maxflex&repo=v-number&type=star&count=true&size=large"
        frameborder="0"
        scrolling="0"
        width="160px"
        height="30px"
      ></iframe>
    </div>
  </div>
</template>

<script>
import VNumber from "./components/VNumber";

export default {
  components: {
    VNumber
  },

  data() {
    return {
      number: 1,
      likes: 153,
      isLiked: false,
      intervalSpeed: 2000,
      interval: null
    };
  },

  created() {
    this.startInterval();
  },

  methods: {
    startInterval() {
      this.interval = setInterval(() => this.number++, this.intervalSpeed);
    },

    clearInterval() {
      clearInterval(this.interval);
    },

    like() {
      this.likes += 1;
    }
  }
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
  background: linear-gradient(
    to bottom,
    #34495e,
    #1e647c,
    #00818f,
    #009e90,
    #41b883
  );
  color: white;
  font-family: "Open Sans", sans-serif;
}

code {
  background: rgba(black, 0.5);
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

.v-number-example {
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
  background: rgba(white, 0.5);
  outline: none;
  width: 60px;
}

.likes-counter-example {
  display: flex;
  align-items: center;
  &__likes {
    display: flex;
    margin-right: 30px;
    align-items: center;
    & .material-icons {
      margin-right: 3px;
      color: palevioletred;
    }
    & .v-number {
      margin-right: 3px;
      color: palevioletred;
      font-weight: bold;
    }
  }
  &__button {
    $color: #4267b2;
    display: flex;
    background-color: $color;
    padding: 6px 30px;
    align-items: center;
    border-radius: 6px;
    width: fit-content;
    cursor: pointer;
    transition: all ease-in-out 0.2s;
    &:hover {
      background-color: darken($color, 6);
      box-shadow: 8px 8px rgba(black, 0.5);
      transform: scale(1.04);
    }
    &:active {
      background-color: darken($color, 8);
      transform: scale(1.01);
      box-shadow: 2px 2px rgba(black, 0.5);
    }
    & .material-icons {
      margin-right: 5px;
      font-size: 18px;
    }
  }
}
</style>
