<template>
    <label>{{ label }}</label>
    <input
        v-bind="{
            ...$attrs,
            onInput: $event => { $emit('update:modelValue', $event.target.value) }
        }"
        :placeholder="label"
        class="field"
        :value="modelValue"
    >
</template>

<script>
    export default {
        name: "base-input",
        props: {
            label: {
                type: String,
                default: ''
            },
            modelValue: {
                type: [Number, String],
                default: ''
            }
        }
    }
</script>

<style></style>