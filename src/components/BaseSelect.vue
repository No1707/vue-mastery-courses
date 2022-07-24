<template>
    <label :for="uuid" v-if="label">{{label}}</label>
    <select
        :value="modelValue"
        class="field"
        v-bind="{
            ...$attrs,
            onChange: $event => { $emit('update:modelValue', $event.target.value) }
        }"
        :id="uuid"
    >
        <option
            v-for="option in options"
            :value="option"
            :key="option"
            :selected="option === modelValue"
        >{{ option }}</option>
    </select>
</template>

<script>
import UniqueID from '../js/UniqueID.js'

    export default{
        name: 'base-select',
        props: {
            label: {
                type: String,
                default: ''
            },
            options: {
                type: Array,
                required: true
            },
            modelValue: {
                type: [Number, String],
                default: ''
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