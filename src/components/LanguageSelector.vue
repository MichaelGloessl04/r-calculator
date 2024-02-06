<template>
    <select v-model="$i18n.locale">
        <option v-for="(lang, i) in availableLanguages" :key="`lang-${i}`" :value="lang">{{ lang }}</option>
    </select>
</template>

<script lang="ts">
export default {
    data() {
        return {
            availableLanguages: ['en', 'fr', 'es', 'de', 'it', 'pt', 'nl', 'pl', 'ru', 'zh', 'ja', 'ko']
        };
    }
};
</script>