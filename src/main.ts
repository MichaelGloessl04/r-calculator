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
        },
        pl: {
            message: {
                title: 'Kalkulator R',
                serial: 'Szeregowy',
                parallel: 'Równoległy',
                resistance: 'Opor',
                name: 'Nazwa',
                add: 'Dodaj',
                resistors: 'Rezystory',
                add_resistor: 'Dodaj rezystor',
                empty: 'bardzo pusto tutaj...',
            }
        },
        ru: {
            message: {
                title: 'Калькулятор R',
                serial: 'Последовательный',
                parallel: 'Параллельный',
                resistance: 'Сопротивление',
                name: 'Имя',
                add: 'Добавить',
                resistors: 'Резисторы',
                add_resistor: 'Добавить резистор',
                empty: 'очень пусто здесь...',
            }
        },
        tr: {
            message: {
                title: 'R Hesaplayıcı',
                serial: 'Seri',
                parallel: 'Paralel',
                resistance: 'Direnç',
                name: 'Ad',
                add: 'Ekle',
                resistors: 'Dirençler',
                add_resistor: 'Direnç ekle',
                empty: 'burası çok boş...',
            }
        },
        ja: {
            message: {
                title: 'R 計算機',
                serial: 'シリアル',
                parallel: '並列',
                resistance: '抵抗',
                name: '名前',
                add: '追加',
                resistors: '抵抗',
                add_resistor: '抵抗を追加',
                empty: 'ここはとても空です...',
            }
        },
        zh: {
            message: {
                title: 'R 计算器',
                serial: '串联',
                parallel: '并联',
                resistance: '电阻',
                name: '名称',
                add: '添加',
                resistors: '电阻',
                add_resistor: '添加电阻',
                empty: '这里非常空...',
            }
        },
        ko: {
            message: {
                title: 'R 계산기',
                serial: '직렬',
                parallel: '병렬',
                resistance: '저항',
                name: '이름',
                add: '추가',
                resistors: '저항',
                add_resistor: '저항 추가',
                empty: '여기는 매우 비어 있습니다...',
            }
        },
    }
});

const app = createApp(App);

app.use(i18n);
app.mount("#app");
