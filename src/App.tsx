import React, { useState, useEffect } from 'react';
import { Select, MenuItem, FormControl, InputLabel, Box, SelectChangeEvent } from '@mui/material';
import JsonViewer from './JsonViewer';

interface DataItem {
    path: string;
    title: string;
}

interface Props {
    endpoints: DataItem[];
}

const App: React.FC<Props> = ({ endpoints }) => {
    const [selectedItems, setSelectedItems] = useState<DataItem[]>([]);
    const [fetchedData, setFetchedData] = useState<any[]>([]);

    const fetchData = async (path: string) => {
        try {
            const response = await fetch(path);
            const data = await response.json();
            setFetchedData(prevData => [...prevData, { path, data }]);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleSelectChange = (event: SelectChangeEvent<string[]>) => {
        const selectedPaths = event.target.value;
        const selectedItems = endpoints.filter(item => selectedPaths.includes(item.path));
        setSelectedItems(selectedItems);
    };

    useEffect(() => {
        selectedItems.forEach(item => {
            if (!fetchedData.some(data => data.path === item.path)) {
                fetchData(item.path);
            }
        });
    }, [selectedItems, fetchedData]);

    return (
        <Box m={3}>
            <FormControl fullWidth>
                <InputLabel id="select-multiple-label">Select Endpoints</InputLabel>
                <Select
                    labelId="select-multiple-label"
                    id="select-multiple"
                    multiple
                    value={selectedItems.map(item => item.path)}
                    onChange={handleSelectChange}
                    fullWidth
                >
                    {endpoints.map(item => (
                        <MenuItem key={item.path} value={item.path}>
                            {item.title}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Box mt={2}>
                {selectedItems.map(item => (
                    <JsonViewer key={item.path} jsonData={fetchedData.find(data => data.path === item.path)?.data} />
                ))}
            </Box>
        </Box>
    );
};

export default App;
