import create from 'zustand'

const useAuth = create(set => ({
    user: null,
    setUser: (user) => set(state => ({ user })),
    isNewUser: false,
    setIsNewUser: (isNewUser) => set(state => ({ isNewUser })),
}));

export { useAuth };