<template>
   <div class="home">
      <companies-manager />
   </div>
</template>

<script>
import CompaniesManager from '../components/CompaniesManager.vue'
export default {
   name: 'HomeView',
   components: {
      CompaniesManager,
   },
}
</script>
