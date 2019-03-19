var chart, x, y;
var margin = {top: 20, right: 20, bottom: 40, left: 60};
var height = 300-margin.top-margin.bottom;
var width = 500-margin.left-margin.right;
//DEFINE YOUR VARIABLES UP HERE

//Gets called when the page is loaded.
function init(){
	chart = d3.select('#vis').append('svg');
	vis = chart.append('g')
			.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
	
	// ADD ANY NECESSARY ATTRIBUTES TO SVG ELEMENT
	
	//PUT YOUR INIT CODE BELOW (IF NEEDED)
	
}

//Called when the update button is clicked
function updateClicked(){
	d3.csv('data/GradAdmissionsData.csv').then(function(data){update(data)});
}

//Callback for when data is loaded
function update(rawdata){
	//PUT YOUR UPDATE CODE TO CREATE OR UPDATE VISUALIZATION BELOW

}

// Returns the selected option in the X-axis dropdown.
function getXAttribute(){
	var node = d3.select('#attr_X').node();
	return node[node.selectedIndex].getAttribute('val');
}

// Returns the selected option in the X-axis dropdown. 
function getYAttribute(){
	var node = d3.select('#attr_Y').node();
	return node[node.selectedIndex].getAttribute('val');
}
