import React, {useState} from 'react';
import {Box} from '@mui/material';
import JsonViewer from "./JsonViewer";
import GraphType from "./GraphType";

interface Props {
    apiData: any;
}

const EndpointContainer: React.FC<Props> = ({ apiData }) => {
    const [selectedChart, setSelectedChart] = useState<string>('');

    const handleChange = (value: string) => {
        setSelectedChart(value);
    };

    return (
        <Box border={1} borderColor="primary.main" borderRadius={1} p={1} mt={4}>
            <GraphType value={''} onSelect={handleChange} />
            <JsonViewer apiData={apiData} graphType={selectedChart} />
        </Box>
    );
};

export default EndpointContainer;
