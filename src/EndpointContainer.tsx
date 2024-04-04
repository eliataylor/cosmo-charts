import React, {useState} from 'react';
import {Box} from '@mui/material';
import JsonViewer from "./JsonViewer";
import GraphType from "./GraphType";

interface Props {
    apiData: any;
    graph_type:string
}

const EndpointContainer: React.FC<Props> = ({ apiData, graph_type }) => {
    const [selectedChart, setSelectedChart] = useState<string>(graph_type);

    const handleChange = (value: string) => {
        setSelectedChart(value);
    };

    return (
        <Box border={1} borderColor="primary.main" borderRadius={1} p={1} mt={4}>
            <GraphType value={graph_type} onSelect={handleChange} />
            <JsonViewer apiData={apiData} graphType={selectedChart} />
        </Box>
    );
};

export default EndpointContainer;
