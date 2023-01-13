import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import client, { urlFor } from '../sanity';

const Categories = () => {
  const [category,setCategory] = useState();

  useEffect(() => {
    client.fetch(
      `
      *[_type == "category"]
      `
      )
      .then((data) => setCategory(data));
  },[]);
  
  console.log(category); 
  
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}
    contentContainerStyle={{paddingHorizontal:15,paddingTop:10}}>
        {/* Cards */}

        {category?.map(categories => ( 
          <CategoryCard 
            key={categories._id}
            imgUrl={urlFor(categories.image).width(200).url()}
            title={categories.name}
            />
        ))}
    </ScrollView>
  )
}

export default Categories