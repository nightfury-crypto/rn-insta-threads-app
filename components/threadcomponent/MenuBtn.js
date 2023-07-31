import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Fontisto } from '@expo/vector-icons';
import { COLORS } from '../../constants';

const MenuBtn = ({icon}) => {
  return (
    <TouchableOpacity>
<Fontisto name={icon} size={20} color={COLORS?.dark?.text} />
    </TouchableOpacity>
  )
}

export default MenuBtn

const styles = StyleSheet.create({})