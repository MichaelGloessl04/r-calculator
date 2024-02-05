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

<script setup lang="ts">
import RDisplay from './RDisplay.vue';
import RManager from './RManager.vue';
import { Resistor } from '../types/resistor';

import { ref, watch } from 'vue';

const resistors = ref([] as Resistor[]);
const series = ref("true");
const sum = ref(0);

const addResistor = (new_resistor: Resistor) => {
    resistors.value.push(new_resistor);
    calculateSum();
}

const calculateSum = () => {
    const choice = JSON.parse(series.value);
    if (resistors.value.length === 0) {
        sum.value = 0;
        return;
    }
    
    if (choice) {
        let series_sum = 0;
        resistors.value.forEach(resistor => {
            series_sum += resistor.resistance;
        });
        sum.value = series_sum;
    } else {
        let parallel_sum = 0;
        resistors.value.forEach(resistor => {
            parallel_sum += 1 / resistor.resistance;
        });
        sum.value = 1 / parallel_sum;
    }
}

watch(series, () => {
    calculateSum();
});
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
