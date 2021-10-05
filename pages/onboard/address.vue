<template>
  <div class="form">
    <h2 class="text-2xl mb-3">Address</h2>
    <div
      class="bg-red-600 text-white text-center py-1 my-3"
      v-for="(err, index) in error"
      :key="index"
    >
      {{ err }}
    </div>
    <form @submit.prevent="submitAddress">
      <div class="bg-white px-10 py-11">
        <div class="form-control">
          <label for="address">Residential Address</label>
          <input
            required
            type="text"
            id="address"
            placeholder="address"
            v-model="resAddress"
          />
        </div>

        <div class="form-control">
          <label for="city">City</label>
          <input
            required
            type="text"
            id="city"
            placeholder="Ikeja"
            v-model="city"
          />
        </div>

        <div class="form-control">
          <label>State Of Origin</label>
          <select id="state" v-model="originState">
            <option value="lagos">Lagos</option>
            <option value="oyo">Oyo</option>
            <option value="ogun">Ogun</option>
            <option value="ondo">Ondo</option>
          </select>
        </div>

        <div class="form-control">
          <label>Country</label>
          <select id="country" v-model="country">
            <option value="nigeria">Nigeria</option>
            <option value="togo">Togo</option>
            <option value="ghana">Ghana</option>
            <option value="south-africa">South Africa</option>
          </select>

          <div class="form-control">
            <label for="nationality">Nationality</label>
            <input
              required
              type="text"
              id="nationality"
              placeholder="Ghanaian"
              v-model="nationality"
            />
          </div>
        </div>
      </div>
      <div class="flex justify-between items-center">
        <div class="mt-10 flex justify-end">
          <nuxt-link
            to="/onboard/basic"
            class="
              cursor-pointer
              py-[12px]
              text-primary
              border border-btnBorder
              hover:bg-primary hover:text-white hover:border-primary
              transition
              duration-300
              ease-in-out
              flex
              items-center
              justify-between
              px-10
              w-max
              space-x-10
              rounded-sm
            "
          >
            <span class="material-icons material-icons-sharp justify-self-end">
              west
            </span>
            <span class="w-[70%] text-right">Previous</span>
          </nuxt-link>
        </div>
        <div class="mt-10 flex justify-end">
          <button
            type="submit"
            class="
              cursor-pointer
              py-[12px]
              text-white
              bg-primary
              hover:bg-[rgba(37,140,96,0.7)]
              transition
              duration-300
              ease-in-out
              flex
              items-center
              justify-between
              px-10
              w-max
              space-x-10
              rounded-sm
            "
          >
            <span class="w-[70%] text-right">Save & Continue</span>
            <span class="material-icons material-icons-sharp justify-self-end">
              east
            </span>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'address',
  layout: 'onboardTwo',
  data() {
    return {
      resAddress: '',
      city: '',
      originState: '',
      country: '',
      nationality: '',
      error: [],
    }
  },
  methods: {
    submitAddress() {
      this.error = []
      const formData = {
        address: this.resAddress,
        city: this.city,
        state_of_origin: this.originState,
        country: this.country,
        nationality: this.nationality,
      }
      this.$store
        .dispatch('onboard/sendAddress', formData)
        .then(() => {
          this.$router.replace('/onboard/kin')
        })
        .catch((err) => {
          Object.entries(err).map(([key, value]) => {
            this.error.push(value[0])
          })
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.form {
  .form-control {
    @apply w-full my-4;
    label {
      @apply block mb-2;
    }
    input,
    select {
      @apply border border-btnBorder w-full placeholder-[#999999] font-light px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-font;
    }
  }
  .radio {
    label {
      @apply mb-0;
    }
    input[type='radio'] + .new-checked {
      @apply w-6 h-6 border border-btnBorder mr-3 p-[5px];
    }
    input[type='radio']:checked + .new-checked {
      .checker {
        @apply w-3 h-3 bg-black;
      }
    }
  }
}
</style>
