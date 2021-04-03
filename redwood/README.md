# Redwood
The *Slugline* React Native App

## What We're Working With
<table>
	<th>name</th>
	<th>description</th>
	<tr>
		<td>
			<a href="https://reactnative.dev/">
			react-native
			</a>
		</td>
		<td>
			the framework
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://reactnativeelements.com/">
			react-native-elements
			</a>
		</td>
		<td>ui elements</td>
	</tr>
	<tr>
		<td>
			<a href="https://reactnavigation.org/">
			@react-navigation
			</a>
		</td>
		<td>
			routing
			<ul>
				<li>/native</li>
				<li>/bottom-tabs</li>
				<li>/stack</li>
			</ul>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://rnfirebase.io/">
			react-native-firebase
			</a>
		</td>
		<td>
			cloud backend
			<ul>
				<li>auth</li>
				<li>firestore</li>
				<li>storage</li>
				<li>functions</li>
			</ul>
		</td>
	</tr>
</table>

## How We're Doing It
### UI
As stated before, we're using [react-native-elements](https://reactnativeelements.com/), but this is pretty barebones. In order to give it some flavor we have to inject our own stylistic choices.

###### Colors

Name | Hex | RGB
-----|-----|-----
dark | #261e0b | rgb(38, 30, 11)
cream | #f3f0e6 | rgb(243, 240, 230)	
darkCream | #fbf1d8 | rgb(251, 241, 216)
darkDarkCream | #fbf1d8 | rgb(219, 186, 110)
lightBrown | #e6e3d6 | rgb(230, 227, 214)
brown | #979385 | rgb(151, 147, 133)
darkBrown | #3a2f00 | rgb(58, 47, 0)
lightBlue | #69beff	| rgb(105, 190, 255)
blue | #00467f | rgb(0, 70, 127)
darkBlue | #001638 | rgb(0, 22, 56)
yellow | #ffcc00	| rgb(255, 204, 0)
darkYellow | #c2932c | rgb(194, 147, 44)
lightGreen | #6eff8f | rgb(110, 255, 143)
green | #3bd15e | rgb(59, 209, 94)
darkGreen | #339c4c | rgb(51, 156, 76)
darkDarkGreen | #20542c | rgb(32, 84, 44)
red | #ed4e39 | rgb(237, 78, 57)
darkRed | #942719 | rgb(148, 39, 25)

###### Fonts

 | types | sizes
------|------|------
large | HelveticaNeue-MediumItalic | 50px
medium | HelveticaNeue-Bold | 20px
small | HelveticaNeue-Light | 14px
tiny |  | 10px


###### Buttons

A few general guiding principals on buttons. They should be:

- reactive, give feedback when pressed
- obviously buttons, you can't miss 'em or mistake 'em
- limited, lets make this usable in as few clicks as possible
- descriptive in design, i.e. use of icons & colors to add meaning to a button's function
- and rounded, of course


### State Management

Going to be trying out [zustand](https://github.com/pmndrs/zustand) which uses react hook syntax. Seems much cleaner than flux or redux.

### Auth
Using Firebase Auth with Google Sign-In only for logging in. Attempting to utilize the `@ucsc.edu` Google Sign-In OAuth to ensure that each account is connected to a `@ucsc.edu` email.

### Data
Using Firebase Firestore for document-based data storage. Allows collection nesting for related data.

### File Storage
Using Firebase Storage for profile pictures.


