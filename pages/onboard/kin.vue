<template>
  <div class="form">
    <h2 class="text-2xl mb-3">Next Of Kin</h2>
    <div
      class="bg-red-600 text-white text-center py-1 my-3"
      v-for="(err, index) in error"
      :key="index"
    >
      {{ err }}
    </div>
    <form @submit.prevent="submitKinInfo">
      <div class="bg-white px-10 py-11">
        <div class="form-control">
          <label for="name">Full Name</label>
          <input
            required
            type="text"
            id="name"
            placeholder="Chioma Ajunwa"
            v-model="name"
          />
        </div>

        <div class="form-control">
          <label for="email">Email</label>
          <input
            required
            type="email"
            id="email"
            placeholder="michealolawale@gmail.com"
            v-model="email"
          />
        </div>

        <div class="form-control">
          <label for="phone">Phone Number</label>
          <div class="flex">
            <div
              class="
                border border-btnBorder border-r-0
                placeholder-[#999999]
                font-light
                px-4
                py-3
                text-sm
                outline-none
              "
            >
              +234
            </div>
            <input
              required
              type="text"
              id="phone"
              placeholder="70563296578"
              v-model="phone"
            />
          </div>
        </div>

        <div class="form-control">
          <label for="address">Residential Address</label>
          <input
            required
            type="text"
            id="address"
            placeholder="Enter address"
            v-model="address"
          />
        </div>

        <div class="form-control">
          <label>Relationship</label>
          <select id="relationship" v-model="relationship">
            <option value="brother">Brother</option>
            <option value="sister">Sister</option>
            <option value="others">Others</option>
          </select>
        </div>
      </div>
      <div class="flex justify-between items-center">
        <div class="mt-10 flex justify-end">
          <nuxt-link
            to="/onboard/address"
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
  name: 'kin',
  layout: 'onboardTwo',
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      address: '',
      relationship: '',
      error: [],
    }
  },
  methods: {
    submitKinInfo() {
      this.error = []
      const formData = {
        full_name: this.name,
        residential_address: this.address,
        relationship: this.relationship,
        phone_number: `0${this.phone}`,
        email: this.email,
      }
      this.$store
        .dispatch('onboard/sendNextOfKin', formData)
        .then(() => {
          this.$router.replace('/onboard/bank')
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
