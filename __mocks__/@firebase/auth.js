export const getAuth = jest.fn(() => ({ currentUser: {  displayName: '' } }));

export const createUserWithEmailAndPassword = jest.fn((auth, email, contraseña) => Promise.resolve({ user: { email, contraseña } }));

export const updateProfile = jest.fn(() => Promise.resolve());

export const signInWithEmailAndPassword = jest.fn((auth, email, contraseña) => Promise.resolve({ user: { email, contraseña } }));

export const GoogleAuthProvider = jest.fn(() => Promise.resolve());

export const signInWithPopup = jest.fn((auth, provider) => Promise.resolve({ user: { provider } }));

