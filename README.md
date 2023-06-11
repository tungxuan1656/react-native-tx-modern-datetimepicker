# React Native TX Modern DateTimePicker

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