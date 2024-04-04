import React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

interface ChartOption {
    title: string;
    desc: string;
    machine_name: string;
}

const chartOptions: ChartOption[] = [
    {
        "title": "Line Chart",
        "desc": "Displays data points connected by straight line segments.",
        "machine_name": "line_chart"
    },
    {
        "title": "Bar Chart",
        "desc": "Represents data with rectangular bars of varying heights or lengths.",
        "machine_name": "bar_chart"
    },
    {
        "title": "Pie Chart",
        "desc": "A circular statistical graphic divided into slices to illustrate numerical proportion.",
        "machine_name": "pie_chart"
    },
    {
        "title": "Scatter Plot",
        "desc": "Displays data points as individual markers in a coordinate system.",
        "machine_name": "scatter_plot"
    },
    {
        "title": "Area Chart",
        "desc": "Similar to a line chart but with the area below the line filled with color.",
        "machine_name": "area_chart"
    },
    {
        "title": "Histogram",
        "desc": "A graphical display of data using bars of different heights to represent the frequency distribution of numerical data.",
        "machine_name": "histogram"
    },
    {
        "title": "Heatmap",
        "desc": "A graphical representation of data where values are represented as colors on a matrix.",
        "machine_name": "heatmap"
    },
    {
        "title": "Bubble Chart",
        "desc": "Similar to a scatter plot but with markers varying in size to represent additional dimensions of data.",
        "machine_name": "bubble_chart"
    },
    {
        "title": "Polar Chart",
        "desc": "Represents data in a circular graph, often used for displaying cyclical data such as time.",
        "machine_name": "polar_chart"
    },
    {
        "title": "3D Surface Plot",
        "desc": "Displays a mathematical function of two variables over a rectangular grid as a 3D surface.",
        "machine_name": "3d_surface_plot"
    },
    {
        "title": "Streamgraph",
        "desc": "A type of stacked area graph that is displaced around a central axis, representing change over time.",
        "machine_name": "streamgraph"
    },
    {
        "title": "Radar Chart",
        "desc": "Displays multivariate data in the form of a two-dimensional chart with three or more quantitative variables represented on axes starting from the same point.",
        "machine_name": "radar_chart"
    }
];

interface ChartSelectFieldProps {
    value: string;
    onSelect: (value: string) => void;
}

const GraphType: React.FC<ChartSelectFieldProps> = ({value, onSelect}) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSelect(event.target.value);
    };

    return (
        <TextField
            select
            label="Select Chart Type"
            defaultValue={value}
            onChange={handleChange}
            fullWidth
        >
            {chartOptions.map((option) => (
                <MenuItem key={option.machine_name} value={option.machine_name}>
                    {option.title}
                </MenuItem>
            ))}
        </TextField>
    );
};

export default GraphType;
