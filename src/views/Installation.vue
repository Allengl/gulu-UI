<template>
    <article class="markdown-body">
        <h1>Installation</h1>
        <h2>YARN</h2>
        <p>If you're using Vue CLI to build your project, then yarn is the default package manager. Simply run the command below</p>
        <pre><code>$ yarn add gulugulu-ui</code></pre>
        <h2>NPM</h2>
        <pre><code>$ npm install gulugulu-ui</code></pre>
        <Button @click="$router.push('get-started')">Next: Get Started</Button>
    </article>
</template>

<script lang="ts">
import Button from "../library/Button.vue";
export default {
    components:{Button}
}
</script>
