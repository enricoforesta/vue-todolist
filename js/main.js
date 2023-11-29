"use strict"

const { createApp } = Vue;

const myApp = createApp({
    data() {
        return {
            addTodos: "",
            todos: [
                {
                    text: "Fare la spesa",
                    done: true
                }, {
                    text: "Pulire casa",
                    done: false
                }, {
                    text: "Studiare",
                    done: true
                },
            ]
        }
    },
    methods: {
        // Funzione per eliminare item
        deleteTodo(i) {
            this.todos.splice(i, 1);
        },
        // Funzione per aggiungere item
        addTodo() {
            console.log("ho cliccato add");
            if (this.addTodos.trim() !== "") {
                this.todos.push({ text: this.addTodos, done: false });
                this.addTodos = "";
            }
        },
        // Funzione per invertire il valore di item
        invert(i) {
            console.log("ho cliccato i")
            this.todos[i].done = !this.todos[i].done;
        },

    }
});
myApp.mount("#app")
