import React, { createContext, useState, useContext } from 'react';

// Create a context
const dialogueContext = createContext();

// Create a provider to wrap the components that need access to the context
const ContextProvider = ({ children }) => {
    const [isDialogueOpen, setisDialogueOpen] = useState(false);

    return (
        <dialogueContext.Provider value={{ isDialogueOpen, setisDialogueOpen }}>
            {children}
        </dialogueContext.Provider>
    );
};

// Create a custom hook to use the context
const useDialogueContext = () => {
    const context = useContext(dialogueContext);
    if (!context) {
        throw new Error('useYourContext must be used within a YourContextProvider');
    }
    return context;
};

export { ContextProvider, useDialogueContext };
