
export type FlashcardMetadata = {
    raw_front: string
    raw_back: string
    audio_url?: string
}

const MOCK_FLASHCARDS = [
    { raw_back: 'asdaadsuh', raw_front: 'Pourquoi nous ne somme pas comme les {americaines}?' },
    { raw_front: 'Il a toujours rêvé de trouver un amour éternel qui transcende le temps.', raw_back: ''},
    { raw_front: 'Son œuvre exprime {clairement} les émotions de l\'amour et de la perte.', raw_back: ''},
    { raw_front: 'Guidés par leur amour des {animaux}, ils ont ouvert un refuge.', raw_back: ''},
    { raw_front: 'Il a {montré} son amour fraternel en étant toujours présent pour son frère.', raw_back: ''},
    { raw_front: 'Ils {croyaient} que l\'amour pouvait {briser} le sort qui les séparait.', raw_back: ''},
    { raw_front: 'Ils croyaient que l\'amour était l\'expression de leur {étincelle} divine.', raw_back: ''},
    { raw_front: 'Une étrange {expérience} entre attraction de corps {étrangers} et mariage de cœur.', raw_back: ''},
    { raw_front: 'Son cœur vidé {souffrait} encore de cet amour perdu depuis longtemps.', raw_back: ''},
    { raw_front: 'Parmi {ses} femme nous somme le plus {competente}', raw_back: ''},
    { raw_front: 'Pourquoi nous {ne} somme pas {comme} les americaines?  ', raw_back: ''},
    { raw_front: '', raw_back: ''}, 
] as FlashcardMetadata[]


function createReaderContext() {

    const flashcards = $state(MOCK_FLASHCARDS) as FlashcardMetadata[]
    let selectedFlashcard = $state(-1)

    function updateFlashard(index: number, updatedFlashcard: FlashcardMetadata) {
        flashcards[index] = updatedFlashcard
    }
    
   
    return {
        updateFlashard,
        set selectedFlashcard(index: number) {
            selectedFlashcard = index
        }, 


        get flashcard() {
            return flashcards[selectedFlashcard] 
        },
        set flashcard(newFlashcard: FlashcardMetadata) {
            flashcards[selectedFlashcard] = newFlashcard
        }, 

        get selectedFlashcard() {
            return selectedFlashcard
        }, 

        get flashcards() {
            return flashcards
        }
    }
}

export const ReaderContext = createReaderContext()