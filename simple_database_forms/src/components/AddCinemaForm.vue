<template>
    <div style="width: 30rem;" class="q-pa-md">
        <q-card bordered>
            <q-card-section>
                <div style="display: flex; justify-content: center;" class="text-h6">Add Cinema</div>
            </q-card-section>

            <q-separator inset />

            <q-card-section>
                <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-sm">

                    <q-input filled v-model="name" label="Cinema Name *" hint="name of cinema" lazy-rules
                        :rules="[val => val && val.length > 0 || 'Please type something']" />

                    <q-input filled v-model="address" label="Cinema Address *" hint="address of cinema" lazy-rules
                        :rules="[val => val && val.length > 0 || 'Please type something']" />

                    <q-input filled type="number" v-model="screens" label="Number of Screens *" lazy-rules :rules="[
                        val => val !== null && val !== '' || 'Please type duration of film',
                        val => val > 0 || 'Please type a real number'
                    ]" />

                    <q-input filled v-model="facilities" label="Facilities *" hint="facilities of cinema" lazy-rules
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

        const name = ref(null)
        const address = ref(null)
        const screens = ref(null)
        const facilities = ref(null)

        return {
            name,
            address,
            screens,
            facilities,

            async onSubmit() {
                const new_cinema = {
                    name: name.value,
                    address: address.value,
                    screens: screens.value,
                    facilities: facilities.value,
                }

                const response = await AuthenticationService.registerCinema({
                    name: name.value,
                    address: address.value,
                    screens: screens.value,
                    facilities: facilities.value,
                })
                console.log(response.data);
                $q.notify({
                    color: 'green-5',
                    textColor: 'white',
                    icon: 'done',
                    message: 'New cinema added successfuly.'
                })
            },

            onReset() {
                name.value = null
                address.value = null
                screens.value = null
                facilities.value = null
            }
        }
    }
}
</script>
 