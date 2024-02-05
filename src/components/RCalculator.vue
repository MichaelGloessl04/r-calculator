<script setup lang="ts">
import RDisplay from './RDisplay.vue';
import RManager from './RManager.vue';
import { Resistor } from '../types/resistor';
</script>

<template>
    <body>
        <h1>R Kalkulator</h1>
        <div class="mode-picker">   
            <input type="radio" id="series" name="mode" v-model="series" value="true">
            <label for="series">Seriell</label>
            <input type="radio" id="parallel" name="mode" v-model="series" value="false">
            <label for="parallel">Parallel</label>
        </div>
        <div class="result">{{ sum }} &#8486;</div>
        <RManager class="manager" @add-resistor-event="addResistor" :resistors="resistors"/>
        <RDisplay :resistors="resistors"/>
    </body>
</template>

<script lang="ts">
export default {
    data() {
        return {
            series: "true",
            resistors: [] as Resistor[],
            sum: 0
        }
    },
    methods: {
        addResistor(new_resistor: Resistor) {
            this.resistors.push(new_resistor);
            this.calculateSum();
        },
        calculateSum() {
            const choice = JSON.parse(this.series);
            if (this.resistors.length === 0) {
                this.sum = 0;
                return;
            }
            if (choice == true) {
                console.log("series");
                let series_sum = 0;
                this.resistors.forEach(resistor => {
                    series_sum += resistor.resistance;
                });
                this.sum = series_sum;
            } else if (choice == false) {
                console.log("parallel");
                let parallel_sum = 0;
                this.resistors.forEach(resistor => {
                    parallel_sum += 1 / resistor.resistance;
                    console.log(parallel_sum);
                });
                this.sum = 1 / parallel_sum;
            } else {
                console.error("Invalid choice: " + choice)
                console.error("Choice must be true or false, not " + typeof choice)
            }
        }
    },
    watch: {
        series: {
            handler() {
                this.calculateSum();
            }
        }
    }
}
</script>

<style scoped>
    .result {
        font-size: 2em;
        text-align: center;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        border-bottom: 3px solid #3f3f3f;
    }
    .manager {
        margin-top: 20px;
    }
    .mode-picker {
        display: flex;
        justify-content: left;
        margin: 10px;
        margin-left: 0px;
    }
    h1 {
        margin-bottom: 0;
    }
</style>
