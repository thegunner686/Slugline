# Slugline V1 Design
Authored by Gunner Spencer

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
				<li>Finish design document, approve timeline & pricing</li>
				<li>Figmatize & approve UI/UX design for V1</li>
				<li>Contact the <a href="https://maps.ucsc.edu">maps team</a> </li>
			</ul>
		</td>
	</tr>
	<tr>
		<td>Week 2</td>
		<td>
			<ul>
				<li>Migrate to bare project with <a href="https://rnfirebase.io/">RN Firebase</a></li>
				<li>Establish database schema</li>
				<li>Refactor <a href="https://github.com/thegunner686/UCSCHelpline">current codebase</a> into new project</li>
				<li>Transactionize database logic & migrate business logic to Firebase Functions</li>
			</ul>
		</td>
	</tr>
	<tr>
		<td><b>Milestone</b></td>
		<td><b>App does everything it can in <a href="https://github.com/thegunner686/UCSCHelpline">V0.5</a>, the code is just much nicer and more organized with clear path forward to facilitate lightspeed production</b></td>
	</tr>
	<tr>
		<td>Week 3</td>
		<td>
			<ul>
				<li>Begin work on SL (Student Leader) routes</li>
				<li>Auth roles & permissions</li>
				<li>In-app intent resolution messaging</li>
			</ul>
		</td>
	</tr>
	<tr>
		<td>Week 4</td>
		<td>
			<ul>
				<li>Complete SL routes</li>
				<li>Auth rules testing</li>
				<li>Data security & user anonymity</li>
			</ul>
		</td>
	</tr>
	<tr>
		<td><b>Milestone</b></td>
		<td>
			<b>
				In-App text communication between SLs and students is functional with proper data security and anonymity practices in place.
			</b>
		</td> 
	</tr>
	<tr>
		<td>Week 5</td>
		<td>
			<ul>
				<li>Begin work on custom in-app map using ucsc maps API*</li>
				<li>Persisted location pinning (residence, personal points of interest, friends, clubs, classes, etc...)</li>
			</ul>
			*This is predicated upon gaining access to the API
		</td>
	</tr>
	<tr>
		<td>Week 6</td>
		<td>
			<ul>
				<li>Interactive real-time SL pinning on students' map</li>
				<li>Common location indexing & pinning / search</li>
			</ul>
		</td>
	</tr>
	<tr>
		<td><b>Milestone</b></td>
		<td>
			<b>
				Full navigation intent operability, map customizability, SL interaction via maps. At this point, app could launch.
			</b>
		</td>
	</tr>
	<tr>
		<td>Week 7</td>
		<td>
			<ul>
				<li>Intent aggregation & search indexing</li>
				<li>Linking intent resolutions with proper support services as indicated</li>
			</ul>
		</td>
	</tr>
	<tr>
		<td>Week 8</td>
		<td>
			<ul>
				<li>Improve settings & onboarding flows</li>
				<li>Add in-app bug-report capabilities</li>
				<li>Shore up excess API & database calls, reduce load times</li>
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
		<td>Week 9</td>
		<td>
			<ul>
				<li>Catch-up time</li>
				<li>Iterate based off of tester feedback</li>
				<li>Android & IOS testing</li>
				<li>Begin marketing & initial on-campus summer student selection</li>
			</ul>
		</td>
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
Not expecting this project to exceed the monthly free tier for [Google Firebase](https://firebase.google.com/pricing#blaze-calculator) in the year 2021.

