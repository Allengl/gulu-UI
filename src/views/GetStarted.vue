<template>
    <h1>Get Started</h1>
    <h2>Import Components</h2>
    <pre class="language-javascript" v-html="Prism.highlight(importCode, Prism.languages.javascript, 'javascript')"></pre>
    <h2>Register Components</h2>
    <pre class="language-javascript" v-html="Prism.highlight(registerCode, Prism.languages.javascript, 'javascript')"></pre>
    <h2>Usage</h2>
    <h3>Example</h3>
    <Button>Default Button</Button>
    <pre class="language-html" v-html="Prism.highlight(usageCode, Prism.languages.html, 'html')"></pre>
</template>

<script lang="ts">
import "prismjs";
import "prismjs/themes/prism-okaidia.css";
import Button from "../library/Button.vue";
const Prism = (window as any).Prism;

const importCode = `import {Button} from \"gulu-ui\";\r\nimport \"gulu-ui\/dist\/library\/gulu-ui.css\";`;
const registerCode = `export default {\r\n  name: \"ComponentName\",\r\n  components: {\r\n    \"gulu-button\": Button,\r\n  },\r\n}`;
const usageCode = `<template>\r\n  <div>\r\n    <gulu-button>Default Button<\/gulu-button>\r\n  <\/div>\r\n<\/template>`;

export default {
    components:{
        Button,
    },
    setup(){
        return{Prism, importCode, registerCode, usageCode}
    }
}
</script>

<style lang="scss" scoped>
    h2{
        margin-top: 2rem;
    }
    pre{
        margin-bottom: 2rem;
    }
    h3{
        margin: 1rem 0;
    }
</style>
