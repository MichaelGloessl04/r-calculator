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
                    <tr v-for="(resistor, index) in resistors" :key="resistor.name">
                        <td>{{ resistor.name }}</td>
                        <td class="resistance" @mouseover="resistor.hovered = true" @mouseleave="resistor.hovered = false">{{ resistor.resistance }} &#8486;
                            <button class="delete" v-if="resistor.hovered" @click="remove_resistor(index)">-</button>
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

defineProps({
    resistors: {
        type: Array as () => Resistor[],
        required: true,
    },
});

const emit = defineEmits(['remove-resistor-event']);

const remove_resistor = (index: number) => {
    emit('remove-resistor-event', index);
}
</script>

<style scoped>
    .resistance {
        text-align: right;
        width: 400px;
        height: 30px;
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
        text-align: center;
        font-size: 16px;
        padding: 10px;
        padding-top: 0px;
        padding-bottom: 0px;
        vertical-align: middle;
    }
    .delete:hover {
        background-color: #f44336;
        color: white;
        border: 1px solid white;
    }
</style>
