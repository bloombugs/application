import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '../../api/TasksCollection';
import { Locations } from '../../api/Locations';
import { BirdReport } from '../../api/report/BirdReport';
import { SealReport } from '../../api/report/SealReport';
import { TurtleReport } from '../../api/report/TurtleReport';
import { DistressReport } from '../../api/report/DistressReport';

/* eslint-disable no-console */

// Initialize the database with a default data document.
function addBird(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  BirdReport.collection.insert(data);
}
function addSeal(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  SealReport.collection.insert(data);
}
function addTurtle(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  TurtleReport.collection.insert(data);
}
function addDistress(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  DistressReport.collection.insert(data);
}
/*
function insertDistress({ date, time, name, phone, animal, location, latitude,
  longitude, description, image, owner }) {
  DistressReport.collection.insert({ data: date, time, name, phone, animal, location, latitude,
    longitude, description, image, owner });
}
*/

// Initialize the ReportsCollection if empty.

if (BirdReport.collection.find().count() === 0) {
  if (Meteor.settings.defaultBird) {
    console.log('Creating default data.');
    Meteor.settings.defaultBird.map(data => addBird(data));
  }
}
if (SealReport.collection.find().count() === 0) {
  if (Meteor.settings.defaultSeal) {
    console.log('Creating default data.');
    Meteor.settings.defaultSeal.map(data => addSeal(data));
  }
}
if (DistressReport.collection.find().count() === 0) {
  if (Meteor.settings.defaultDistress) {
    console.log('Creating default data.');
    // Meteor.settings.defaultDistress.map(data => insertDistress(data));
    Meteor.settings.defaultDistress.map(data => addDistress(data));
  }
}
if (TurtleReport.collection.find().count() === 0) {
  if (Meteor.settings.defaultTurtle) {
    console.log('Creating default data.');
    Meteor.settings.defaultTurtle.map(data => addTurtle(data));
  }
}
TasksCollection.find();
Locations.collection.find();
