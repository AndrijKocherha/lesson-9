<template>
   <div class="filter">
      <h2 class="title">Filters</h2>
      <label v-for="(value, key) in getFilterObj" :key="key" class="filter__item"
         >{{ value.name }} <input @input="updateFilter({ key: key, value: $event.target.value })" type="text"
      /></label>
   </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
   name: 'CompaniesFilters',
   data() {
      return {
         newFilterVal: null,
      }
   },
   computed: {
      ...mapGetters(['getFilterObj']),
   },
   methods: {
      ...mapActions(['updateFilter']),
   },
}
</script>

<style lang="scss" scoped></style>
