<template>
    <label :for="uuid" v-if="label">{{ label }}</label>
    <input
        v-bind="{
            ...$attrs,
            onInput: $event => { $emit('update:modelValue', $event.target.value) }
        }"
        :placeholder="label"
        class="field"
        :value="modelValue"
        :id="uuid"
        :aria-describedby="error ? `${uuid}-error` : null"
        :aria-invalid="error ? true : null"
    >
    <p
        v-if="error"
        class="errorMessage"
        :id="`${uuid}-error`"
        aria-life="assertive"
    >{{ error }}</p>
</template>

<script>
import UniqueID from '../js/UniqueID.js'

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
            },
            error: {
                type: String,
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

<style></style>