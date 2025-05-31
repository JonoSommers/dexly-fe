import create from 'zustand'

// Here we define our store: state variables + actions
const useStore = create((set) => ({
    // 1. State: define any piece of global data you need
    user: null,
    isLoggedIn: false,

    // 2. Actions: functions that update state
    login: (userData) =>
        set(() => ({ user: userData, isLoggedIn: true })),

    logout: () =>
        set(() => ({ user: null, isLoggedIn: false })),
}))

export default useStore
