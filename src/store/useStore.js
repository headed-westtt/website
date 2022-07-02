import create from 'zustand'

const useStore = create((set) => ({
  isMenuOpen: false,
  updateIsMenuOpen: (i) => set(() => ({ isMenuOpen: i })),
}))

export default useStore
