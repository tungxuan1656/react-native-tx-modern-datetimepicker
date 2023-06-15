// Type definitions for react-native-modern-datepicker 1.0
// Project: https://github.com/HosseinShabani/react-native-modern-datepicker#readme
// Definitions by: Ankan002 <https://github.com/Ankan002>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { CSSProperties } from 'react'
import { ImageStyle, StyleProp, TextInput, TextStyle, ViewStyle } from 'react-native'

export interface ModernDateTimePickerConfig {
	dayNames?: string[]
	dayNamesShort?: string[]
	monthNames?: string[]
	selectedFormat?: string
	dateFormat?: string
	monthYearFormat?: string
	timeFormat?: string
	hour?: string
	minute?: string
	timeSelect?: string
	timeClose?: string
	textSeparatorMonthYear?: string
}

export interface ModernDateTimePickerOptions {
	backgroundColor?: string
	textHeaderColor?: string
	textDefaultColor?: string
	selectedTextColor?: string
	mainColor?: string
	textSecondaryColor?: string
	borderColor?: string
	headerBorderWidth?: number
	defaultFont?: string
	headerFont?: string
	textFontSize?: number
	textHeaderFontSize?: number
	headerAnimationDistance?: number
	daysAnimationDistance?: number
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
}

export interface ModernDateTimePickerProps {
	onSelectedChange?: (dateString: string) => void
	onMonthYearChange?: (dateString: string) => void
	onTimeChange?: (dateString: string) => void
	onDateChange?: (dateString: string) => void
	minimumDate?: string
	maximumDate?: string
	selectorStartingYear?: number
	selectorEndingYear?: number
	disableDateChange?: boolean
	mode?: 'dateTimePicker' | 'calendar' | 'monthYear' | 'time'
	minuteInterval?: 1 | 2 | 3 | 4 | 5 | 6 | 10 | 12 | 15 | 20 | 30 | 60
	style?: CSSProperties
	current?: string
	selected?: string
	locale?: string
	configs?: ModernDateTimePickerConfig
	options?: ModernDateTimePickerOptions
}

export default function(props: ModernDateTimePickerProps): JSX.Element
// export function getToday(): string
// export function getFormatedDate(date?: Date, format?: string): string
