<template>
    <div class="container">
        <h1 class="heading">{{ header }}</h1>
        <div v-if="dataLoaded">
            <div class="festivals" v-for="festival in festivals" :key="festival.name">
                <div class="festival">
                    <router-link :to=" {name: 'Detail', params: { festivalId : festival.sys.id } }" >
                        {{ festival.fields.name }}
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getFestivals } from '../api/festivals'

export default {
  name: 'Home',
  data () {
    return {
      header: 'Festivals',
      festivals: [],
      dataLoaded: false
    }
  },
  mounted () {
    getFestivals().then(response => {
      this.festivals = response.data.items
      this.dataLoaded = true

      console.log(this.festivals)
    })
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
