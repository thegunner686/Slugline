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

<style>
.hex { color: blue; }
.color-demo { width: 40px; height: 40px; border-radius: 10px; transition: all 250ms; cursor: pointer; }
.color-demo:hover { width: 35px; height: 35px; }
</style>
<table id="colors-table">
	<th>Name</th>
	<th>Hex</th>
	<th>RGB</th>
	<th>Demo</th>
	
	
</table>

<script>
	let colors_table = document.getElementById("colors-table");
	
	let Colors = {
		dark: {
			hex: "#261e0b",
			rgb: "rgb(38, 30, 11)",
		},
		cream: {
			hex: "#f3f0e6",
			rgb: "rgb(243, 240, 230)",
		},
		darkCream: {
			hex: "#fbf1d8",
			rgb: "rgb(251, 241, 216)",
		},
		darkDarkCream: {
			hex: "#dbba6e",
			rgb: "rgb(219, 186, 110)",
		},
		lightBrown: {
			hex: "#e6e3d6",
			rgb: "rgb(230, 227, 214)",
		},
		brown: {
			hex: "#979385",
			rgb: "rgb(151, 147, 133)",
		},
		darkBrown: {
			hex: "#3a2f00",
			rgb: "rgb(58, 47, 0)",
		},
		lightBlue: {
			hex: "#69beff",
			rgb: "rgb(105, 190, 255)",
		},
		blue: {
			hex: "#00467f",
			rgb: "rgb(0, 70, 127)",
		},
		darkBlue: {
			hex: "#001638",
			rgb: "rgb(0, 22, 56)",
		},
		yellow: {
			hex: "#ffcc00",
			rgb: "rgb(255, 204, 0)",
		},
		darkYellow: {
			hex: "#c2932c",
			rgb: "rgb(194, 147, 44)",
		},
		lightGreen: {
			hex: "#6eff8f",
			rgb: "rgb(110, 255, 143)",
		},
		green: {
			hex: "#3bd15e",
			rgb: "rgb(59, 209, 94)",
		},
		darkGreen: {
			hex: "#339c4c",
			rgb: "rgb(51, 156, 76)",
		},
		darkDarkGreen: {
			hex: "#20542c",
			rgb: "rgb(32, 84, 44)",
		},
		red: {
			hex: "#ed4e39",
			rgb: "rgb(237, 78, 57)",
		},
		darkRed: {
			hex: "#942719",
			rgb: "rgb(148, 39, 25)",
		}
	};
	
	
	
	Object.keys(Colors).forEach(name => {
		let row = document.createElement("tr"),
			 name_td = document.createElement("td"),
			 hex_td = document.createElement("td"),
			 rgb_td = document.createElement("td"),
			 demo_td = document.createElement("td"),
			 demo_div = document.createElement("div");
			 
		let color = Colors[name];
		
		name_td.innerHTML = name;
		hex_td.innerHTML = color.hex;
		rgb_td.innerHTML = color.rgb;
		demo_div.classList.add("color-demo");
		demo_div.style.backgroundColor = color.hex;
		
		demo_td.appendChild(demo_div);
		row.appendChild(name_td);
		row.appendChild(hex_td);
		row.appendChild(rgb_td);
		row.appendChild(demo_td);
		
		colors_table.appendChild(row);
	});
</script>

<style>
.header-f { font-family: HelveticaNeue-Bold }
.header-s { font-size: 20px; }
.title-f { font-family: HelveticaNeue-MediumItalic }
.title-s { font-size: 50px; }
.standard-f { font-family: HelveticaNeue-Light }
.standard-s { font-size: 14px; }
.tiny-s { font-size: 10px; }
#fonts-table td { background-color: #f3f0e6; color: #261e0b }
</style>

<p>
Click a color to display a new: <input id="color-toggle-input" value="background color" disabled/> for the fonts table.
</p>

###### Fonts

<table id="fonts-table">
	<th>size name</th>
	<th>size</th>
	<th>HelveticaNeue-Bold</th>
	<th>HelveticaNeue-MediumItalic</th>
	<th>HelveticaNeue-Light</th>
	<tr>
		<td>headerSize</td>
		<td>20</td>
		<td class="header-f header-s">Header</td>
		<td class="title-f header-s">Header</td>
		<td class="standard-f header-s">Header</td>
	</tr>
		<tr>
		<td>titleSize</td>
		<td>50</td>
		<td class="header-f title-s">Title</td>
		<td class="title-f title-s">Title</td>
		<td class="standard-f title-s">Title</td>
	</tr>
		<tr>
		<td>standardSize</td>
		<td>14</td>
		<td class="header-f standard-s">Standard</td>
		<td class="title-f standard-s">Standard</td>
		<td class="standard-f standard-s">Standard</td>
	</tr>
		<tr>
		<td>tinySize</td>
		<td>10</td>
		<td class="header-f tiny-s">Tiny</td>
		<td class="title-f tiny-s">Tiny</td>
		<td class="standard-f tiny-s">Tiny</td>
	</tr>
</table>

<script>
	let color_toggle = true;
	let background_color = "#f3f0e6",
		font_color = "#261e0b";
	let color_demos = document.getElementsByClassName("color-demo");
	let color_toggle_input = document.getElementById("color-toggle-input");
	for(let i = 0; i < color_demos.length; i++) { 
		let demo_div = color_demos[i];
		demo_div.addEventListener("click", (event) => {
			let fonts_table = document.getElementById("fonts-table");
			let tds = fonts_table.querySelectorAll("td");
			if(color_toggle) {
      			for(let k = 0; k < tds.length; k++) {
					tds[k].style.backgroundColor = demo_div.style.backgroundColor;
        	}
        		color_toggle = !color_toggle;
        		color_toggle_input.value = "font color";
			} else {
       		for(let k = 0; k < tds.length; k++) {
					tds[k].style.color = demo_div.style.backgroundColor;
        		}
        		color_toggle = !color_toggle;
        		color_toggle_input.value = "background color";
			}
		});
	}
</script>

###### Buttons

A few general guiding principals on buttons. They should be:

- reactive, give feedback when pressed
- obviously buttons, you can't miss 'em or mistake 'em
- limited, lets make this usable in as few clicks as possible
- descriptive in design, i.e. use of icons & colors to add meaning to a button's function
- and rounded, of course


### State Management





