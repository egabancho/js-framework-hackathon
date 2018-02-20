<template>
  <div id="app">
    <link rel="stylesheet" href="//cdn.materialdesignicons.com/2.0.46/css/materialdesignicons.min.css">
    <section class="hero is-danger">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Pink unicorn
          </h1>
          <h2 class="subtitle">
            It's awesome, just try.
          </h2>
        </div>
      </div>
    </section>
    <div class="container">
      <router-view/>
    </div>
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            <strong>Pink unicorn</strong>.
            Check it out on <a href="https://github.com/egabancho/js-framework-hackathon">GitHub</a>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
