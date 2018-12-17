import React from 'react'
import RecordPreview from '../RecordPreview/RecordPreview'

const recordList = ({records}) => (
    <div>
        {records.map(record => (
            <div style={{display:'flex', alignItems:'center'}} key={record._id}>
                <RecordPreview record={record}/>
                <div> time: {record.stopTimestamp - record.startTimestamp} sec</div> 
            </div>
        ))}
    </div>
)

export default recordList