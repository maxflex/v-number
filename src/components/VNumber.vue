<template>
  <div class='v-number'>
    <transition name='v-number-current-value'>
      <div 
        v-if='currentValue !== null'
        :style='transitionDuration'
        class='v-number__animated v-number__current-value' 
      >
        {{ currentValue }}
      </div>
    </transition>
    <transition name='v-number-new-value'>
      <div 
        v-if='newValue !== null'
        :style='transitionDuration'
        class='v-number__animated v-number__new-value' 
      >
        {{ newValue }}
      </div>
    </transition>
    
    <!-- Always display the value to keep DIV dimensions up to date -->
    <span class='v-number__original-value'>
      {{ value }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'v-number',

  props: {
    value: {
      required: true,
      validator(value) {
        return !isNaN(value)
      }
    },

    // Animation speed
    speed: {
      type: Number,
      default: 500,
    }
  },

  watch: {
    value(newValue) {
      if (this.isAnimating) {
        return
      }

      this.isAnimating = true
      this.currentValue = null
      this.newValue = newValue

      setTimeout(() => {
        this.currentValue = newValue
        this.newValue = null
        this.isAnimating = false
      }, this.speed)
    }
  },

  data() {
    return {
      currentValue: null,
      newValue: null,
      isAnimating: false,
    }
  },
  
  created() {
    this.currentValue = this.value
  },

  computed: {
    transitionDuration() {
      return {
        transitionDuration: this.speed + 'ms'
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.v-number {
  overflow: hidden;
  position: relative;
  display: inline-block;
  
  &__current-value {
    position: absolute;
  }

  &__original-value {
    visibility: hidden;
  }

  &__animated {
    position: absolute;
    transition-property: top;
    transition-timing-function: ease-in-out;
  }

  &-new-value {
    &-enter {
      top: -100%;

      &-to {
        top: 0;
      }
    }
  }

  &-current-value {
    &-leave {
      top: 0;

      &-to {
        top: 100%;
      }
    }
  }
}
</style>