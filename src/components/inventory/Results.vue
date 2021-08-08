<template>
  <div class="">
    <!-- {{results}} -->
    <p>{{showText}}</p>
    <q-list>
      <template v-for="result in paginatedResults">
        <q-item :key="result.productIdentifier.id">
          <q-item-section>
            <q-item-label>{{result.name}}</q-item-label>
            <q-item-label caption>Category: {{result.categories.join(', ')}}</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <div class="row">
              <span>Stock:</span>
              <q-badge class="q-ml-xs" color="teal" :label="result.totalQuantity" />
            </div>          
          </q-item-section>
        </q-item>

        <q-separator spaced inset :key="result.productIdentifier.id + 'separator'" />
      </template>          
    </q-list>   
    <q-pagination
        class="pagination"
        v-model="currentPage"
        :max="getMax()"
        boundary-links
        direction-links
        color="teal"
      />     
  </div>  
</template>

<script>
export default {
  name: 'Results',
  props: {   
    search: {
      type: String,
      default() {
        return ''
      }
    },
    selected: {
      type: Number,
      default() {
        return null
      }
    }
  },
  components: {
    
  },
  data() {
    return {
      currentPage: 1
    }
  },
  methods: {
    getMax() {
      if (this.results) {
        return Math.ceil(this.results.length / 7)
      }

      return 0      
    }
  },
  computed: {
    showText() {
      if (!this.results) return `Showing 0 results for \"${this.search ? this.search : ''}\"`
      else if (this.results) {
        const firstNum = 1 + ((this.currentPage-1)*7)
        let secondNum = 0 + (this.currentPage*7)
        if (secondNum > this.results.length) secondNum = this.results.length
        return `Showing ${firstNum}-${secondNum} of ${this.results.length} results for \"${this.search ? this.search : ''}\"`
      }    
      
      return ''
    },
    results() {
      return this.$store.state.inventory.searchResults
    },
    paginatedResults() {      
      if (this.results) return this.results.slice(0 + ((this.currentPage-1)*7), 0 + (this.currentPage*7))
      else return []
    }
  }
}
</script>

<style scoped>
.pagination {
  position: absolute;
  left: 50%;
  bottom: 16px;
  transform: translateX(-50%)
}
</style>
