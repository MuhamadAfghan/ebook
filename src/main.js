import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css"; //CSS
import "bootstrap"; //JS
import router from "./routes";

// proses penyambungan antara App.vue dengan router
createApp(App).use(router).mount("#app");
