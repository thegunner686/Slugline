# Slugline V1
Authored by Gunner Spencer

## Links
[Content for V1](https://docs.google.com/document/d/1MUhHoE5jwlbeYg-wtj-3ZHxUFZ-0TXRXjaLWAY1FJm4/edit?usp=sharing)

[Figma V1 hi-fi](https://www.figma.com/file/hOt8GwrUxDMOQ7WiMDrU2O/hi-fi?node-id=0%3A1)

## Structure

<table>
<th>Codebase</th>
<th>Description</th>
<tr>
	<td><a href="https://github.com/thegunner686/Slugline/tree/staging/redwood">redwood</a></td>
	<td>React Native App</td>
</tr>
<tr>
	<td><a href="https://github.com/thegunner686/Slugline/tree/staging/lodgepole">lodgepole</a></td>
	<td>Firebase Functions (Typescript)</td>
</tr>
<tr>
	<td><a href="https://github.com/thegunner686/Slugline/tree/staging/ponderosa">ponderosa</a></td>
	<td>Private Communication Dashboard</td>
</tr>
</table>

## Branches

#### Staging
Testing, new features, etc... Push to this.

#### Prod
Deployed Slugline architecture. Don't touch!

## Project Stakeholders

<ul>
	<li>
	Shivika Sivakumar - SUA President
	</li>
	<li>
	Sydney Eliot - Chief of Staff to SUA President
	</li>
</ul>

## History & Purpose

Slugline is a play on the name Helpline, the H in the CHANGE platform of SUA President Shivika Sivakumar. This will serve as a personal guide to UC Santa Cruz, the go-to place for students to get their questions answered about anything on campus. 

## Timeline, Milestones, & Deployment

<table>
	<th>Spring 2021</th>
	<th>Slugline V1</th>
	<tr>
		<td>Week 1</td>
		<td>
			<ul>
				<li>Initial Design Document & Timeline</li>
			</ul>
		</td>
	</tr>
	<tr>
		<td>Week 2</td>
		<td>
			<ul>
				<li>Migrate to bare project with <a href="https://rnfirebase.io/">RN Firebase</a></li>
				<li>Refactor <a href="https://github.com/thegunner686/UCSCHelpline">current codebase</a> into new project</li>
			</ul>
		</td>
	</tr>
		<td>Week 3</td>
		<td>
			<ul>
				<li>Transactionize database logic & migrate business logic to Firebase Functions</li>
				<li>Continue refactoring and migrating code</li>
			</ul>
		</td>
	</tr>
	<tr>
		<td><b>Pivot</b></td>
		<td>
			<b>
				Pause in development to design on <a href="https://www.figma.com/files/project/29123312/V1?fuid=944441741646389839">Figma</a>
			</b>
		</td> 
	</tr>
	<tr>
		<td>Week 4</td>
		<td>
			<ul>
				<li>Lo-fi Figma Design</li>
				<li>Hi-fi Figma Design</li>
				<li>Recalibrate timeline & strategy</li>
			</ul>
		</td>
	</tr>
		<tr>
		<td><b>Milestone</b></td>
		<td>
			Resume Development
		</td>
	</tr>
	<tr>
		<td>Week 5</td>
		<td>
			<ul>
				<li>Build out all pages and routes</li>
				<li>Create stylesheet based off of Figma design</li>
			</ul>
		</td>
	</tr>
	<tr>
		<td>Week 6</td>
		<td>
			<ul>
				<li>Make functional, connect backend</li>
			</ul>
		</td>
	</tr>
	<tr>
		<td>Week 7</td>
		<td>
			<ul>
				<li>Style, animate, transition</li>
				<li>Make user experience impeccable</li>
			</ul>
		</td>
	</tr>
	<tr>
		<td>Week 8</td>
		<td>
			<ul>

				<li>Build out scrappy dashboard to communicate with frontend users</li>
			</ul>
		</td>
	</tr>
	<tr>
		<td>Week 9</td>
		<td>
			<ul>
				<li>Continue integration, testing</li>
				<li>Security rules</li>
			</ul>
		</td>
	</tr>
	<tr>
		<td><b>Milestone</b></td>
		<td><b>
			V1 is ready for testing and iterating. Release app to Testflight for stakeholders & select SUA personnel.
		</b></td>
	</tr>
	<tr>
		<td>Week 10</td>
		<td>
			<ul>
				<li>Catch up time</li>
				<li>Iterate based off of tester feedback</li>
				<li>Android & IOS testing</li>
				<li>Market & identify on-campus summer students</li>
			</ul>
		</td>
	</tr>
	<tr>
		<td><b>Milestone</b></td>
		<td><b>Release Slugline V1 to Android & IOS</b></td>
	</tr>
</table>

## Looking Ahead

### Summer 2021
- Collect as much user interaction data as possible
- Collect bug reports, monitor app for reliability
- Collect user testimonies, talk to users about their experience
- Aggregate searches, find similar search clusters
- Identify abstractions from common use-cases to simplify codebase and UX
- Identify features list and pivots for Slugline V2
- Update app *as needed* for V1.x
- End of summer rampup of app marketing and outreach (frosh & first-time on campus)


### Fall 2021
- Launch V1.x for wider UCSC student base
- Begin work on Slugline V2
- ML response system
- Peer to peer audio-only communication (WebRTC)
- Canary system (on-campus safety)
- Other features TBD


## Pricing
##### IOS Development License
$100/year

##### Google Play Store License
$25 one-time

##### Firebase Cloud Resources
Not expecting this project to exceed the monthly free tier for [Google Firebase](https://firebase.google.com/pricing#blaze-calculator) in the year 2021.

##### Elastic Search
$20-30 / Month

[https://www.elastic.co/pricing/](https://www.elastic.co/pricing/)

TODO: Worst-case-pricing scenario.