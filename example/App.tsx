import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DatePicker, {
	ModernDateTimePickerConfig,
	ModernDateTimePickerOptions,
} from 'react-native-tx-modern-datetimepicker'

const pickerOptions: ModernDateTimePickerOptions = {
	mainColor: '#0057FF',
	daysAnimationDistance: 300,
	headerAnimationDistance: 200,
	borderColor: '#dde',
	textDayNamesStyle: {
		// fontWeight: '600',
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
}

// if mode === time or mode === datetimepicker
// selectedFormat = dateFormat + ' ' + timeFormat (automatic)
const pickerConfig: ModernDateTimePickerConfig = {
	dateFormat: 'YYYYMMDD',
	selectedFormat: 'YYYYMMDD',
	textSeparatorMonthYear: ' | ',
	timeFormat: 'HH:mm',
}

const App = (props: any) => {
	return (
		<View style={{ flex: 1, paddingVertical: 80, backgroundColor: '#f2f2f2' }}>
			<DatePicker
				current={'20230608'} // init focus month
				selected={'20230617 12:18'} // init date and time
				minimumDate={'20230605'}
				mode={'dateTimePicker'}
				minuteInterval={1}
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
				configs={pickerConfig}
				options={pickerOptions}
			/>
		</View>
	)
}

export default App

const styles = StyleSheet.create({})
