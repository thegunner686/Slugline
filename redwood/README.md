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

Refer to the <a href="https://www.figma.com/files/project/29123312/V1?fuid=944441741646389839">Figma V1 design</a>.

### State Management

Going to be trying out [zustand](https://github.com/pmndrs/zustand) which uses react hook syntax. Seems much cleaner than flux or redux.

### Auth
Using Firebase Auth with Google Sign-In only for logging in. Attempting to utilize the `@ucsc.edu` Google Sign-In OAuth to ensure that each account is connected to a `@ucsc.edu` email.

### Data
Using Firebase Firestore for document-based data storage. Allows collection nesting for related data.

### File Storage
Using Firebase Storage for profile pictures.


