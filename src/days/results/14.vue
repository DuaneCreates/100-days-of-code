<template>
  <section>
    <div class="cover">
      <img src="../../assets/days/14/stacks.svg" class="w-full h-full"/>
    </div>
    <div class="avatar">
      <img src="../../assets/days/14/read.svg"/>
    </div>
    <div class="text-section">
      <div>
        <label for="tb">Life Story</label>
        <p>write below</p>
      </div>
      <textarea id="tb" placeholder="Please write your life story here"></textarea>
    </div>
    <div class="button-wrapper">
      <button>
        Save
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'day-14',
};
</script>

<style lang="scss" scoped>
  * {
    transition: all 1s;
  }

  img {
    object-fit: contain;
  }

  section {
    @apply flex flex-col;

    .cover {
      @apply h-64 bg-orange py-4 shadow-md;
    }

    .avatar {
      @apply w-48 h-48 bg-white mt-12 mx-auto;

      img {
        @apply w-full h-full;
      }

      @screen sm {
        @apply -my-24 ml-24 mr-auto rounded-full shadow-lg ;

        img {
          @apply rounded-full;
        }
      }
    }

    .text-section {
      @apply mt-6 py-8 px-6;

      div {
        @apply flex justify-between;

        label {
          @apply mx-auto text-3xl text-teal font-montserrat uppercase mb-2 font-bold;
        }

        p {
          @apply hidden text-teal mt-3 font-semibold font-montserrat mr-4 text-sm;
        }
      }

      textarea {
        @apply w-full h-64 -mt-2 border-t-4 border-orange p-4;

        &:focus {
          @apply outline-none shadow-md;
        }
      }

      @screen sm {
        @apply mt-32 px-24;

        div {
          label {
            @apply ml-4;
          }
          p {
            @apply block;
          }
        }
      }
    }

    .button-wrapper {
      @apply px-6 ml-0 mb-12;

      button {
        @apply w-full bg-orange py-3 px-6 mt-4 font-montserrat font-bold text-lg text-white uppercase;

        &:focus {
          @apply outline-none bg-teal;
        }
      }

      @screen sm {
        @apply ml-24 px-0;
        button {
          @apply w-auto;
        }
      }
    }
  }
</style>
