var obj = {
    fnA() { console.log(this); },
    fnB: () => { console.log(this); },
};
obj.fnA() // this:obj
obj.fnB() // this:window
const { fnA, fnB } = obj;
fnA() // this:window
fnB() // this:window