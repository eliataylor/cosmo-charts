import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


export const ENDPOINTS = [
    {
        "path": "/graphql/DashboardLastStixDomainObjectsQuery.json",
        "machine_name": "DashboardLastStixDomainObjectsQuery",
        "title": "Dashboard Last Stix Domain Objects Query",
        "graph_types": ["area_chart", "line_chart", "scatter_plot", "histogram", "pie_chart"]
    },
    {
        "path": "/graphql/DashboardStixCyberObservablesDistributionQuery.json",
        "machine_name": "DashboardStixCyberObservablesDistributionQuery",
        "title": "Dashboard Stix Cyber Observables Distribution Query",
        "graph_types": ["bar_chart", "histogram", "pie_chart", "heatmap"]
    },
    {
        "path": "/graphql/DashboardStixDomainObjectsTimeSeriesQuery.json",
        "machine_name": "DashboardStixDomainObjectsTimeSeriesQuery",
        "title": "Dashboard Stix Domain Objects Time Series Query",
        "graph_types": ["line_chart", "scatter_plot", "area_chart", "histogram"]
    },
    {
        "path": "/graphql/DashboardStixMetaRelationshipsDistributionQuery.json",
        "machine_name": "DashboardStixMetaRelationshipsDistributionQuery",
        "title": "Dashboard Stix Meta Relationships Distribution Query",
        "graph_types": ["scatter_plot", "line_chart", "bar_chart", "area_chart"]
    },
    {
        "path": "/graphql/EntityStixCoreRelationshipsDonutStixCoreRelationshipDistributionQuery.json",
        "machine_name": "EntityStixCoreRelationshipsDonutStixCoreRelationshipDistributionQuery",
        "title": "Entity Stix Core Relationships Donut Stix Core Relationship Distribution Query",
        "graph_types": ["pie_chart", "bar_chart", "scatter_plot", "heatmap"]
    },
    {
        "path": "/graphql/EntityStixCoreRelationshipsTimelineStixCoreRelationshipQuery.json",
        "machine_name": "EntityStixCoreRelationshipsTimelineStixCoreRelationshipQuery",
        "title": "Entity Stix Core Relationships Timeline Stix Core Relationship Query",
        "graph_types": ["line_chart", "scatter_plot", "area_chart", "histogram"]
    },
    {
        "path": "/graphql/GlobalVictimologyMapStixCoreRelationshipsDistributionQuery.json",
        "machine_name": "GlobalVictimologyMapStixCoreRelationshipsDistributionQuery",
        "title": "Global Victimology Map Stix Core Relationships Distribution Query",
        "graph_types": ["heatmap", "pie_chart", "bar_chart", "scatter_plot"]
    },
    {
        "path": "/graphql/StixCoreRelationshipsDonutDistributionQuery.json",
        "machine_name": "StixCoreRelationshipsDonutDistributionQuery",
        "title": "Stix Core Relationships Donut Distribution Query",
        "graph_types": ["pie_chart", "bar_chart", "scatter_plot", "heatmap"]
    },
    {
        "path": "/graphql/StixCoreRelationshipsHorizontalBarsDistributionQuery.json",
        "machine_name": "StixCoreRelationshipsHorizontalBarsDistributionQuery",
        "title": "Stix Core Relationships Horizontal Bars Distribution Query",
        "graph_types": ["bar_chart", "histogram", "pie_chart", "heatmap"]
    },
    {
        "path": "/graphql/StixDomainObjectsListQuery-Report.json",
        "machine_name": "StixDomainObjectsListQuery-Report",
        "title": "Stix Domain Objects List Query - Report",
        "graph_types": ["histogram", "bar_chart", "line_chart", "scatter_plot"]
    }
]






root.render(
  <React.StrictMode>
    <App endpoints={ENDPOINTS}  />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
