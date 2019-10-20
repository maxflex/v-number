<template>
  <div class='app'>
    <div>
      <v-number v-model='number' />
      <h2 style='text-align: center'>some text at the bottom</h2>
    </div>
    <div style='flex: 1'></div>
    <div style='display: flex'>
      <input type='number' v-model='number' ref='input' />
      <button @click='startInterval'>auto</button>
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
    }
  },
  
  mounted() {
    this.$refs.input.focus()
  },

  methods: {
    startInterval() {
      setInterval(() => this.number++, 3000)
    },

  }
}
</script>

<style lang='scss'>
html, body {
  height: 100%;
  padding: 0;
  margin: 0;
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
</style>