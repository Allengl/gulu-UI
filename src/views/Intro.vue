<template>
    <article class="markdown-body">
        <h1>Introduction</h1>
        <p>I wrote Gulu UI for study purposes. It's a UI library based on Vue 3 and Typescript.</p>
        <p>The process of writing this UI library was a great learning experience for me. 
            I've been building projects with React.js in the past several months and I needed to do some reviews. 
            All the design and implementation decisions are made based on my experience as a web developer. 
            Everything was written by myself, including this documentation website, and I tried to avoid using other libraries and dependencies as much as I could. 
            <strong>Therefore, I don't really recommend using this UI library in production.</strong></p>
            <p>However, if you wanted to checkout the source code, then you're most definitely in the right place.</p>
        <p>All the source code is stored in a public repository, <strong>here's the link: <a href="https://github.com/Allengl/gulu-UI">"https://github.com/Allengl/gulu-UI"</a></strong></p>
        <Button @click="$router.push('installation')">Next: Installation</Button>
    </article>
</template>

<script lang="ts">
import Button from "../library/Button.vue";
export default {
    components:{Button}
}
</script>
