<template>
    <input
        type="checkbox"
        @change="$emit('update:modelValue', $event.target.checked)"
        :checked="modelValue"
        class="field"
    />
    <label v-if="label">{{ label }}</label>
</template>

<script>
    export default{
        name: 'base-checkbox',
        props: {
            label: {
                type: String,
                default: ''
            },
            modelValue: {
                type: Boolean,
                default: false
            }
        }
    }
</script>