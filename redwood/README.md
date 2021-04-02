# Redwood
The <i>Slugline</i> React Native App

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
			<a href="">
			firebase
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
### UI/UX
As stated before, we're using [react-native-elements](https://reactnativeelements.com/), but this is pretty barebones. In order to give it some flavor we have to inject our own stylistic choices.

###### Colors

<table id="colors-table">
	<th>Name</th>
	<th>Hex</th>
	<th>RGB</th>
	<th>Demo</th>
	
	<tr><td>dark</td><td>#261e0b</td><td>rgb(38, 30, 11)</td><td><div class="color-demo" style="width: 40px; height: 40px; border-radius: 10px; background-color: rgb(38, 30, 11);"></div></td></tr><tr><td>cream</td><td>#f3f0e6</td><td>rgb(243, 240, 230)</td><td><div class="color-demo" style="width: 40px; height: 40px; border-radius: 10px; background-color: rgb(243, 240, 230);"></div></td></tr><tr><td>darkCream</td><td>#fbf1d8</td><td>rgb(251, 241, 216)</td><td><div class="color-demo" style="width: 40px; height: 40px; border-radius: 10px; background-color: rgb(251, 241, 216);"></div></td></tr><tr><td>darkDarkCream</td><td>#dbba6e</td><td>rgb(219, 186, 110)</td><td><div class="color-demo" style="width: 40px; height: 40px; border-radius: 10px; background-color: rgb(219, 186, 110);"></div></td></tr><tr><td>lightBrown</td><td>#e6e3d6</td><td>rgb(230, 227, 214)</td><td><div class="color-demo" style="width: 40px; height: 40px; border-radius: 10px; background-color: rgb(230, 227, 214);"></div></td></tr><tr><td>brown</td><td>#979385</td><td>rgb(151, 147, 133)</td><td><div class="color-demo" style="width: 40px; height: 40px; border-radius: 10px; background-color: rgb(151, 147, 133);"></div></td></tr><tr><td>darkBrown</td><td>#3a2f00</td><td>rgb(58, 47, 0)</td><td><div class="color-demo" style="width: 40px; height: 40px; border-radius: 10px; background-color: rgb(58, 47, 0);"></div></td></tr><tr><td>lightBlue</td><td>#69beff</td><td>rgb(105, 190, 255)</td><td><div class="color-demo" style="width: 40px; height: 40px; border-radius: 10px; background-color: rgb(105, 190, 255);"></div></td></tr><tr><td>blue</td><td>#00467f</td><td>rgb(0, 70, 127)</td><td><div class="color-demo" style="width: 40px; height: 40px; border-radius: 10px; background-color: rgb(0, 70, 127);"></div></td></tr><tr><td>darkBlue</td><td>#001638</td><td>rgb(0, 22, 56)</td><td><div class="color-demo" style="width: 40px; height: 40px; border-radius: 10px; background-color: rgb(0, 22, 56);"></div></td></tr><tr><td>yellow</td><td>#ffcc00</td><td>rgb(255, 204, 0)</td><td><div class="color-demo" style="width: 40px; height: 40px; border-radius: 10px; background-color: rgb(255, 204, 0);"></div></td></tr><tr><td>darkYellow</td><td>#c2932c</td><td>rgb(194, 147, 44)</td><td><div class="color-demo" style="width: 40px; height: 40px; border-radius: 10px; background-color: rgb(194, 147, 44);"></div></td></tr><tr><td>lightGreen</td><td>#6eff8f</td><td>rgb(110, 255, 143)</td><td><div class="color-demo" style="width: 40px; height: 40px; border-radius: 10px; background-color: rgb(110, 255, 143);"></div></td></tr><tr><td>green</td><td>#3bd15e</td><td>rgb(59, 209, 94)</td><td><div class="color-demo" style="width: 40px; height: 40px; border-radius: 10px; background-color: rgb(59, 209, 94);"></div></td></tr><tr><td>darkGreen</td><td>#339c4c</td><td>rgb(51, 156, 76)</td><td><div class="color-demo" style="width: 40px; height: 40px; border-radius: 10px; background-color: rgb(51, 156, 76);"></div></td></tr><tr><td>darkDarkGreen</td><td>#20542c</td><td>rgb(32, 84, 44)</td><td><div class="color-demo" style="width: 40px; height: 40px; border-radius: 10px; background-color: rgb(32, 84, 44);"></div></td></tr><tr><td>red</td><td>#ed4e39</td><td>rgb(237, 78, 57)</td><td><div class="color-demo" style="width: 40px; height: 40px; border-radius: 10px; background-color: rgb(237, 78, 57);"></div></td></tr><tr><td>darkRed</td><td>#942719</td><td>rgb(148, 39, 25)</td><td><div class="color-demo" style="width: 40px; height: 40px; border-radius: 10px; background-color: rgb(148, 39, 25);"></div></td></tr></table>

###### Fonts

<table id="fonts-table">
	<th>size name</th>
	<th>size</th>
	<th>HelveticaNeue-Bold</th>
	<th>HelveticaNeue-MediumItalic</th>
	<th>HelveticaNeue-Light</th>
	<tr>
		<td style="background-color: rgb(243, 240, 230); color: rgb(38, 30, 11);">headerSize</td>
		<td style="background-color: rgb(243, 240, 230); color: rgb(38, 30, 11);">20</td>
		<td class="header-f header-s" style="font-family: HelveticaNeue-Bold; font-size: 20px; background-color: rgb(243, 240, 230); color: rgb(38, 30, 11);">Header</td>
		<td class="title-f header-s" style="font-size: 20px; font-family: HelveticaNeue-MediumItalic; background-color: rgb(243, 240, 230); color: rgb(38, 30, 11);">Header</td>
		<td class="standard-f header-s" style="font-size: 20px; font-family: HelveticaNeue-Light; background-color: rgb(243, 240, 230); color: rgb(38, 30, 11);">Header</td>
	</tr>
		<tr>
		<td style="background-color: rgb(243, 240, 230); color: rgb(38, 30, 11);">titleSize</td>
		<td style="background-color: rgb(243, 240, 230); color: rgb(38, 30, 11);">50</td>
		<td class="header-f title-s" style="font-family: HelveticaNeue-Bold; font-size: 50px; background-color: rgb(243, 240, 230); color: rgb(38, 30, 11);">Title</td>
		<td class="title-f title-s" style="font-family: HelveticaNeue-MediumItalic; font-size: 50px; background-color: rgb(243, 240, 230); color: rgb(38, 30, 11);">Title</td>
		<td class="standard-f title-s" style="font-size: 50px; font-family: HelveticaNeue-Light; background-color: rgb(243, 240, 230); color: rgb(38, 30, 11);">Title</td>
	</tr>
		<tr>
		<td style="background-color: rgb(243, 240, 230); color: rgb(38, 30, 11);">standardSize</td>
		<td style="background-color: rgb(243, 240, 230); color: rgb(38, 30, 11);">14</td>
		<td class="header-f standard-s" style="font-family: HelveticaNeue-Bold; font-size: 14px; background-color: rgb(243, 240, 230); color: rgb(38, 30, 11);">Standard</td>
		<td class="title-f standard-s" style="font-family: HelveticaNeue-MediumItalic; font-size: 14px; background-color: rgb(243, 240, 230); color: rgb(38, 30, 11);">Standard</td>
		<td class="standard-f standard-s" style="font-family: HelveticaNeue-Light; font-size: 14px; background-color: rgb(243, 240, 230); color: rgb(38, 30, 11);">Standard</td>
	</tr>
		<tr>
		<td style="background-color: rgb(243, 240, 230); color: rgb(38, 30, 11);">tinySize</td>
		<td style="background-color: rgb(243, 240, 230); color: rgb(38, 30, 11);">10</td>
		<td class="header-f tiny-s" style="font-family: HelveticaNeue-Bold; font-size: 10px; background-color: rgb(243, 240, 230); color: rgb(38, 30, 11);">Tiny</td>
		<td class="title-f tiny-s" style="font-family: HelveticaNeue-MediumItalic; font-size: 10px; background-color: rgb(243, 240, 230); color: rgb(38, 30, 11);">Tiny</td>
		<td class="standard-f tiny-s" style="font-family: HelveticaNeue-Light; font-size: 10px; background-color: rgb(243, 240, 230); color: rgb(38, 30, 11);">Tiny</td>
	</tr>
</table>

###### Buttons

A few general guiding principals on buttons. They should be:

- reactive, give feedback when pressed
- obviously buttons, you can't miss 'em or mistake 'em
- limited, lets make this usable in as few clicks as possible
- descriptive in design, i.e. use of icons & colors to add meaning to a button's function
- and rounded, of course


### State Management





