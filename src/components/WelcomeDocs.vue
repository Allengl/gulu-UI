<template>
    <article class="markdown-body">
        <h1>Welcome to Gulu UI</h1>
        <p>Hello, I'm Allen Deng, an interactive developer based in Shanghai.</p>
        <p>
        If you have some ideas, please send me an email. You can reach me at guolong613@gmail.com
        </p>
        <Button @click="$router.push('docs/intro')">Next: Introduction</Button>
    </article>
</template>

<script lang="ts">
import Button from "../library/Button.vue";
export default {
    components:{Button}
}
</script>
