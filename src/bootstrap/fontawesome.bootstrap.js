import Vue from "vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars,
    faTimes,
    faChevronUp,
    faChevronDown,
    faCalendar,
    faFolder,
    faComment,
    faPaperPlane,
    faArrowsAltH,
    faUser,
    faUsers,
    faArchive, faPollH, faPlus,
    faPencilAlt, faThList, faShare} from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faTelegram, faWhatsapp, faWeibo } from "@fortawesome/free-brands-svg-icons";

library.add(faBars,
    faTimes,
    faChevronUp,
    faChevronDown,
    faCalendar,
    faFolder,
    faComment,
    faPaperPlane,
    faArrowsAltH,
    faUser, faUsers, faArchive, faPollH, faPlus, faPencilAlt, faThList,
    faFacebookF, faTwitter, faTelegram, faWhatsapp, faWeibo, faShare);

Vue.component('font-awesome-icon', FontAwesomeIcon);
