<template>
    <div class="gulu-tabs">
        <div class="gulu-tabs-nav" ref="container">
            <div class="gulu-tabs-nav-item" 
            v-for="(title, index) in titles" :key="index"
            :ref="el => {if(title === selected) selectedItem = el}"
            :class="{selected: title === selected}"
            @click="selectTab(title)"
             >{{title}}</div>
             <div class="gulu-tabs-nav-indicator" ref="indicator"></div>
        </div>
        <div class="gulu-tabs-content">
            <component class="gulu-tabs-content-item" v-for="(component, index) in defaults" 
            :key="index" :is="component"
            :class="{selected: component.props.title === selected}"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { onMounted, ref, watchEffect } from 'vue';
import Tab from "./Tab.vue";
export default {
    props:{
        selected: {
            type: String,
        }
    },
    setup(props, context){
        //checking the type of Tabs's children and make sure they're all the Tab type. 
        const defaults = context.slots.default();
        defaults.forEach((tag)=>{
            if(tag.type !== Tab){
                throw new Error("Tabs's children must be Tab")
            }
        })
        const selectedItem = ref<HTMLDivElement>(null);
        const indicator = ref<HTMLDivElement>(null);
        const container = ref<HTMLDivElement>(null);

        //this is actually quite similar to useEffect in react lol 
        onMounted(()=>{
            watchEffect(()=>{
                const {width} = selectedItem.value.getBoundingClientRect();
                indicator.value.style.width = `${width}px`
                const {left: left1} = container.value.getBoundingClientRect();
                const {left: left2} = selectedItem.value.getBoundingClientRect();
                const left = left2 - left1;
                indicator.value.style.left = left + "px";
            }, {flush: "post"})
        })

        const titles = defaults.map((tag)=>{
            return tag.props.title
        })

        const selectTab = (title: string)=>{
            context.emit("update:selected", title)
        }
        return {
            defaults,
            titles,
            selectTab,
            selectedItem,
            indicator,
            container
        }
    }
}
</script>

<style lang="scss">
    $blue: #40a9ff;
    $color: #333;
    $border-color: #d9d9d9;
    .gulu-tabs {
    &-nav {
        display: flex;
        color: $color;
        border-bottom: 1px solid $border-color;
        position: relative;
        &-item {
            padding: 8px 0;
            margin: 0 16px;
            cursor: pointer;
                &:first-child {
                    margin-left: 0;
                }
                &.selected {
                    color: $blue;
                }
            }
            &-indicator {
                position: absolute;
                height: 0.25rem;
                background: $blue;
                left: 0;
                bottom: -1px;
                width: 100px;
                transition: left 0.3s ease-in-out;
            }
        }
        &-content {
            padding: 0.5rem 0;
            &-item{
                display: none;
                &.selected{
                    display: block;
                }
            }
        }
    }
</style>
