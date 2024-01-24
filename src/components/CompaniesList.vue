<template>
   <div class="companies-list">
      <h2 class="title">Companies List</h2>
      <company-item
         v-for="company in getCompaniesList"
         :key="company.id"
         :company-data="company"
         class="companies-list__item"
      />
      <router-link class="create-company" to="/company"> Create company </router-link>
   </div>
</template>

<script>
import { mapGetters } from 'vuex'

import CompanyItem from './CompanyItem.vue'
export default {
   name: 'CompaniesList',
   components: { CompanyItem },
   computed: {
      ...mapGetters(['getCompaniesList']),
   },
}
</script>

<style lang="scss" scoped>
.companies-list {
   margin-bottom: 20px;
   &__item {
      margin-bottom: 10px;
   }
}
.create-company {
   text-decoration: none;
   padding: 7px;
   background-color: #a09999;
   color: #fff;
}
</style>
