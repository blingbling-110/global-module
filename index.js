globalThis.globalTestVar="I am a global variable",globalThis.globalTestFunc=function(l){console.log(`globalTestFunc's input is: ${l}`)};const l=globalThis.globalTestVar;export{l as varWrapper};
