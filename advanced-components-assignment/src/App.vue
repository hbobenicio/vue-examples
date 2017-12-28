<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="selectedComponent = Blue.name">Load Blue Template</button>
                <button class="btn btn-success" @click="selectedComponent = Green.name">Load Green Template</button>
                <button class="btn btn-danger" @click="selectedComponent = Red.name">Load Red Template</button>
                <hr>

                <component :is="selectedComponent">
                  <template v-if="selectedComponent === Blue.name">
                    <span slot="title">Blue Title</span>
                    <p>Blue Box</p>
                  </template>

                  <template v-else-if="selectedComponent === Green.name">
                    <span slot="title">Green Title</span>
                  </template>

                  <template v-else-if="selectedComponent === Red.name">
                    <p>Red Box</p>
                  </template>
                </component>

                <!-- <app-blue>
                  <h3>Blue Title</h3>
                  <p>Blue Box</p>
                </app-blue>

                <app-green>
                  <h3>Green Title</h3>
                  <p>Green Box</p>
                </app-green>

                <app-red>
                  <h3>Red Title</h3>
                  <p>Red Box</p>
                </app-red> -->
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        components: {
            [Blue.name]: Blue,
            [Green.name]: Green,
            [Red.name]: Red
        },

        data () {
          return {
            selectedComponent: Blue.name,
            Blue,
            Green,
            Red
          }
        }
    }
</script>

<style>
</style>
