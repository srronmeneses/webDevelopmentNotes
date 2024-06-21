import "./src/css/output.css";
import { App } from "./src/assets/js/app";
import notesHtml from "./src/assets/components/html/notesHtml.html?raw";
import { renderHtml } from "./src/assets/js";


App("#app")
renderHtml('#notes', notesHtml);