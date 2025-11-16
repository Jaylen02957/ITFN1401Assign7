function showLastModified() {
var latestDate = new Date(document.lastModified)
document.getElementById("last-modified").innerHTML = "Last modified: " + latestDate;
}