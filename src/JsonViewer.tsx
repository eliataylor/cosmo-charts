import React from 'react';
import {Box} from '@mui/material';

interface Props {
    apiData: object;
    graphType: string;
}

const JsonViewer: React.FC<Props> = ({ apiData }) => {
    return (
        <Box border={1} borderColor="primary.main" borderRadius={1} p={2} mt={2}>
            <pre>{JSON.stringify(apiData, null, 2)}</pre>
        </Box>
    );
};

export default JsonViewer;
