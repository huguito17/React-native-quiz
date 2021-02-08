//dos parametros obligatorios y uno opcional, async es asincrona, 
import { shuffleArray } from "../utils/utils";

const fetchuizQuestion = async (amount, difficulty, category= "") => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&category=${category}&type=multiple`;
    //metodo es la peticion, por ejemplo el GET, es extraccion.
    const response = await fetch(endpoint);
    //Fetch es una promesa, no es seguro su retorno. (completado, completando o fallido)
    const data = await response.json();
    

    return data.results.map((question) => ({
        ...question,
        answers: shuffleArray([
            ...question.incorrect_answers,
            question.correct_answer,
        ]),
    }));
};

export default fetchuizQuestion;


// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Map
  // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Spread_operator