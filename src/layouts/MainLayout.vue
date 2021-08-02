<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="leftDrawerOpen = !leftDrawerOpen" />

        <q-toolbar-title>          
          Our Project
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" content-class="bg-grey-2" bordered>
      <q-list>
        <div class="drawer-item">
          <q-btn icon="favorite_border" outline color="accent" label="Welcome" />
        </div>
        <SectionLink
          v-for="link in sectionLinks"
          :key="link.to"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>  
</template>

<script>
import SectionLink from 'src/components/SectionLink.vue'

const linksData = [
  {
    title: 'Inventory',
    icon: 'o_inventory',
    to: '/inventory'
  },
  {
    title: 'Orders',
    icon: 'o_local_shipping',
    to: '/orders'
  },
  {
    title: 'Reports',
    icon: 'o_assessment',
    to: '/reports'
  }  
];

export default {
  name: 'MainLayout',
  components: { SectionLink },
  data () {
    return {
      leftDrawerOpen: false,
      sectionLinks: linksData
    }
  }
}
</script>

<style scoped>
.drawer-column {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.drawer-bottom { 
  align-self: flex-end;
  min-width: 100%;
  display: flex;
  justify-content: center;
}

.block-icon {
  display: inline-block;
}

.drawer-item {
  min-width: 100%;
  padding: 18px 8px;
  display: flex;
  justify-content: center;
}
</style>
