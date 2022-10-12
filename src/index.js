import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import f from "./modules/fetch";
import sendForm from "./modules/sendForm";
import calc from "./modules/calc";
import accordion from "./modules/accordion";

timer('15 September 2022');
menu();
modal();
f();
calc();
sendForm({formId: 'form1', someElem: [
    {
        type: 'block',
        id: 'total'
    }
]});
accordion();