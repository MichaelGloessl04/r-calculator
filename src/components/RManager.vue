<template>
    <body>
        <h2>{{ $t('message.add_resistor') }}</h2>
        <div class="box">
            <div class="field">
                <label for="name-field">{{ $t('message.name') }}:</label>
                <input id="name-field" type="text" v-model="new_resistor.name" :placeholder="newResistorName()">
            </div>
            <div class="field">
                <label for="resistance-field">{{ $t('message.resistance') }}:</label>
                <input id="resistance-field" type="number" v-model="new_resistor.resistance" placeholder="Resistance"> &#8486;
            </div>
            <button @click="createResistor">{{ $t('message.add') }}</button>
        </div>
    </body>
</template>

<script setup lang="ts">
import { Resistor } from '../types/resistor';

let new_resistor: Resistor = {
    name: "",
    resistance: 0
};

const emit = defineEmits(['add-resistor-event']);

const props = defineProps({
    resistors: {
        type: Array as () => Resistor[],
        required: true,
    },
});

const createResistor = () => {
    if (new_resistor.resistance <= 0) {
        return;  // TODO: Show error message
    }
    if (props.resistors.some(resistor => resistor.name === new_resistor.name)) {
        return;  // TODO: Show error message
    }
    if (new_resistor.name === "") {
        new_resistor.name = newResistorName();
    }
    emit('add-resistor-event', new_resistor);
    new_resistor = { name: "", resistance: 0 };
}

const newResistorName = () => {
    if (props.resistors.length === 0) {
        return "R1";
    } else {
        return "R" + (props.resistors.length + 1);
    }
}
</script>

<style scoped>
    label {
        margin-right: 10px;
    }
    .field {
        margin-bottom: 10px;
    }
</style>
