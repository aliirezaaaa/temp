<template>
    <q-header elevated class="bg-primary text-white">
        <q-toolbar>
            <q-toolbar-title>
                Cinema
            </q-toolbar-title>

            <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
        </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
        <q-scroll-area class="fit">
            <q-list padding class="menu-list">
                <q-item to="/AddFilm" clickable v-ripple>
                    <q-item-section avatar>
                        <q-icon name="movie" />
                    </q-item-section>

                    <q-item-section>
                        Add Film
                    </q-item-section>
                </q-item>

                <q-item to="/AddCinema" clickable v-ripple>
                    <q-item-section avatar>
                        <q-icon name="stadium" />
                    </q-item-section>

                    <q-item-section>
                        Add Cinema
                    </q-item-section>
                </q-item>

            </q-list>
        </q-scroll-area>
    </q-drawer>
</template>
  
<script>
import { ref } from 'vue'

export default {
    setup() {
        const rightDrawerOpen = ref(false)

        return {
            rightDrawerOpen,
            toggleRightDrawer() {
                rightDrawerOpen.value = !rightDrawerOpen.value
            },

        }
    }
}
</script>