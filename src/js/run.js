import * as lib from './lib';

export let exist = () => {

    console.log("Let's run");
    console.log("time " + lib.time);

    console.log("ES_arrow " + lib.multiplyES6(2, 3));

    console.log("ES_arrow2 " + lib.multiplyES6(2, 2));
}
