"use strict"

const { createApp } = Vue;

const myApp = createApp({
    data() {
        return {
            todos:[
                {
                    text: "Fare la spesa",
                    done: true
                },                {
                    text: "Pulire casa",
                    done: true
                },                {
                    text: "Studiare",
                    done: true
                },
            ]
        }
    }
});
myApp.mount("#app")
