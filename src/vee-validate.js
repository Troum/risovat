import store from "./store";
import {extend, localize} from 'vee-validate';
import {email, required, image, confirmed} from "vee-validate/dist/rules";
import { setInteractionMode } from 'vee-validate';
import ru from 'vee-validate/dist/locale/ru';

setInteractionMode('lazy');

extend('required', required);
extend('email', email);
extend('image', image);
extend('confirmed', confirmed);
extend('captcha', (value) => {
    if (value === store.getters.captcha) {
        return true;
    }
    return 'Капча-то неправильная!';
});

localize('ru', ru);
