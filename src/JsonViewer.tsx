import React from 'react';
import { Box } from '@mui/material';

interface Props {
    jsonData: any;
}

const JsonViewer: React.FC<Props> = ({ jsonData }) => {
    return (
        <Box border={1} borderColor="primary.main" borderRadius={1} p={2} mt={2}>
            <pre>{JSON.stringify(jsonData, null, 2)}</pre>
        </Box>
    );
};

export default JsonViewer;
