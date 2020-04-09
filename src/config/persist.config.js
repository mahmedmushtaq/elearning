import storage from 'redux-persist/lib/storage';
export const persistConfigRoot = {
    key: 'root',
    storage: storage,

};

export const persistConfigRegistration = {
    ...persistConfigRoot,
    key:"registrationReducer",



};