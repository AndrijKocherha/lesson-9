<template>
   <div class="company-item">
      <div>{{ companyData.title }}</div>
      <div>{{ companyData.rate }}</div>
      <div>{{ companyData.year }}</div>
      <div>{{ companyData.owner }}</div>
      <div class="company-item__actions">
         <button @click="removeCompany(companyData.id)">Delete</button>
         <button @click="onEdit">Edit</button>
      </div>
   </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
   name: 'CompanyItem',
   props: {
      companyData: {
         type: Object,
         required: true,
      },
   },
   methods: {
      ...mapActions(['removeCompany']),
      onEdit() {
         this.$router.push({
            name: 'company',
            params: {
               companyId: this.companyData.id,
            },
         })
      },
   },
}
</script>

<style lang="scss" scoped>
.company-item {
   display: flex;
   gap: 20px;
}
</style>
