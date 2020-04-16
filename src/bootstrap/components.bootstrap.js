import Vue from 'vue';
import { ValidationObserver, ValidationProvider } from "vee-validate";
import LessonComponent from "../components/LessonComponent";
import CourseComponent from "../components/CourseComponent";
import InfoModal from "../components/InfoModal";

Vue.component('validation-observer', ValidationObserver);
Vue.component('validation-provider', ValidationProvider);
Vue.component('lesson-component', LessonComponent);
Vue.component('course-component', CourseComponent);
Vue.component('info-modal', InfoModal);
