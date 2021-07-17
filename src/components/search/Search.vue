<template>
  <div>
    <q-input
      v-model="search"
      debounce="500"
      outlined
      filled
      clearable
      label="Enter your search..."
    >    
      <template v-slot:prepend>
        <q-icon name="search" />
      </template>
    </q-input>

    {{search}}
  </div>  
</template>

<script>
export default {
  name: 'Search',
  components: {
    
  },
  data() {
    return {
      search: ''
    }
  }
}
</script>

<style scoped>

</style>
