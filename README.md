# leaflet-challenge

## Background Information

The United States Geological Survey, known as USGS, plays a crucial role in providing scientific insights into natural hazards, ecosystem health, environmental conditions, and the effects of climate and land-use changes. Their dedicated scientists develop innovative methods and tools to deliver timely, pertinent, and valuable information about our planet's processes. As a new team member, you will be contributing to an exciting and impactful project.

USGS is embarking on an endeavor to create a new set of visualization tools. These tools aim to help them present their extensive earthquake data in a more meaningful way. Despite collecting a substantial volume of global data on a daily basis, they lack an effective means of displaying it. By visualizing this data, they hope to enhance public awareness, educate other government entities, and potentially secure increased support for addressing critical planetary challenges.

## Website Link


## Project Overview

* **Part 1: Crafting the Earthquake Visualization**

* **Part 2: Expanding Data Insights (Optional)**

### Part 1: Crafting the Earthquake Visualization

1. **Collect Earthquake Data:**

   * The USGS offers earthquake data in various formats, regularly updated every five minutes. [USGS GeoJSON Feed](http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php)

   * The dataset "All Earthquakes from the Past 7 Days" provides a JSON representation of this data. The URL for this JSON was utilized to fetch data for our visualization.

2. **Import and Visualize the Data:**

   * We employed Leaflet to design a map plotting all earthquakes from the dataset based on their geographical coordinates.

   * The data markers adjust in size to represent earthquake magnitude, and their color indicates depth. Larger markers signify higher magnitudes, while darker colors indicate greater depths.

   * Interactive popups furnish key details about each earthquake upon clicking a respective marker. Information includes location, magnitude, and depth.

   * A user-friendly legend accompanies the map to offer essential context for interpreting the data.

- - -

### Part 2: Expanding Data Insights

The USGS has requested an additional dataset integration to illustrate the connection between tectonic plates and seismic activity. Your task involves fetching this dataset and visualizing it alongside the original data. The tectonic plates data can be accessed from <https://github.com/fraxen/tectonicplates>.

In Part 2, the following actions were taken:

* Incorporating the tectonic plates dataset onto the map alongside the earthquake data.

* Enabling the addition of various base map options for user selection.

* Organizing the datasets into distinct overlays, permitting independent activation and deactivation.

* Implementing layer controls within the map interface.

## Resources

* [ColorBrewer](https://colorbrewer2.org/)
* [USGS GeoJSON Feed](http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php)
* [Tectonic Plates Data](https://github.com/fraxen/tectonicplates)
* Assignment 15 Instructions