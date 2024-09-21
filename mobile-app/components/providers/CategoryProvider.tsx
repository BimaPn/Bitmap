import { router } from 'expo-router'
import { createContext, useContext, useState } from 'react'
import { View, Text } from 'react-native'

type CategoryContextProps = {
  category: null | CategoryProps 
  setCategory: (category: CategoryProps) => void
}

const CategoryContext = createContext<CategoryContextProps | null>(null)

export const useCategory = () => useContext(CategoryContext) as CategoryContextProps

const CategoryProvider = ({ children }: { children: React.ReactNode }) => {
  const [category, setcategory] = useState<CategoryProps | null>(null)

  const setCategory = (categoryTarget: CategoryProps) => {
    setcategory(categoryTarget)
    router.push(`/categories/${categoryTarget.slug}`)
  }

  return (
  <CategoryContext.Provider value={{
    category,
    setCategory
  }}> 
  {children}
  </CategoryContext.Provider>
  )
}

export default CategoryProvider
