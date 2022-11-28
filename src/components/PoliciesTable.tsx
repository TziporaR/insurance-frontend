import {
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
} from '@mui/material';
import React, {
    useCallback,
    useState,
} from 'react';
import {
    useDispatch,
    useSelector,
} from 'react-redux';
import { getPoliciesById } from '../actions/policiesActions';
import { RootState } from '../reducers/rootReducer';
import { Policy } from '../types';

export const PoliciesTable: React.FC = () => {
    const [selectedId, setSelectedId] = useState('');
    // @ts-ignore
    const rows: Policy[] = useSelector((state: RootState) => state.policies.policies);
    const dispatch = useDispatch();

    const handleSearch = useCallback(() => {
        dispatch(getPoliciesById.request(selectedId))
    }, [dispatch, selectedId]);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setSelectedId(event.target.value);
    }

    return (<>
        <TextField
            id='input-with-icon-text-field'
            label='Search Policy By Id'
            onChange={handleChange}
            variant='standard'
        />
        <Button onClick={handleSearch}>Search</Button>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell align='right'>Name</TableCell>
                        <TableCell align='right'>Policy Number</TableCell>
                        <TableCell align='right'>Product Number</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    {rows.map((row) => (
                        <TableRow
                            key={row.insuredId + row.policyNumber}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component='th' scope='row'>
                                {row.insuredId}
                            </TableCell>
                            <TableCell
                                align='right'>{row.insuredFirstName + ' ' + row.insuredLastName}</TableCell>

                            <TableCell align='right'>{row.policyNumber}</TableCell>
                            <TableCell align='right'>{row.productNumber}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </>);
};