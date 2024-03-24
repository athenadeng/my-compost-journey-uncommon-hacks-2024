import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';

    const whycompost: React.FC = () => {
      return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
          <ul>
            <li><b>Waste Reduction:</b> Composting helps divert organic waste from landfills, reducing methane production and landfill use.</li>
            <li><b>Soil Health Improvement:</b> Compost enriches the soil, improves its structure, and helps retain moisture and nutrients.</li>
            <li><b>Water Conservation:</b> Compost aids in soil moisture retention, reducing the need for frequent watering and improving drought resistance.</li>
            <li><b>Reduction of Greenhouse Gases:</b> Composting reduces methane emissions from landfills and helps in carbon sequestration.</li>
            <li><b>Economic Benefits:</b> Composting can save money on waste disposal and reduce the need for chemical fertilizers.</li>
            <li><b>Promotion of Biodiversity:</b> Compost supports a range of beneficial organisms in the soil, enhancing biodiversity.</li>
            <li><b>Educational Value:</b> Composting offers valuable lessons about ecology, biology, and sustainability.</li>
            <li><b>Resource Recovery:</b> Composting transforms organic waste into a valuable resource, enhancing soil and plant health.</li>
          </ul>
        </div>
      );
    };
    
    export default whycompost;
