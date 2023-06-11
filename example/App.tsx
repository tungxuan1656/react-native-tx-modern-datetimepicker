import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DatePicker from 'react-native-tx-modern-datetimepicker'

const App = (props: any) => {
	return (
		<View style={{ flex: 1, paddingVertical: 80, backgroundColor: '#f2f2f2' }}>
			<DatePicker
				current={'20230608'}
				selected={'20230617'}
				minimumDate={'20230605'}
				mode={'calendar'}
				configs={{
					dateFormat: 'YYYYMMDD',
					selectedFormat: 'YYYYMMDD',
					textSeparatorMonthYear: ' | ',
				}}
				onDateChange={(d) => {
					console.log('onDateChange', d)
				}}
				onTimeChange={(d) => {
					console.log('onTimeChange', d)
				}}
				onMonthYearChange={(d) => {
					console.log('onMonthYearChange', d)
				}}
				onSelectedChange={(d) => {
					console.log('onSelectedChange', d)
				}}
				options={{
					mainColor: '#0057FF',
					daysAnimationDistance: 300,
					headerAnimationDistance: 200,
					borderColor: '#dde',
					textDayNamesStyle: {
						fontWeight: '600',
						color: '#888',
						fontSize: 13,
					},
					viewDaysNameStyle: {
						borderBottomWidth: 3,
					},
					viewHeaderItemStyle: {
						borderWidth: 1,
						borderRadius: 16,
					},
					textDayStyle: {
						fontSize: 15,
					},
					textTodayStyle: {
						fontSize: 17,
						fontWeight: '600',
					},
					textHeaderStyle: {
						fontSize: 17,
					},
					viewMonthItemSelectedStyle: {
						borderRadius: 16,
						backgroundColor: '#345678',
						paddingVertical: 8,
					},
					imageArrow: {},
				}}
			/>
			<Text>{/* {moment().endOf('month')} */}</Text>
		</View>
	)
}

export default App

const styles = StyleSheet.create({})
