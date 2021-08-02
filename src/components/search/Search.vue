<template>
  <div>
    <q-input
      v-model="searchInput"
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
   
    <div class="filters">      
      <q-select class="filter-item" clearable filled color="purple-12" v-model="model" :options="options" label="Supplier" />
      <q-select class="filter-item" clearable filled color="purple-12" v-model="model" :options="options" label="Supplier" />          
      <q-select class="filter-item" clearable filled color="purple-12" v-model="model" :options="options" label="Supplier" />
      <q-select class="filter-item" clearable filled color="purple-12" v-model="model" :options="options" label="Supplier" />             
      <q-select class="filter-item" clearable filled color="purple-12" v-model="model" :options="options" label="Supplier" />
      <q-select class="filter-item" clearable filled color="purple-12" v-model="model" :options="options" label="Supplier" />                  
    </div>    
  </div>  
</template>

<script>
export default {
  name: 'Search',
  components: {
    
  },
  props: {
    search: {
      type: String,
      default() {
        return ''
      }
    }
  },
  data() {
    return {
      model: '',
      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ]
    }
  },
  computed: {
    searchInput: {
      get() {
        return this.search
      },
      set(newVal) {
        // console.log('val changed', newVal)
        this.$emit('input', newVal)
      }
    },
  }
}
</script>

<style scoped>
.filters {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.filter-item {
  width: 49%;
  margin-top: 16px;
}
</style>
