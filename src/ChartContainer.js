import React from 'react';

interface Props {
    jsonData: any;
}

const ChartContainer: React.FC<Props> = ({ jsonData }) => {
    return (
        <div>
            <pre>{JSON.stringify(jsonData, null, 2)}</pre>
        </div>
    );
};

export default ChartContainer;
