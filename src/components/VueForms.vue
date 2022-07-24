<template>
    <div>
        <h1>Create an event</h1>
        <form @submit.prevent="sendForm">

            <BaseSelect
                label="Select a category"
                :options="categories"
                v-model="event.category"
            />

            <h3>Name & describe your event</h3>

            <BaseInput 
                label="title"
                type="text"
                v-model=event.title 
            />
            <BaseInput 
                label="description"
                type="text" 
                v-model=event.description 
            />

            <h3>Where is your event?</h3>

            <BaseInput 
                label="location"
                type="text" 
                v-model=event.location
            />

            <h3>Are pets allowed?</h3>
            <div>
                <BaseRadioGroup
                    v-model="event.pets"
                    groupName="pets"
                    :options="petOptions"
                />
                <!-- <input
                    type="radio"
                    v-model="event.pets"
                    :value="1"
                    name="pets"
                />
                <label>Yes</label> -->
            </div>

            <!-- <div>
                <input
                    type="radio"
                    v-model="event.pets"
                    :value="0"
                    name="pets"
                />
                <label>No</label>
            </div> -->

            <h3>Extras</h3>
            <div>
                <!-- <input
                type="checkbox"
                v-model="event.extras.catering"
                class="field"
                />
                <label>Catering</label> -->
                <BaseCheckBox
                    label="Catering"
                    v-model="event.extras.catering"
                />
            </div>

            <div>
                <BaseCheckBox
                    label="Live music"
                    v-model="event.extras.music"
                />
            </div>

            <button class="button -fill-gradient" type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'

    export default {
    name: "vue-form",
    data() {
        return {
            categories: [
                "sustainability",
                "nature",
                "animal welfare",
                "housing",
                "education",
                "food",
                "community"
            ],
            event: {
                category: "",
                title: "",
                description: "",
                location: "",
                pets: 1,
                extras: {
                    catering: false,
                    music: false
                }
            },
            petOptions: [
                { label: 'Yes', value: 1},
                { label: 'No', value: 0}
            ]
        };
    },
    methods: {
        sendForm() {
            axios.post(
                'https://my-json-server.typicode.com/Code-Pop/Vue-3-Forms/events',
                this.event
            ).then(function(response){
                console.log('Response', response)
            }).catch(function(error){
                console.log('Error', error)
            })
        }
    }
}
</script>

<style></style>