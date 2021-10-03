export const state = () => ({
  basicInfo: {},
  address: {},
  nextOfKin: {},
  bankList: [],
  accountName: '',
  bankDets: {},
})

/* MUTATIONS */
export const mutations = {
  setBasicInfo(state, payload) {
    state.basicInfo = payload
  },
  setAddress(state, payload) {
    state.address = payload
  },
  setKin(state, payload) {
    state.nextOfKin = payload
  },
  listBanks(state, payload) {
    state.bankList = payload
  },
  setAccName(state, payload) {
    state.accountName = payload
  },
  setBank(state, payload) {
    state.bankDets = payload
  },
}

/* ACTIONS */
export const actions = {
  sendBasicInfo(vuexContext, infoData) {
    return this.$axios
      .$post('/user/basic', infoData)
      .then((res) => {
        vuexContext.commit('setBasicInfo', res.data.data)
      })
      .catch((err) => console.log('BASIC ONBOARDING INFO ERROR', err.response))
  },
  sendAddress(vuexContext, addressData) {
    return this.$axios
      .$post('/user/address', addressData)
      .then((res) => {
        vuexContext.commit('setAddress', res.data.data)
      })
      .catch((err) => console.log('ADDRESS ONBOARDING ERROR', err.response))
  },
  sendNextOfKin(vuexContent, kinData) {
    return this.$axios
      .$post('/user/kin', kinData)
      .then((res) => {
        vuexContent.commit('setKin', res.data.data)
      })
      .catch((err) => console.log('NEXT OF KIN ONBOARDING ERROR', err.response))
  },
  sendBank(vuexContent, bankData) {
    return this.$axios
      .$post('/user/bank', bankData)
      .then((res) => {
        vuexContent.commit('setBank', res.data.data)
      })
      .catch((err) => console.log('BANK DETAILS ONBOARDING ERROR', err))
  },
  getBanks(vuexContext) {
    const myHeaders = new Headers()
    myHeaders.append('Authorization', `Basic ${process.env.bankAuth}`)

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      redirect: 'follow',
    }

    fetch('https://sandbox.monnify.com/api/v1/auth/login', requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const token = result.responseBody.accessToken
        var myHeaders = new Headers()
        myHeaders.append('Authorization', `Bearer ${token}`)

        var requestOptions = {
          headers: myHeaders,
          redirect: 'follow',
        }

        return fetch('https://sandbox.monnify.com/api/v1/banks', requestOptions)
          .then((response) => response.json())
          .then((result) => {
            if (result.responseMessage === 'success') {
              vuexContext.commit('listBanks', result.responseBody)
            }
          })
          .catch((error) => console.log('error', error))
      })
      .catch((error) => console.log('Auth error', error))
  },

  getAccName(vuexContext, bankData) {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    }
    fetch(
      `https://sandbox.monnify.com/api/v1/disbursements/account/validate?accountNumber=${bankData.accountNo}&bankCode=${bankData.selBankCode}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        let data
        if (result.responseBody.accountName) {
          data = result.responseBody.accountName
        } else {
          data = result.responseMessage
        }
        vuexContext.commit('setAccName', data)
      })
      .catch((error) => console.log('Error Getting Acc Name', error))
  },

  uploadDocument(vuexContext, uploadingData) {
    let passportData = new FormData()
    passportData.append('image_type', 'passport')
    passportData.append('image', uploadingData.passport)
    return this.$axios
      .$post('/user/document', passportData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((res) => {
        let identityData = new FormData()
        identityData.append('image_type', 'proof_of_identity')
        identityData.append('image', uploadingData.identity)
        if (res.status === true) {
          return this.$axios
            .$post('/user/document', identityData, {
              headers: { 'Content-Type': 'multipart/form-data' },
            })
            .then((res) => {
              if (res.status === true) {
                let utilityData = new FormData()
                utilityData.append('image_type', 'utility_bill')
                utilityData.append('image', uploadingData.utility)
                return this.$axios
                  .$post('/user/document', utilityData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                  })
                  .then((res) => {
                    let signatureData = new FormData()
                    signatureData.append('image_type', 'signature')
                    signatureData.append('image', uploadingData.signature)
                    return this.$axios
                      .$post('/user/document', signatureData, {
                        headers: { 'Content-Type': 'multipart/form-data' },
                      })
                      .then((res) => {
                        console.log('FILES UPLOADED SUCCESSFULLY')
                      })
                      .catch((err) =>
                        console.log('Error Uploading Signature', err)
                      )
                  })
                  .catch((err) =>
                    console.log('Error Uploading Utility Bill', err)
                  )
              }
            })
            .catch((err) => console.log('Error Uploading Identity Proof', err))
        }
      })
      .catch((err) => console.log('Error Uploading Passport', err))
  },
}

/* GETTERS */
export const getters = {
  getAllBanks(state) {
    return state.bankList
  },
  accName(state) {
    return state.accountName
  },
}
