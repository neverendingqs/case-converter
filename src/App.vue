<template>
  <div id="app" class="container">
    <h1 class="title is-1">String Utilities</h1>
    <h2 class="subtitle is-4">Handy string utilities!</h2>
    <section>
      <b-field>
        <b-input
          type="textarea"
          rows="10"
          v-model="input"
          @input="updateOutput"
        ></b-input>
      </b-field>
      <b-field>
        <b-select
          expanded
          v-model="selectedFunction"
        >
          <option
            v-for="[name] in Object.entries(functions)"
            :value="name"
            :key="name">
            {{ name }}
          </option>
        </b-select>
      </b-field>
      <b-field>
        <b-input
          type="textarea"
          rows="10"
          v-model="output"
        ></b-input>
      </b-field>
      <b-field>
        <b-button type="is-primary">Copy to Clipboard</b-button>
      </b-field>
    </section>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
  },
  data() {
    return {
      input: '',
      functions: {
        'Base64 Decode': btoa,
        'Base64 Encode': atob
      },
      selectedFunction: 'Base64 Decode',
      output: ''
    }
  },
  methods: {
    updateOutput() {
      const f = this.functions[this.selectedFunction];
      this.output = f(this.input);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
