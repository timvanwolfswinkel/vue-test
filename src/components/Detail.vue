<template>
    <div class="container">
        <div class="festival">
            <h1>{{ festival.name }}</h1>
            <h2>{{ festival.slogan }}</h2>
            <p>{{ festival.description }}</p>
        </div>
    </div>
</template>

<script>
import { getFestival } from '../api/festivals'

export default {
  name: 'Home',
  data () {
    return {
      festival: {},
      dataLoaded: false
    }
  },
  mounted () {
    getFestival(this.$route.params.festivalId).then(response => {
      this.festival = response.data.fields
      this.dataLoaded = true
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
