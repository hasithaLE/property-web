import { useParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import properties from "../properties.json";
import './PropertyDetails.css';

function PropertyDetails() {
  const { id } = useParams();  // Get the property ID from the URL
  const property = properties.find((prop) => (prop.id) == id);

  if (!property) {
    return <p>Property not found!</p>;
  }

  return (
    <div className="property-page">
      <h1>{property.shortDescription}</h1>
      <img src={property.images[0]} alt={property.shortDescription} />

      <Tabs>
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Floor Plan</Tab>
          <Tab>Location</Tab>
          <Tab>Gallery</Tab>
        </TabList>

        <TabPanel>
          <h3>Overview</h3>
          <p>{property.longDescription}</p>
          <p>{property.location}</p>
          <ul>
            <li>Bedrooms: {property.bedrooms}</li>
            <li>Bathrooms: {property.bathrooms}</li>
            <li>Type: {property.type}</li>
          </ul>
        </TabPanel>
        <TabPanel>
          <h3>Floor Plan</h3>
          <img src={property.floorPlan} alt="Floor plan" />
        </TabPanel>
        <TabPanel>
          <h3>Location</h3>
          <p>{property.location}</p>
          <iframe src={`${property.map}`} width="600" height="450"></iframe>
        </TabPanel>
        <TabPanel>
          <h3>Gallery</h3>
          <div className="gallery">
            {property.images.map((image, index) => (
              <img key={index} src={image} alt={`Property image ${index + 1}`} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default PropertyDetails;
