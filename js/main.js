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
        deleteTodo(i) {
            this.todos.splice(i, 1);
        },
        addTodo() {
            console.log("ho cliccato add");
            if (this.addTodos.trim() !== "") {
                this.todos.push({ text: this.addTodos, done: false });
                this.addTodos = "";
            }
        },
        invert(i){
            console.log("ho cliccato i")
            if(this.todos[i].done === true){
                this.todos[i].done = false
            }
            else{
                this.todos[i].done = true
            }
        },

    }
});
myApp.mount("#app")
