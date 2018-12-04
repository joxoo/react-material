## React Material Design

### Install
npm install jss-react-material

### Dependencies
react >= 15.3.0

### How To Use
##### create theme.scss file with your favorite colors
```scss
@import '~jss-react-material/src/style/common/colors';
$backgroundColor: #fff;
$backgroundColorPrimary: $brown600;
$backgroundColorSecondary: $green500;
$backgroundColorFloating: $brown900;
$textColor: $darkBlack;
$textColorPimary: $fullWhite;
$textColorSecondary: $green500;
$colorInputActive: $brown600;
$colorTabSelected: $fullWhite;
$windowBackground: $grey50;
$backgroundOpacity: rgba(0, 0, 0, 0.08);
$borderColor: rgba(0, 0, 0, 0.16);
```
##### import theme.scss and base scss file from react-material in the main scss file
```scss
@import './theme';
@import '~jss-react-material/index';

body {
    margin:0;
    background: $windowBackground;
    font-family: 'Roboto', sans-serif;
}
```
### Components
- AppBar
- AutoComplete
- Avatar
- BottomSheet
- DialogAlert
- DialogFullScreen
- FontIcon
- IconButton
- FlatButton
- FloatingActionButton
- MenuItem
- MenuDropDown
- RaisedButton
- Card,
- CardHeader
- Chip
- Header
- List
- ListItem
- Tab
- Tabs
- InputControl
- InputText
- InputArea
- SelectionControl
- Paper
- PickerDate
- RichMedia,
- SearchFilter
- Snackbar
- Stepper
- StepperStep
- ProgressLinear


## Contributions

Yes please! See the [contributing guidelines][contributing] for details.

### Changelog
- V0.2.0 update dependencies fix linting issues 
- V0.1.20 Add compatibility for string icons 
- V0.1.9 Bump Version material icons 
- V0.1.8 Add MenuDropDown onSelect prop
- V0.1.7 Add TextArea Component
- V0.1.6 Reduce React Warnings
- V0.1.5 Add Menu DropDown and StepperStep
- V0.1.0 Add basic Material Design Components