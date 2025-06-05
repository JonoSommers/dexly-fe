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
            credentials: 'include',
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
    },
    checkSession: () => {
        fetch('http://localhost:3000/api/v1/sessions', {
            method: 'GET',
            credentials: 'include',
        })
            .then(async response => {
                const data = await response.json()
                if (response.ok) {
                    set({ user: data.data, binders: data.data.attributes.binders || null, error: null })
                } else {
                    set({ user: null })
                }
            })
            .catch(error => {
                console.error("Session check failed:", error)
                set({ user: null })
            })
    },
    logoutUser: () => {
        fetch('http://localhost:3000/api/v1/sessions', {
            method: 'DELETE',
            credentials: 'include', // to send the session cookie
        })
            .then(() => {
                set({ user: null });
        })
        .catch((error) => {
            console.error("Logout failed:", error);
        });
    }
}))

export default useUserStore