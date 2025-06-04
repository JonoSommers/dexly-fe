import { create } from 'zustand'

const useUserStore = create((set) ({
    user: null,
    binders: [],
    setUser: (userData) => set({ user: userData}),
    setBinders: (binders) => set({ binders }),
    logout: () => set({ user: null, binders: [] }),
    fetchUser: (id) => {
        fetch(`/api/v1/users/${id}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => set({ user: data.data }))
            .catch(error => console.log('error message: ', error.message))
    } 
}))