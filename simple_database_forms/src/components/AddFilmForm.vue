<template>
    <div style="width: 30rem;" class="q-pa-md">
        <q-card bordered>
            <q-card-section>
                <div style="display: flex; justify-content: center;" class="text-h6">Add Film</div>
            </q-card-section>

            <q-separator inset />

            <q-card-section>
                <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-sm">

                    <q-input filled v-model="title" label="Film Title *" hint="title of film" lazy-rules
                        :rules="[val => val && val.length > 0 || 'Please type something']" />

                    <q-input filled type="number" v-model="duration" label="Film Duration *" lazy-rules :rules="[
                        val => val !== null && val !== '' || 'Please type duration of film',
                        val => val > 0 || 'Please type a real duration'
                    ]" />

                    <q-input filled v-model="genre" label="Film Genre *" hint="genre of film" lazy-rules
                        :rules="[val => val && val.length > 0 || 'Please type something']" />

                    <q-input filled type="number" v-model="rate" label="Film Rating *" lazy-rules :rules="[
                        val => val !== null && val !== '' || 'Please insert rate of film',
                        val => val >= 1 && val <= 10 || 'Please type a real rate'
                    ]" />

                    <q-input filled v-model="summary" label="Film Summary *" hint="summary of film" lazy-rules
                        :rules="[val => val && val.length > 0 || 'Please type something']" />

                    <div style="display: flex;justify-content: center;">
                        <q-btn label="Submit" type="submit" color="primary" />
                        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
                    </div>
                </q-form>
            </q-card-section>
        </q-card>


    </div>
</template>
  
<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'
import AuthenticationService from '../services/AuthenticationService'

export default {
    setup() {
        const $q = useQuasar()

        const title = ref(null)
        const duration = ref(null)
        const genre = ref(null)
        const rate = ref(null)
        const summary = ref(null)

        return {
            title,
            duration,
            genre,
            rate,
            summary,

            async onSubmit() {
                const new_film = {
                    title: title.value,
                    duration: duration.value,
                    genre: genre.value,
                    rate: rate.value,
                    summary: summary.value,
                }
                const response = await AuthenticationService.registerFilm({
                    title: title.value,
                    duration: duration.value,
                    genre: genre.value,
                    rate: rate.value,
                    summary: summary.value,
                })
                console.log(response);
                $q.notify({
                    color: 'green-5',
                    textColor: 'white',
                    icon: 'done',
                    message: 'New film added successfuly.'
                })
            },

            onReset() {
                title.value = null
                duration.value = null
                genre.value = null
                rate.value = null
                summary.value = null
            }
        }
    }
}
</script>
 