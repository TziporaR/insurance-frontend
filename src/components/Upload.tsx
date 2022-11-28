import { Button } from '@mui/material';
import Papa from 'papaparse';
import React, {
    useCallback,
    useState,
} from 'react';
import { useDispatch } from 'react-redux';
import { saveCustomerPolicies } from '../actions/policiesActions';

export const Upload = () => {
    const [parsedData, setParsedData] = useState([]);
    const dispatch = useDispatch();
    const handleSave = useCallback(() => {
        dispatch(saveCustomerPolicies.request(parsedData));
    }, [dispatch, parsedData])
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files == null || event.target.files[0] == null) {
            //TODO error handling
        } else {
            Papa.parse(event.target.files[0], {
                header: true,
                skipEmptyLines: true,
                complete: function (results) {
                    const rowsArray = [];
                    const valuesArray = [];

                    // Iterating data to get column name and their values
                    // eslint-disable-next-line array-callback-return
                    results.data.map((d) => {
                        rowsArray.push(Object.keys(d as any));
                        valuesArray.push(Object.values(d as any));
                    });

                    // Parsed Data Response in array format
                    setParsedData(results.data as any);
                },
            })
        }
    };
    return (
        <>
            <input
                type='file'
                name='file'
                onChange={changeHandler}
                accept='.csv'
                style={{ display: 'block', margin: '10px auto' }}
            />
            <Button variant='outlined' onClick={handleSave}>Upload policies</Button>
        </>
    );
};
