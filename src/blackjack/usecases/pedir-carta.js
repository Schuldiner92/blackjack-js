
/**
 * Esta función me permite tomar una carta
 * @param {Array<String>} deck Ejemplo: [1S, AS, 2D, AD]
 * @returns {string} retorna la carta del deck
 */
export const pedirCarta = (deck) => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }         
    return deck.pop();
}