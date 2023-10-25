import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiChatDotsFill, IoPeople, IoSettings, MdDashboard, BiCalendar3} from "oh-vue-icons/icons";

import * as FaIcons from "oh-vue-icons/icons/fa";
const Fa = Object.values({ ...FaIcons });

addIcons(...Fa, BiChatDotsFill, IoPeople, IoSettings, MdDashboard, BiCalendar3);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.mount("#app");
