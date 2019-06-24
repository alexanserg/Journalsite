import './styles.css';
import { Entry } from './entry.js';

$(document).ready(function() {

  let entry = new Entry("title", "hello there mr computer.");
  debugger;
  $('form').submit(function(event) {
    event.preventDefault();

    let title = $("#titleInput").val();
    let body = $("#bodyInput").val();
    entry = new Entry(title, body);
  });

  $('#wordCountBtn').click(function() {
    $('#output').text(entry.wordCount());
  });
  $('#consonantCountBtn').click(function() {
    $('#output').text(entry.consonantCount());
  });
  $('#vowelCountBtn').click(function() {
    $('#output').text(entry.vowelCount());
  });
  $('#teaserBtn').click(function() {
    $('#output').text(entry.getTeaser());
  });

});
