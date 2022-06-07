import create from 'zustand'

const useStore = create((set) => ({
  subtitle: '',
  setSubtitle: (i) => set(() => ({ subtitle: i })),
}))

export default useStore
