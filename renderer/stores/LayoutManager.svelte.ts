

function createLayoutManager() {
    
    let isFlashcardsPanelOpened = $state(false)

    function toggleFlashcardPanel() {
        console.log("Toggling state here")
        isFlashcardsPanelOpened = !isFlashcardsPanelOpened
    }

    return {
        toggleFlashcardPanel, 
        get isFlashcardsPanelOpened() {
            return isFlashcardsPanelOpened
        }
    }
}



export const LayoutManager =  createLayoutManager()