import { createContext, useReducer, useContext } from 'react';

const ResourceContext = createContext();

const resourceReducer = (state, action) => {
    switch (action.type) {
        case 'SET_RESOURCES':
            return { resources: action.payload };
        case 'CREATE_RESOURCE':
            return { resources: [action.payload, ...state.resources] };
        case 'DELETE_RESOURCE':
            return { resources: state.resources.filter(r => r._id !== action.payload._id) };
        default:
            return state;
    }
};

export const ResourceContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(resourceReducer, { resources: [] });

    return (
        <ResourceContext.Provider value={{ ...state, dispatch }}>
            {children}
        </ResourceContext.Provider>
    );
};

export const useResourceContext = () => {
    const context = useContext(ResourceContext);
    if (!context) {
        throw new Error('useResourceContext must be used inside a ResourceContextProvider');
    }
    return context;
};