import { create } from 'zustand'

const useUserStore = create((set) => ({
    error: null,
    user: null,
    binders: [],

    setUser: (userData) => set({ user: userData}),
    setBinders: (binders) => set({ binders }),
    setError: (errorMsg) => set({ error: errorMsg }),

    logout: () => set({ user: null, binders: [] }),

    loginUser: async (username, password) => {
        try {
            const response = await fetch('http://localhost:3000/api/v1/login', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error || 'Failed to login.');
            }

            set({ user: data.data, binders: data.data.attributes.binders || null, error: null });
        } catch (error) {
            console.log('error message: ', error.message);
            set({ error: error.message });
        }
    },

    createUser: async (username, password, password_confirmation) => {
        try {
            const response = await fetch('http://localhost:3000/api/v1/users', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password, password_confirmation })
            });

            const data = await response.json();
            if (!response.ok) {
                const message = Array.isArray(data.errors)
                    ? data.errors.join(', ')
                    : data.error || 'Failed to create account.';
                throw new Error(message);
            }
            set({ user: data.data, binders: data.data.attributes.binders || null, error: null });
            return true;
        } catch (error) {
            console.log('error message: ', error.message);
            set({ error: error.message });
            return false;
        }
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
            credentials: 'include', 
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