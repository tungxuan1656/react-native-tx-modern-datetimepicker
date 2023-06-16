import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Button, Dimensions, Modal, ScrollView, StyleSheet, Text, View } from 'react-native'
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
	const [visibleModal, setVisibleModal] = useState(false)
	const [dateSelectedModal, setDateSelectedModal] = useState('20230618')
	const [timeSelectedModal, setTimeSelectedModal] = useState('00:00')
	const [timeSelected, setTimeSelected] = useState('')

	return (
		<View style={{ backgroundColor: '#f2f2f2', flex: 1 }}>
			<ScrollView style={{ flex: 1, marginVertical: 50 }}>
				<Text style={styles.text}>{'Date and time picker'}</Text>
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
				<Text style={styles.text}>{'Date picker'}</Text>
				<DatePicker
					current={'20230608'} // init focus month
					selected={'20230617'}
					minimumDate={'20230605'}
					mode={'calendar'}
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
				<Text style={styles.text}>
					{'Only time picker'}: {timeSelected}
				</Text>
				<DatePicker
					mode={'time'}
					minuteInterval={1}
					onTimeChange={(d) => {
						console.log('onTimeChange', d)
						setTimeSelected(d)
					}}
					configs={pickerConfig}
					options={{
						...pickerOptions,
						viewButtonActionSelectTimeStyle: {
							backgroundColor: 'green',
							borderRadius: 8,
							width: Dimensions.get('window').width - 32,
							marginHorizontal: 32,
							justifyContent: 'center',
							alignItems: 'center',
							height: 48,
						},
						textActionTimeStyle: {
							fontSize: 16,
							fontWeight: '500',
						},
					}}
				/>
				<Text style={styles.text}>
					{'Modal:'} {dateSelectedModal} {timeSelectedModal}
				</Text>
				<Button title="Show modal" onPress={() => setVisibleModal(true)} />
			</ScrollView>
			<Modal visible={visibleModal} transparent animationType={'slide'}>
				<View style={{ flex: 1, backgroundColor: '#00000022', justifyContent: 'flex-end' }}>
					<View style={{ height: 500, backgroundColor: 'white' }}>
						<DatePicker
							current={'20230608'} // init focus month
							selected={`${dateSelectedModal} ${timeSelectedModal}`} // init date and time
							minimumDate={'20230605'}
							mode={'dateTimePicker'}
							minuteInterval={1}
							onDateChange={(d) => {
								console.log('onDateChange', d)
								setDateSelectedModal(d)
								setVisibleModal(false)
							}}
							onTimeChange={(d) => {
								console.log('onTimeChange', d)
								setTimeSelectedModal(d)
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
						<Button title={'Close modal'} onPress={() => setVisibleModal(false)} />
					</View>
				</View>
			</Modal>
		</View>
	)
}

export default App

const styles = StyleSheet.create({
	text: {
		marginTop: 16,
		marginBottom: 8,
		marginHorizontal: 16,
		fontSize: 16,
	},
})
