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
        <b-select expanded v-model="selectedFunction" @input="updateOutput">
          <option
            v-for="[name] in Object.entries(functions)"
            :value="name"
            :key="name"
          >
            {{ name }}
          </option>
        </b-select>
      </b-field>
      <b-field>
        <b-switch v-model="splitOnNewLine" @input="updateOutput">
          Split on New Line
        </b-switch>
      </b-field>
      <b-field>
        <b-input
          type="textarea"
          rows="10"
          v-model="output"
          v-clipboard:copy="output"
        ></b-input>
      </b-field>
      <b-field>
        <b-button type="is-primary">Copy to Clipboard</b-button>
      </b-field>
    </section>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <i
            >Source code is available on
            <a
              href="https://github.com/neverendingqs/string-utils-ui"
              target="_blank"
              rel="noopener noreferrer"
              >GitHub</a
            >.</i
          >
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import {
  camelCase,
  capitalize,
  deburr,
  escape,
  escapeRegExp,
  kebabCase,
  lowerCase,
  lowerFirst,
  snakeCase,
  startCase,
  toLower,
  toUpper,
  trim,
  trimEnd,
  trimStart,
  unescape,
  upperCase,
  upperFirst,
  words
} from 'lodash';

export default {
  name: 'App',
  components: {},
  data() {
    return {
      input: '',
      functions: {
        'Base64 Decode': btoa,
        'Base64 Encode': atob,
        'Camel Case': camelCase,
        Capitalize: capitalize,
        Deburr: deburr,
        'HTML Escape (Simple)': escape,
        'HTML Unescape (Simple)': unescape,
        'Kebab Case': kebabCase,
        'Lower Case (Words)': lowerCase,
        'Lower Case (String': toLower,
        'Lower First': lowerFirst,
        'Regex Escape': escapeRegExp,
        'Snake Case': snakeCase,
        'Start Case': startCase,
        Trim: trim,
        'Trim End': trimEnd,
        'Trim Start': trimStart,
        'Upper Case (String)': toUpper,
        'Upper Case (Words)': upperCase,
        'Upper First': upperFirst,
        'URI Decode': decodeURI,
        'URI Decode Component': decodeURIComponent,
        'URI Encode': encodeURI,
        'URI Encode Component': encodeURIComponent,
        Words: words
      },
      selectedFunction: 'Base64 Decode',
      splitOnNewLine: true,
      output: ''
    };
  },
  methods: {
    updateOutput() {
      const f = this.functions[this.selectedFunction];
      this.output = this.splitOnNewLine
        ? this.input
            .split(/\r\n|\r|\n/)
            .map(f)
            .join('\n')
        : f(this.input);
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
