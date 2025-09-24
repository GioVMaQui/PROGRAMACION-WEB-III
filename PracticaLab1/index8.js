function Callback(callback) {
    setTimeout(callback, 2000);
}

Callback(() => {
    console.log("La vida es bella");
});