<template>
  <q-page>   
    <div class="split">
      <div class="left q-pa-md relative-position">
        <div class="left-header row">
          <q-space />
          <q-btn icon="add_circle_outline" outline color="accent" label="Intake" @click="showIntake = true"/>
        </div>
        <Search v-model="search" class="q-mt-md" />
        <Results :search="search" :results="data" class="q-mt-md" />
        <!-- <q-pagination
          class="pagination"
          v-model="currentPage"
          :max="5"
          boundary-links
          direction-links
          color="teal"
        />     -->
      </div>
      <div class="right q-pa-md">
        <div class="left-header row">
          <q-space />
          <q-btn icon="edit" outline color="accent" label="Edit"/>
        </div>
        <p>Name: Screw</p>         
        <p>Category: Components</p> 
        <p>Location: Chicago</p> 
        <p>Quantity: 12</p> 
        <p>Unit: boxes</p>         
        <p>Category: Components</p> 
        <img class="product-image" src="../assets/screw.jpg" alt="Image of a screw">
      </div>      
    </div>      

    <q-dialog 
      v-model="showIntake"
      transition-show="jump-right"
      transition-hide="jump-left"
    >
      <q-card class="intake-card">
        <q-card-section>
          <div class="text-h6">Intake</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Add an item
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Complete" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import Search from '../components/inventory/Search.vue'
import Results from '../components/inventory/Results.vue'
import mockData from './mockData.js'

export default {
  name: 'PageInventory',

  components: {
    Search,
    Results
  },

  data() {
    return {
      showIntake: false,
      search: '',
      currentPage: 1,
      data: null      
    }
  },

  created() {
    this.data = mockData
  },

  methods: {
    
  }
}
</script>

<style scoped>
.split {
  width: 100%;
  height: calc(100vh - 50px);
  display: flex;  
}

.left {
  background-color: white;
  width: 50%;
  border-right: 2px dashed green;
}

.right {
  background-color: rgb(246, 246, 246);
  width: 50%;
}

.intake-card {
  min-width: 80%;
  height: 80%;
}

.pagination {
  position: absolute;
  left: 50%;
  bottom: 16px;
  transform: translateX(-50%)
}

.product-image {
  width: 250px;
}
</style>
