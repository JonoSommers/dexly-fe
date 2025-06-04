import { create } from 'zustand'

const useUserStore = create((set) => ({
    error: null,
    setError: (errorMsg) => set({ error: errorMsg }),
    user: null,
    binders: [],
    setUser: (userData) => set({ user: userData}),
    setBinders: (binders) => set({ binders }),
    logout: () => set({ user: null, binders: [] }),
    loginUser: (username, password) => {
        fetch('http://localhost:3000/api/v1/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
            .then(async response => {
                const data = await response.json()
                if (!response.ok) {
                    throw new Error(data.error || 'Failed to fetch all users')
                }
                console.log(data)
                set({ user: data.data, binders: data.data.attributes.binders || null, error: null })
            })
            .catch(error => {
                console.log('error message: ', error.message)
                set({ error: error.message })
            })
    }
}))

export default useUserStore