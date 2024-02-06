<template>
    <body>
        <h2>{{ $t('message.resistors') }}</h2>
        <div class="box">
            <table v-if="resistors.length > 0">
                <thead>
                    <tr>
                        <th>{{ $t('message.name') }}</th>
                        <th>{{ $t('message.resistance') }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="resistor in resistors" :key="resistor.name" @mouseover="hovered = true" @mouseleave="hovered = false">
                        <td>{{ resistor.name }}</td>
                        <td class="resistance">{{ resistor.resistance }} &#8486;
                            <button class="delete" v-if="hovered">-</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p v-else>{{ $t('message.empty') }}</p>
        </div>
    </body>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { Resistor } from '../types/resistor';

import { ref } from 'vue';

const hovered = ref(false);

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
    .delete {
        color: white;
        border: none;
        padding: 5px 10px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
    }
</style>
