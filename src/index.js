import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import f from "./modules/fetch";
import sendForm from "./modules/sendForm";
import calc from "./modules/calc";

timer('15 September 2022');
menu();
modal();
calc(100);
// f();
sendForm({formId: 'form1', someElem: [
    {
        type: 'block',
        id: 'total'
    }
], formModalId: 'form3', formFooterId: 'form2'});
