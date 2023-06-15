import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
	View,
	TouchableOpacity,
	Text,
	Image,
	StyleSheet,
	Animated,
	I18nManager,
} from 'react-native'

import { useCalendar } from '../DatePicker'

const Header = ({ changeMonth }) => {
	const {
		options,
		disableDateChange,
		state,
		utils,
		minimumDate,
		maximumDate,
		mode,
		configs,
	} = useCalendar()
	const [mainState, setMainState] = state
	const style = styles(options)
	const [disableChange, setDisableChange] = useState(false)
	const [
		{ lastDate, shownAnimation, hiddenAnimation },
		changeMonthAnimation,
	] = utils.useMonthAnimation(mainState.activeDate, options.headerAnimationDistance, () =>
		setDisableChange(false),
	)
	const prevDisable =
		disableDateChange || (minimumDate && utils.checkArrowMonthDisabled(mainState.activeDate, true))
	const nextDisable =
		disableDateChange || (maximumDate && utils.checkArrowMonthDisabled(mainState.activeDate, false))

	const onChangeMonth = (type) => {
		if (disableChange) return
		setDisableChange(true)
		changeMonthAnimation(type)
		const modificationNumber = type === 'NEXT' ? 1 : -1
		const newDate = utils.getDate(mainState.activeDate).add(modificationNumber, 'month')
		setMainState({
			type: 'set',
			activeDate: utils.getFormated(newDate),
		})
		changeMonth(type)
	}

	return (
		<View style={[style.container, I18nManager.isRTL && style.reverseContainer]}>
			<TouchableOpacity
				activeOpacity={0.5}
				onPress={() => !nextDisable && onChangeMonth('NEXT')}
				style={style.arrowWrapper}
			>
				<Image
					source={require('../../assets/arrow.png')}
					style={[style.arrow, nextDisable && style.disableArrow]}
				/>
			</TouchableOpacity>
			<View style={style.monthYearContainer}>
				<Animated.View
					style={[
						style.monthYear,
						shownAnimation,
						style.activeMonthYear,
						I18nManager.isRTL && style.reverseMonthYear,
					]}
				>
					<TouchableOpacity
						activeOpacity={0.5}
						style={[
							options.headerBorderWidth ? style.centerWrapper : style.centerWrapperWithoutBorder,
							style.monthYearWrapper,
							utils.flexDirection,
						]}
						onPress={() =>
							!disableDateChange &&
							setMainState({
								type: 'toggleMonth',
							})
						}
					>
						<Text style={[style.headerText, style.monthText]}>
							{utils.getMonthYearText(mainState.activeDate).split('#')[0]}
						</Text>
						<Text style={[style.headerText, style.monthText]}>
							{configs.textSeparatorMonthYear ?? ' '}
						</Text>
						<Text style={[style.headerText, style.monthText]}>
							{utils.getMonthYearText(mainState.activeDate).split('#')[1]}
						</Text>
					</TouchableOpacity>
					{mode === 'dateTimePicker' && (
						<TouchableOpacity
							activeOpacity={0.5}
							style={[
								options.headerBorderWidth ? style.centerWrapper : style.centerWrapperWithoutBorder,
								{ marginRight: I18nManager.isRTL ? 0 : 5, marginLeft: I18nManager.isRTL ? 5 : 0 },
							]}
							onPress={() =>
								setMainState({
									type: 'toggleTime',
								})
							}
						>
							<Text style={style.headerText}>
								{utils.toPersianNumber(utils.getTime(mainState.selectedDate))}
							</Text>
						</TouchableOpacity>
					)}
				</Animated.View>
				<Animated.View
					style={[
						style.monthYear,
						hiddenAnimation,
						utils.flexDirection,
						I18nManager.isRTL && style.reverseMonthYear,
					]}
				>
					<Text style={style.headerText}>{utils.getMonthYearText(lastDate).split('#')[0]}</Text>
					<Text style={style.headerText}>{configs.textSeparatorMonthYear ?? ' '}</Text>
					<Text style={style.headerText}>{utils.getMonthYearText(lastDate).split('#')[1]}</Text>
					{mode === 'dateTimePicker' && (
						<Text style={style.headerText}>
							{utils.toPersianNumber(utils.getTime(mainState.selectedDate))}
						</Text>
					)}
				</Animated.View>
			</View>
			<TouchableOpacity
				activeOpacity={0.5}
				onPress={() => !prevDisable && onChangeMonth('PREVIOUS')}
				style={style.arrowWrapper}
			>
				<Image
					source={require('../../assets/arrow.png')}
					style={[style.arrow, style.leftArrow, prevDisable && style.disableArrow]}
				/>
			</TouchableOpacity>
		</View>
	)
}

const styles = (theme) =>
	StyleSheet.create({
		container: {
			alignItems: 'center',
			flexDirection: 'row-reverse',
		},
		reverseContainer: {
			flexDirection: 'row',
		},
		arrowWrapper: {
			padding: 20,
			position: 'relative',
			zIndex: 1,
			opacity: 1,
		},
		arrow: {
			width: 18,
			height: 18,
			opacity: 0.9,
			tintColor: theme.mainColor,
			margin: 2,
			...theme.imageArrow,
		},
		leftArrow: {
			transform: [
				{
					rotate: '180deg',
				},
			],
		},
		disableArrow: {
			opacity: 0,
		},
		monthYearContainer: {
			flex: 1,
			position: 'relative',
			alignItems: 'center',
			justifyContent: 'center',
			...theme.viewHeaderContainerStyle,
		},
		monthYear: {
			position: 'absolute',
			alignItems: 'center',
			flexDirection: 'row-reverse',
		},
		reverseMonthYear: {
			flexDirection: 'row',
		},
		activeMonthYear: {
			zIndex: 999,
		},
		monthYearWrapper: {
			alignItems: 'center',
		},
		headerText: {
			fontSize: theme.textHeaderFontSize,
			padding: 2,
			color: theme.textHeaderColor,
			fontFamily: theme.defaultFont,
			textAlignVertical: 'center',
			...theme.textHeaderStyle,
		},
		monthText: {
			fontFamily: theme.headerFont,
		},
		centerWrapper: {
			borderColor: theme.borderColor,
			paddingVertical: 4,
			paddingHorizontal: 8,
			alignItems: 'center',
			borderRadius: 5,
			borderWidth: theme.headerBorderWidth,
			...theme.viewHeaderItemStyle,
		},
		centerWrapperWithoutBorder: {
			paddingVertical: 4,
			paddingHorizontal: 8,
			alignItems: 'center',
			...theme.viewHeaderItemStyle,
		},
		time: {
			marginRight: 5,
		},
	})

Header.defaultProps = {
	changeMonth: () => null,
}

Header.propTypes = {
	changeMonth: PropTypes.func,
}

export { Header }
