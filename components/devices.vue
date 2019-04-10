<template>
  <!--https://codepen.io/FelixRilling/pen/vLRNvb-->
  <section class="w-full">
    <div class="mx-auto max-w-full" :style="{ width: width + 'px' }">
      <div class="phone">
        <iframe :style="{ height: height + 'px' }" :src="url"></iframe>
      </div>
    </div>

    <div id="controls" class="flex flex-row">
      <div class="flex-1">
        <vue-slider
          v-model.number="width"
          :min="300"
          :max="1920"
          tooltip="always"
          :tooltip-formatter="'Width {value}px'"
        />
      </div>
      <div class="flex-1">
        <vue-slider
          v-model.number="height"
          :min="300"
          :max="1080"
          tooltip="always"
          :tooltip-formatter="'Height {value}px'"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Devices',
  props: {
    day: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      width: 400,
      height: 650
    }
  },
  computed: {
    url() {
      return `/${this.day}`
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  @apply px-8;
}

.phone {
  border: 40px solid #ddd;
  border-width: 55px 7px;
  border-radius: 40px;
  margin: 50px auto;
  overflow: hidden;
  transition: all 0.5s ease;
}

.phone iframe {
  border: 0;
  width: 100%;
  height: 100%;
}

.phone {
  transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  box-shadow: 0px 3px 0 #bbb, 0px 4px 0 #bbb, 0px 5px 0 #bbb, 0px 7px 0 #bbb,
    0px 10px 20px #666;
}

#controls {
  font-size: 0.9em;
  color: #333;
}

#controls div {
  margin: 10px;
}

#controls div label {
  width: 120px;
  display: block;
  float: left;
}
</style>
