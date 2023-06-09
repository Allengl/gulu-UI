<template>
    <button v-bind="$attrs" class="gulu-button" :class="classes" :disabled="disabled">
        <span v-if="loading" class="gulu-loading-indicator"></span>
        <slot/>
    </button>
</template>

<script lang="ts">
import { computed } from 'vue'
export default {
    props: {
        theme: {
            type: String,
            default: "normal"
        },
        size: {
            type: String,
            default: "normal"
        },
        priority: {
            type: String,
            default: "normal"
        },
        disabled: {
            type: Boolean,
            default: false
        },
        loading: {
            type: Boolean,
            default: false
        }
    },
    setup(props){
        const {theme, size, priority} = props;
        const classes = computed(()=>{
            return {
                [`gulu-theme-${theme}`] : theme,
                [`gulu-size-${size}`] : theme,
                [`gulu-priority-${priority}`] : theme,
            }
        })
        return {classes}
    }
}
</script>

<style lang="scss">
    $height: 2rem;
    $border-color: #d9d9d9;
    $color: #333;
    $blue: #40a9ff;
    $radius: 0.25rem;
    $red: red;
    $grey: grey;
    .gulu-button {
    box-sizing: border-box;
    height: $height;
    padding: 0 0.75rem;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    background: white;
    color: $color;
    border: 1px solid $border-color;
    border-radius: $radius;
    box-shadow: 0 1px 0 fade-out(black, 0.95);
        & + & {
            margin-left: 0.5rem;
        }
        &:hover,
        &:focus {
            color: $blue;
            border-color: $blue;
        }
        &:focus {
            outline: none;
        }
        &::-moz-focus-inner {
            border: 0;
        }
        &.gulu-theme-link{
            border-color: transparent;
            box-shadow: none;
            color: $blue;
            &:hover,&:focus{
            color: lighten($blue, 10%);
            }
        }
        &.gulu-theme-text{
            border-color: transparent;
            box-shadow: none;
            color: inherit;
            &:hover,&:focus{
            background: darken(white, 5%);;
            }
        }
        &.gulu-size-large{
            font-size: 0.75* $height;
            height: 1.5 * $height;
            padding: 0 0.6*$height;
        }
        &.gulu-size-small{
            font-size: 0.375 * $height;
            height: 0.625 * $height;
            padding: 0 0.25*$height;
        }
        &.gulu-priority-primary {
            background: $blue;
            color: white;
            border-color: $blue;
            &:hover,
            &:focus {
                background: darken($blue, 10%);
                border-color: darken($blue, 10%);
            }
        }
        &.gulu-priority-danger {
            background: $red;
            border-color: $red;
            color: white;
            &:hover,
            &:focus {
                background: darken($red, 10%);
                border-color: darken($red, 10%);
            }
        }
        &[disabled] {
            cursor: not-allowed;
            color: $grey;
            &:hover {
                border-color: $grey;
            }
        }
        .gulu-loading-indicator{
            display: inline-block;
            width: 0.4375 * $height;
            height: 0.4375 * $height;
            margin-right: 0.125 * $height;
            border-radius: 0.25 * $height;
            border-color: $blue $blue $blue transparent;
            border-style: solid;
            border-width: 0.0625 * $height;
            animation: gulu-spin 1s infinite linear;
        }
    }

    @keyframes gulu-spin {
        0% {transform: rotate(0deg)}
        100% {transform: rotate(360deg)}
    }

</style>
