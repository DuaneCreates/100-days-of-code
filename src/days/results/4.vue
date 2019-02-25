<template>
  <section>
    <div>
      <h1> Credit Card Details </h1>
      <div class="flex flex-row mt-8">
        <form class="w-full sm:w-3/4 sm:mr-12">
          <div class="field">
            <label
              for="card-number">Card Number</label>
            <cleave v-model="number"
                    :options="{creditCard: true, delimiter: '-', onCreditCardTypeChanged: updatedNumber}"
                    type="text" id="card-number" name="card-number"/>
          </div>
          <div class="flex flex-row mt-8">
            <div class="w-full sm:w-2/3 sm:pr-10 field">
              <label for="card-expire">Expiration Date</label>
              <cleave v-model="expiration"
                      :options="{date:true, blocks:[2,2], delimiter:'/', datePattern: ['m','y']}"
                      type="text" id="card-expire" name="card-expire"/>
            </div>
            <div class="w-full sm:w-1/3 sm:pl-10 field">
              <label for="card-ccv">CCV / CVV</label>
              <input v-model="cvv" type="text" maxlength="3" id="card-ccv"/>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'result-4',
  data() {
    return {
      number: null,
      expiration: null,
      cvv: null,
      type: null,
    };
  },
  methods: {
    updatedNumber(type) {
      this.type = type;
    },
  },
  computed: {
    numberValid() {
      return this.type !== null && this.type !== 'unknown';
    },
    expirationValid() {
      return this.expiration.length === 4;
    },
    ccvValid() {
      return this.cvv.length === 3;
    },
  },
};
</script>

<style lang="scss" scoped>
  section {
    @apply w-full py-10 bg-blue-lightest;
    & > div {
      @apply p-10 bg-white shadow-lg mx-auto w-full max-w-md mt-4;

      & > h1 {
        @apply text-lg font-semibold font-montserrat text-blue-dark uppercase;
      }

      .field {
        @apply flex flex-col;

        label {
          @apply text-base font-semibold font-montserrat text-blue-dark uppercase;
        }

        input {
          @apply -mx-3 px-3 pt-3 pb-1 outline-none border-b border-blue-dark
          text-black text-base font-semibold font-montserrat uppercase;
        }
      }
    }
  }
</style>
