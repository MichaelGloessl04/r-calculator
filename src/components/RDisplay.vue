<template>
    <body>
        <h2>Widerstände</h2>
        <div class="box">
            <table v-if="resistors.length > 0">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Wert</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="resistor in resistors" :key="resistor.name">
                        <td>{{ resistor.name }}</td>
                        <td class="resistance">{{ resistor.resistance }} &#8486;</td>
                    </tr>
                </tbody>
            </table>
            <p v-else>Sehr leer hier...</p>
        </div>
    </body>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { Resistor } from '../types/resistor';

defineProps({
    resistors: {
        type: Array as () => Resistor[],
        required: true,
    },
});
</script>

<style scoped>
    .resistance {
        text-align: right;
    }
    table {
        width: 100%;
        border-collapse: collapse;
        margin: auto;
    }
    th, td {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }
</style>
