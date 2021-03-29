# Slugline Architecture & Design Document
Written by Gunner Spencer for UC Santa Cruz

## Table of Contents

## Overview & Problem Description

Slugline is a play on the name Helpline, the H in the CHANGE platform of SUA President Shivika _. The idea is to build an app that will serve as a personal guide to UC Santa Cruz, to be the go-to place for students to get their questions answered about anything on campus. The original idea is a system based on three types of user-intents: Navigation, Resolve, Report. Navigation is self explanatory, this app should seamlessly and efficiently enable students to find their way around campus. Resolve is centered around students submitting questions or problems through the app to student leaders who can answer those questions. Report is essentially an upgraded version of Resolve, for issues that require more immediate attention or deliberate consideration. There are varying levels of implementation for each intent. For example, Navigation is currently implemented in the prototype as an embedded webview of maps.ucsc.edu, but with access to the API exposed in maps.ucsc.edu, a custom mapview with markers and points of interest customized by the user is ideal. For Resolve/Report, the prototype implements these as a chat system where a user can message with a student leader until their intent is resolved, but two additional features are ideal: an indexable, searchable database for Resolve intents that could provide immediate answers based off of similar questions (may be powered by machine learning), and a direct WebRTC audio feed for Report intents that could immediately connect users with a student leaer in a discord-like or clubhouse-ish audio-only chat.

The above descriptions (including these second-phase features) for the Navigate, Solve, and Report intents will form the backbone of the Slugline app. Additional features, intent types, and use-cases can be added and built on top of this structure, so it's imperative that the architecture be built for scalability based on this "intent" style data structure (more on this later).

As we enter the 2021-2022 academic year, the UC Santa Cruz campus will be faced with novel problems and concerns from the student body, which is exactly what Slugline is meant to address. Therefore, its imperative that Slugline be tested, secured, and launched prior to the freshman body entering campus. Timeline will be detailed later in this document. It's also important to keep in mind that these issues aren't unique to UC Santa Cruz, so maintaining a level of portability and abstraction for the core architecture is important in case expansion into other campuses becomes a future application of this tool.

## Project Stakeholders

## Customer Insights

## Architecture & Communication Diagram

## SluglineApp
### Technologies
<table>
<th>Name</th>
<th>Description</th>
<tr>
	<td><a href="">React Native</a></td>
	<td></td>
</tr>
</table>
### Overview
### Specs, Requirements, & Development

## SluglineService
### Technologies
### Overview
### Specs, Requirements, & Development

## Timeline, Milestones, & Deployment

