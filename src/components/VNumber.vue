<template>
  <div class='v-number'>
    <transition name='v-number-current-value'>
      <div class='v-number__animated v-number__current-value' v-if='currentValue !== null'>
        {{ currentValue }}
      </div>
    </transition>
    <transition name='v-number-new-value'>
      <div class='v-number__animated v-number__new-value' v-if='newValue !== null'>
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
        return !isNaN(Number(value))
      }
    },

    // Animation speed
    speed: {
      type: Number,
      default: 1000,
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

  methods: {
  },
}
</script>

<style lang='scss'>
$speed: 1s;

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
  }

  &-new-value {
    &-enter {
      top: 100%;

      &-to {
        top: 0;
      }
    }

    &-enter-active {
      transition: $speed;
    }
  }

  &-current-value {
    &-leave {
      top: 0;

      &-to {
        top: -100%;
      }
    }

    &-leave-active {
      transition: $speed;
    }
  }
}
</style>