<template>
  <div class="">
    <p>Showing 1-5 of 22 results for "{{search}}"</p>
    <q-list>
      <q-item>
        <q-item-section>
          <q-item-label>Some item</q-item-label>
          <q-item-label caption>Description. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
          <q-icon name="star" color="yellow" />
        </q-item-section>
      </q-item>

      <q-separator spaced inset />

      <q-item>
        <q-item-section>
          <q-item-label>Some item</q-item-label>
          <q-item-label caption>Description. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>Voted!</q-item-label>
        </q-item-section>
      </q-item>

      <q-separator spaced inset />

      <q-item>
        <q-item-section>
          <q-item-label>Some item</q-item-label>
          <q-item-label caption>Description. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-badge color="teal" label="10k" />
        </q-item-section>
      </q-item>

      <q-separator spaced inset />

      <q-item>
        <q-item-section>
          <q-item-label>Some item</q-item-label>
          <q-item-label caption>Description. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>2 min ago</q-item-label>
          <div class="text-orange">
            <q-icon name="star" />
            <q-icon name="star" />
            <q-icon name="star" />
          </div>
        </q-item-section>
      </q-item>

      <q-separator spaced inset />

      <q-item>
        <q-item-section>
          <q-item-label>Some item</q-item-label>
          <q-item-label caption>Description. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>meta</q-item-label>
        </q-item-section>
      </q-item>      
    </q-list>    
  </div>  
</template>

<script>
export default {
  name: 'Results',
  props: {
    results: {
      type: Array,
      default() {
        return []
      }
    },
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
      
    }
  }
}
</script>

<style scoped>

</style>
