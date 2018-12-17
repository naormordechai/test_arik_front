import React from 'react'

const recordPreview = ({ record }) => (
    <audio src={record.src} controls={true} autoPlay={false}></audio>
)

export default recordPreview