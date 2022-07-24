<template>
    <input
        type="checkbox"
        @change="$emit('update:modelValue', $event.target.checked)"
        :checked="modelValue"
        class="field"
        :id="uuid"
    />
    <label :for="uuid" v-if="label">{{ label }}</label>
</template>

<script>
import UniqueID from '../js/UniqueID.js'

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
        },
        setup() {
            const uuid = UniqueID().getID()
            return {
                uuid
            }
        }
    }
</script>