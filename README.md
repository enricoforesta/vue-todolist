# Descrizione:
Rifare l'esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no

## MILESTONE 1

Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

## MILESTONE 2

Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

## MILESTONE 3

Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

# Logica 

1. Con Boostrap strutturiamo l html in modo da avere una struttura.

2. Nel Js creiamo un array di oggetti dove inseriamo i nostri TO DO.

3. Con un ciclo For creiamo gli elementi. e come condizione aggiungiamo una classe che      sbarra il testo in vase al valore nell array di oggetti.

4. Affianco l item aggiugiamo una "x" che tratteremo come un bottone, e al suo click, l item verra eliminato.

5. Al bottone dell html, aggiugniamo un evento @click e v-model di un propietà vuota, e passiamo una funzione, dove pushiamo un oggetto, con testo la propietà del v-model e con "done: false" di default.

# Bonus 1 

1. Aggiungere "@keyup.enter="addTodo" nell input dell html.

# Bonus 2
1. Aggiungere un evento click, sull item.

2. Creare una funzione che se il valore è "true" inverte in "false", e viceversa.