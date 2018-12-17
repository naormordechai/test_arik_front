import React from 'react'
import RecordPreview from '../RecordPreview/RecordPreview'

const recordList = ({ records }) => (
    <div>
        {records.map(record => (
            <div style={{ display: 'flex', alignItems: 'center', marginBottom:'10px' }} key={record._id}>
                <RecordPreview record={record} />
                <div> time: {record.stopTimestamp - record.startTimestamp} ms |
                 creation deta: {new Date(record.startTimestamp).toDateString()}</div>
            </div>
        ))}
    </div>
)

export default recordList