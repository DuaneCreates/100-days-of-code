<template>
  <section class="flex flex-row justify-center flex-wrap text-center pb-12">
    <div class="w-full sm:w-1/2 md:w-1/4 p-8">
      <loader-1></loader-1>
    </div>
    <div class="w-full sm:w-1/2 md:w-1/4 p-8">
      <loader-2></loader-2>
    </div>
    <div class="w-full sm:w-1/2 md:w-1/4 p-8">
      <loader-3></loader-3>
    </div>
    <div class="w-full sm:w-1/2 md:w-1/4 p-8">
      <loader-4></loader-4>
    </div>
  </section>
</template>

<script>
import Loader1 from '../../components/12/loader-1'
import Loader2 from '../../components/12/loader-2'
import Loader3 from '../../components/12/loader-3'
import Loader4 from '../../components/12/loader-4'

export default {
  name: 'Day12',
  components: {
    Loader4,
    Loader3,
    Loader1,
    Loader2
  }
}
</script>

<style scoped></style>
