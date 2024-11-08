import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const Home = ({route}) => {
 
  const {user} = route.params;
  return (
    <View>
      <Text>Logged in with {user.email}</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})