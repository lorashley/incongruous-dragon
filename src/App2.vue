<template>
    <div id="app" class="cui">
        <main>
            <headercomponent/>
            <div class="content">
                <div class="container-fluid">
                  <main>
                    <h1>{{ msg }}</h1>
                  <ul>
                    <codec-instance
                    v-for="codec in codecs"
                    v-bind:codec="codec"
                    v-bind:key="codec.id"
                    ></codec-instance>
                  </ul>
                </main>
                    <div class="section">
                        <router-view/>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<style>
@import 'http://www.cisco.com/web/fw/cisco-ui/1.3.5/dist/css/cui-standard.min.css'
</style>

<script>
// @ is an alias to /src
import headercomponent from './components/header.vue'  

export default {
  name: 'app',
  components: {
        headercomponent
    },
  data () {
    return {
      msg: 'Hello wild thing',
      codecs:[
        {name:'codec1', id:1},
        {name:'codec2', id:2},
        {name:'codec3', id:3},
        {name:'codec4', id:4},
        {name:'codec5', id:5},
        {name:'codec6', id:6},
        {name:'codec7', id:7},
        {name:'codec8', id:8},
        {name:'codec9', id:9},
      ]
    }
  }
}
</script>

<style lang="scss">

/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
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
a {
  color: #42b983;
}*/
</style>