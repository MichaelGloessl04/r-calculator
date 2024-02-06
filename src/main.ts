import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createI18n } from "vue-i18n";

const i18n = createI18n({
    locale: 'en',
    messages: {
        de: {
            message: {
                title: 'R Kalkulator',
                serial: 'Seriell',
                parallel: 'Parallel',
                resistance: 'Widerstand',
                name: 'Name',
                add: 'Hinzufügen',
                resistors: 'Widerstände',
                add_resistor: 'Widerstand hinzufügen',
                empty: 'sehr leer hier...',
            }
        },
        en: {
            message: {
                title: 'R Calculator',
                serial: 'Serial',
                parallel: 'Parallel',
                resistance: 'Resistance',
                name: 'Name',
                add: 'Add',
                resistors: 'Resistors',
                add_resistor: 'Add resistor',
                empty: 'very empty here...',
            }
        },
        fr: {
            message: {
                title: 'Calculateur de R',
                serial: 'Série',
                parallel: 'Parallèle',
                resistance: 'Résistance',
                name: 'Nom',
                add: 'Ajouter',
                resistors: 'Résistances',
                add_resistor: 'Ajouter une résistance',
                empty: 'très vide ici...',
            }
        },
        it: {
            message: {
                title: 'Calcolatore R',
                serial: 'Serie',
                parallel: 'Parallelo',
                resistance: 'Resistenza',
                name: 'Nome',
                add: 'Aggiungi',
                resistors: 'Resistenze',
                add_resistor: 'Aggiungi resistenza',
                empty: 'molto vuoto qui...',
            }
        },
        es: {
            message: {
                title: 'Calculadora R',
                serial: 'Serie',
                parallel: 'Paralelo',
                resistance: 'Resistencia',
                name: 'Nombre',
                add: 'Añadir',
                resistors: 'Resistencias',
                add_resistor: 'Añadir resistencia',
                empty: 'muy vacío aquí...',
            }
        },
        pt: {
            message: {
                title: 'Calculadora R',
                serial: 'Série',
                parallel: 'Paralelo',
                resistance: 'Resistência',
                name: 'Nome',
                add: 'Adicionar',
                resistors: 'Resistências',
                add_resistor: 'Adicionar resistência',
                empty: 'muito vazio aqui...',
            }
        },
        nl: {
            message: {
                title: 'R Calculator',
                serial: 'Serie',
                parallel: 'Parallel',
                resistance: 'Weerstand',
                name: 'Naam',
                add: 'Toevoegen',
                resistors: 'Weerstanden',
                add_resistor: 'Weerstand toevoegen',
                empty: 'heel leeg hier...',
            }
        }
    }
});

const app = createApp(App);

app.use(i18n);
app.mount("#app");
