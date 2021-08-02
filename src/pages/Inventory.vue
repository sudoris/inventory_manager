<template>
  <q-page>   
    <div class="split">
      <div class="left q-pa-md relative-position">
        <div class="left-header row">
          <q-space />
          <q-btn icon="add_circle_outline" outline color="accent" label="Intake" @click="showIntake = true"/>
        </div>
        <Search :search="search" @input="(val) => search = val" class="q-mt-md" />
        <Results :search="search" class="q-mt-md" />
        <q-pagination
          class="pagination"
          v-model="currentPage"
          :max="5"
          boundary-links
          direction-links
          color="teal"
        />    
      </div>
      <div class="right q-pa-md row">
        Item Details
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Complete" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import Search from '../components/search/Search.vue'
import Results from '../components/search/Results.vue'

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
      currentPage: 1
    }
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
  background-color: lightgray;
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
</style>
