<template>
   <div>
      <label>Title <input :ref="onRef('title')" v-model="newCompanySettings.title" type="text" /></label>
      <label>Rate <input :ref="onRef('rate')" v-model="newCompanySettings.rate" type="number" /></label>
      <label>Year <input :ref="onRef('year')" v-model="newCompanySettings.year" type="number" /></label>
      <label>Owner <input :ref="onRef('owner')" v-model="newCompanySettings.owner" type="text" /></label>
      <button v-if="!companyId" @click="addNewCompany()">create</button>
      <button v-else @click="onUpdateCompany">save</button>
   </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
   name: 'CompanySettingsPage',
   data() {
      return {
         inputItem: [],
         newCompanySettings: {
            title: null,
            rate: null,
            year: null,
            owner: null,
         },
      }
   },
   computed: {
      ...mapGetters(['getCompanyById']),
      companyId() {
         return this.$route.params.companyId
      },
   },
   created() {
      if (this.companyId) this.newCompanySettings = this.getCompanyById(this.companyId)
   },
   methods: {
      ...mapActions(['addCompany', 'updateCompany']),
      addNewCompany() {
         if (this.checkCompanyData()) {
            this.addCompany({
               id: new Date().getFullYear(),
               ...this.newCompanySettings,
            })
            this.goOnHomePage()
         }
      },
      goOnHomePage() {
         this.$router.push({
            name: 'home',
         })
      },
      checkCompanyData() {
         for (const key in this.newCompanySettings) {
            if (!this.newCompanySettings[key]) {
               this[key].focus()
               return false
            }
         }
         return true
      },
      onRef(key) {
         return (el) => {
            this[key] = el
         }
      },
      onUpdateCompany() {
         if (this.checkCompanyData()) {
            this.updateCompany(this.newCompanySettings)
            this.goOnHomePage()
         }
      },
   },
}
</script>

<style lang="scss" scoped></style>
