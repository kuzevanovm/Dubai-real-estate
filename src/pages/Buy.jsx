import React from "react";
import PropertyCard from "../Components/PropertyCard";
import "../App.css";
import property1 from '../images/property1.png'
import property2 from '../images/property2.png'
import property3 from '../images/property3.png'
import property4 from '../images/property4.png'
import property5 from '../images/property5.png'
import property6 from '../images/property6.png'
import property7 from '../images/property7.png'
import property8 from '../images/property8.png'
import property9 from '../images/property9.png'
import Footer from "../Components/Footer";

function Buy() {
    return (
        <div className="buy-page">
            <h1>Buy</h1>
            <div className="property-container">
            <div className="property-grid">
                <PropertyCard
                    image={property1}
                    title={'Commercial property in Abu Dhabi'}
                    description={'In Dubai, the final statistics of all transactions related to real estate for the first quarter has been confirmed ...'}
                    linkText={'Learn more >'}
                />
                <PropertyCard
                    image={property2}
                    title={'Commercial property in Abu Dhabi'}
                    description={'In Dubai, the final statistics of all transactions related to real estate for the first quarter has been confirmed ...'}
                    linkText={'Learn more >'}
                />
                <PropertyCard
                    image={property3}
                    title={'Commercial property in Abu Dhabi'}
                    description={'In Dubai, the final statistics of all transactions related to real estate for the first quarter has been confirmed ...'}
                    linkText={'Learn more >'}
                />
                <PropertyCard
                    image={property4}
                    title={'Commercial property in Abu Dhabi'}
                    description={'In Dubai, the final statistics of all transactions related to real estate for the first quarter has been confirmed ...'}
                    linkText={'Learn more >'}
                />
                <PropertyCard
                    image={property5}
                    title={'Commercial property in Abu Dhabi'}
                    description={'In Dubai, the final statistics of all transactions related to real estate for the first quarter has been confirmed ...'}
                    linkText={'Learn more >'}
                />
                <PropertyCard
                    image={property6}
                    title={'Commercial property in Abu Dhabi'}
                    description={'In Dubai, the final statistics of all transactions related to real estate for the first quarter has been confirmed ...'}
                    linkText={'Learn more >'}
                />
                <PropertyCard
                    image={property7}
                    title={'Commercial property in Abu Dhabi'}
                    description={'In Dubai, the final statistics of all transactions related to real estate for the first quarter has been confirmed ...'}
                    linkText={'Learn more >'}
                />
                <PropertyCard
                    image={property8}
                    title={'Commercial property in Abu Dhabi'}
                    description={'In Dubai, the final statistics of all transactions related to real estate for the first quarter has been confirmed ...'}
                    linkText={'Learn more >'}
                />
                <PropertyCard
                    image={property9}
                    title={'Commercial property in Abu Dhabi'}
                    description={'In Dubai, the final statistics of all transactions related to real estate for the first quarter has been confirmed ...'}
                    linkText={'Learn more >'}
                />
            </div>
        </div>
        <Footer />
    </div >
  );
}

export default Buy;
