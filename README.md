# React Native TX Modern DateTimePicker

<img src = "screenshots/datetimepicker.jpg" width ="400" /> <img src = "screenshots/datepicker.jpg" width ="400" />  
<img src = "screenshots/monthyearpicker.jpg" width ="400" /> <img src = "screenshots/timepicker.jpg" width ="400" />

Forked from HosseinShabani/react-native-modern-datepicker
> A customizable calendar, time & month picker for React Native (including Persian Jalaali calendar & locale). For more information, please visit [website](https://hosseinshabani.github.io/react-native-modern-datepicker)

## Fixed and improve
1. Fixed year input: user can now clear all year in input text and it also handle if the user remove focus on input text without value, the default value will be the current year.
https://github.com/HosseinShabani/react-native-modern-datepicker/pull/133
2. Fixed the animation issue: When you click the right arrow It slides right to left and vice-versa for the left arrow click.
https://github.com/HosseinShabani/react-native-modern-datepicker/pull/110
3. Remove moment-jalaali. Using: moment. Default language: English
4. Add @type. (Now, we have suggestion of `configs` and `options` properties)
5. Add multiple style for text and view. Customize the UI as you like. In `options` prop
```
textHeaderStyle?: StyleProp<TextStyle>
textHeaderStyle?: StyleProp<TextStyle>
textDayNamesStyle?: StyleProp<TextStyle>
textDayStyle?: StyleProp<TextStyle>
textDaySelectedStyle?: StyleProp<TextStyle>
textTodayStyle?: StyleProp<TextStyle>
textMonthStyle?: StyleProp<TextStyle>
textActionTimeStyle?: StyleProp<TextStyle>
viewDaysNameStyle?: StyleProp<ViewStyle>
viewDaysContainerStyle?: StyleProp<ViewStyle>
viewDayItemStyle?: StyleProp<ViewStyle>
viewDayItemSelectedStyle?: StyleProp<ViewStyle>
viewHeaderItemStyle?: StyleProp<ViewStyle>
viewHeaderContainerStyle?: StyleProp<ViewStyle>
viewButtonActionSelectTimeStyle?: StyleProp<ViewStyle>
viewButtonActionCancelTimeStyle?: StyleProp<ViewStyle>
viewButtonsActionTimeStyle?: StyleProp<ViewStyle>
viewMonthItemSelectedStyle?: StyleProp<ViewStyle>
viewMonthItemStyle?: StyleProp<ViewStyle>
imageArrow?: StyleProp<ImageStyle>
inputYearStyle?: StyleProp<TextInput>
```
6. Bonus: in `configs` prop: `textSeparatorMonthYear` will show `${month}${textSeparatorMonthYear}${year}` in header

## Usage
```jsx
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
```