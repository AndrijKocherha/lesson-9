<template>
   <div class="companies-manager">
      <companies-filters />
      <companies-list />
   </div>
</template>

<script>
import CompaniesFilters from './CompaniesFilters.vue'
import CompaniesList from './CompaniesList.vue'
export default {
   name: 'CompaniesManager',
   components: {
      CompaniesFilters,
      CompaniesList,
   },
}
</script>

<style lang="scss" scoped>
.companies-manager {
   display: grid;
   gap: 50px;
}
</style>
