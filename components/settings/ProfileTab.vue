<template>
  <div class="w-full pb-32" v-if="userData">
    <div class="flex flex-grow items-stretch w-full my-8">
      <div class="w-[20%] border-r text-center">Basic Data</div>
      <ul class="space-y-8 px-8 w-[30%]">
        <li class="flex space-x-5 items-center">
          <div class="text-right flex-1">
            <p class="text-sm">Profile picture</p>
            <p class="text-light text-xs">png, jpg, bitmap</p>
          </div>
          <div class="text-left flex-1">
            <img src="~/assets/images/profile.svg" alt="" />
          </div>
        </li>
        <li class="flex space-x-5 items-center">
          <p class="text-sm text-light text-right flex-1">First Name</p>
          <p class="text-sm text-left flex-1 capitalize">
            {{ userData.user.data.firstname }}
          </p>
        </li>
        <li class="flex space-x-5 items-center">
          <p class="text-sm text-light text-right flex-1">Middle Name</p>
          <p class="text-sm text-left flex-1 capitalize">
            {{ userData.user.data.middlename }}
          </p>
        </li>
        <li class="flex space-x-5 items-center">
          <p class="text-sm text-light text-right flex-1">Last Name</p>
          <p class="text-sm text-left flex-1 capitalize">
            {{ userData.user.data.lastname }}
          </p>
        </li>
        <li class="flex space-x-5 items-center">
          <p class="text-sm text-light text-right flex-1">Phone Number</p>
          <p class="text-sm text-left flex-1 capitalize">
            +234{{ Number.parseInt(userData.user.data.phone_number) }}
          </p>
        </li>
        <li class="flex space-x-5 items-center">
          <p class="text-sm text-light text-right flex-1">Date Of Birth</p>
          <p class="text-sm text-left flex-1 capitalize">
            {{ $moment(userData.user.data.date_of_birth).format('Do	MMM YYYY') }}
          </p>
        </li>
        <li class="flex space-x-5 items-center">
          <p class="text-sm text-light text-right flex-1">Gender</p>
          <p class="text-sm text-left flex-1 capitalize">
            {{ userData.user.data.gender }}
          </p>
        </li>
        <li class="flex space-x-5 items-center">
          <p class="text-sm text-light text-right flex-1">
            Mother’s Maiden Name
          </p>
          <p class="text-sm text-left flex-1 capitalize">
            {{ userData.user.data.mother_maiden_name }}
          </p>
        </li>
      </ul>
    </div>
    <div class="flex flex-grow items-stretch w-full my-8">
      <div class="w-[20%] border-r text-center">Next Of Kin</div>
      <ul class="space-y-8 px-8 w-[30%]">
        <li class="flex space-x-5 items-center">
          <p class="text-sm text-light text-right flex-1">Full name</p>
          <p class="text-sm text-left flex-1 capitalize">
            {{ nextOfKin.full_name }}
          </p>
        </li>
        <li class="flex space-x-5 items-center">
          <p class="text-sm text-light text-right flex-1">Email</p>
          <p class="text-sm text-left flex-1">
            {{ nextOfKin.email }}
          </p>
        </li>
        <li class="flex space-x-5 items-center">
          <p class="text-sm text-light text-right flex-1">Phone Number</p>
          <p class="text-sm text-left flex-1 capitalize">
            +234{{ Number.parseInt(nextOfKin.phone_number) }}
          </p>
        </li>
        <li class="flex space-x-5 items-center">
          <p class="text-sm text-light text-right flex-1">Address</p>
          <p class="text-sm text-left flex-1 capitalize">
            {{ nextOfKin.residential_address }}
          </p>
        </li>
        <li class="flex space-x-5 items-center">
          <p class="text-sm text-light text-right flex-1">Relationship</p>
          <p class="text-sm text-left flex-1 capitalize">
            {{ nextOfKin.relationship }}
          </p>
        </li>
      </ul>
    </div>
    <div class="flex flex-grow items-stretch w-full my-8">
      <div class="w-[20%] border-r text-center">Address</div>
      <ul class="space-y-8 px-8 w-[30%]">
        <li class="flex space-x-5 items-center">
          <p class="text-sm text-light text-right flex-1">
            Residential Address
          </p>
          <p class="text-sm text-left flex-1 capitalize">
            {{ userData.address }}
          </p>
        </li>
        <li class="flex space-x-5 items-center">
          <p class="text-sm text-light text-right flex-1">City</p>
          <p class="text-sm text-left flex-1 capitalize">
            {{ userData.city }}
          </p>
        </li>
        <li class="flex space-x-5 items-center">
          <p class="text-sm text-light text-right flex-1">State</p>
          <p class="text-sm text-left flex-1 capitalize">
            {{ userData.state_of_origin }}
          </p>
        </li>
        <li class="flex space-x-5 items-center">
          <p class="text-sm text-light text-right flex-1">Country</p>
          <p class="text-sm text-left flex-1 capitalize">
            {{ userData.country }}
          </p>
        </li>
        <li class="flex space-x-5 items-center">
          <p class="text-sm text-light text-right flex-1">Nationality</p>
          <p class="text-sm text-left flex-1 capitalize">
            {{ userData.nationality }}
          </p>
        </li>
      </ul>
    </div>
  </div>
  <div class="w-full text-center" v-else>No records to show</div>
</template>
<script>
export default {
  name: 'ProfileTab',
  computed: {
    userData() {
      return this.$store.getters['dashboard/userRecord']
    },
    nextOfKin() {
      return this.$store.getters['dashboard/nokRecord']
    },
  },
  mounted() {
    this.$store.dispatch('dashboard/getUserRecord')
  },
}
</script>
