import { useGetProducts } from '@/hooks/use-get-products'
import React from 'react'

const Index = () => {
  const {data,isLoading,isError,refetch} = useGetProducts({})
  console.log(data)
  return (
    <div>Index</div>
  )
}

export default Index
