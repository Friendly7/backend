import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(gongji) {
    return { gongji };
}

const rows = [
    createData('공지사항 1 내용입니다.'),
    createData('공지사항 2 내용입니다.'),
    createData('공지사항 3 내용입니다.'),
    createData('공지사항 4 내용입니다.'),
    createData('공지사항 5 내용입니다.'),
];


export default function BasicTable() {
    return (
        <div>
        <TableContainer
            component={Paper}
            sx={{ width: 620 }}
            position='left'
        >
            <Table sx={{ minWidth: 620 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>공지사항</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.gongji}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

                <TableContainer
            component={Paper}
            sx={{ width: 620 }}
            position='right'
        >
            <Table sx={{ minWidth: 620 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>공지사항</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.gongji}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
    );
}