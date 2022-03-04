import { createApp } from "vue";
import App from "./App.vue";
import { store, key } from "./store";
import "@l1ck0h/every-layout.css/every-layout.min.css";
import "@fontsource/press-start-2p";
import "nes.css/css/nes.min.css";

createApp(App).use(store, key).mount("#app");
