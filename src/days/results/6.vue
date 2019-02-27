<template>
  <section class="w-full ">
    <div v-for="(p,i) in panels" :key="p.title" @click="active = active === i ? null : i"
         :style="{ 'background-image': 'url(' + p.image + ')' }"
         :class="{'active':i === active, 'out':active != null && i!==active}">
      <h1>{{p.title}}</h1>
      <p>{{p.text}}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'result-6',
  data() {
    return {
      active: null,
      panels: [
        {
          title: 'Animals',
          text: 'Aren\'t they cute?',
          image: 'https://placeimg.com/1000/1000/animals',
        },
        {
          title: 'Architecture',
          text: 'Isn\'t it well placed?',
          image: 'https://placeimg.com/1000/1000/arch',
        },
        {
          title: 'Nature',
          text: 'Isn\'t it beautiful?',
          image: 'https://placeimg.com/1000/1000/nature',
        },
        {
          title: 'People',
          text: 'Aren\'t you great?',
          image: 'https://placeimg.com/1000/1000/people',
        },
        {
          title: 'Technology',
          text: 'Isn\'t it fascinating?',
          image: 'https://placeimg.com/1000/1000/tech',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  section {
    @apply flex h-screen text-center;

    div {
      flex: 2 2 0;
      -webkit-transition: all .7s; /* Safari */
      transition: all .7s;
      transition-timing-function: cubic-bezier(.75, .22, .37, .97);
      @apply h-screen flex flex-col justify-center cursor-pointer bg-no-repeat bg-cover bg-center;

      h1 {
        font-size: 2vw;
        @apply font-montserrat uppercase py-3 text-purple-lighter bg-purple-darkest shadow-lg z-10;
      }

      p {
        font-size: 1.7vw;
        @apply font-roboto uppercase py-3 text-indigo-lighter bg-indigo-darkest shadow-lg z-20;
      }

      &.active {
        flex: 3 3 0;

        h1 {
          font-size: 4vw;
          @apply opacity-100;
        }

        p {
          font-size: 2.5vw;
          @apply opacity-100;
        }
      }

      &.out {
        -webkit-transition: all .1s; /* Safari */
        transition: all .1s;
        flex: 1 1 0;
        -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
        filter: grayscale(100%);

        h1 {
          font-size: 0.1vw;
          @apply opacity-0;
        }

        p {
          font-size: 0.1vw;
          @apply opacity-0;
        }
      }
    }
  }
</style>
