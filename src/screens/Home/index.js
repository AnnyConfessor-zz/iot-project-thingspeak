import React, { useEffect, useState } from 'react'

import { updateLedStatus, getLedStatus } from 'services/thingspeak'

import Image from 'components/Image'

const INITIAL_STATE = 0

const Home = () => {
    const [status, setStatus] = useState(INITIAL_STATE)

    useEffect(() => {
        readStatus()
    }, [])

    const readStatus = async () => {
        const res = await getLedStatus()
        const currentStatus = parseInt(res.feeds[0].field1)

        setStatus(currentStatus)
    }

    const handleStatus = async () => {
        const newStatus = status ? 0 : 1

        try {
            await updateLedStatus(newStatus)
            setStatus(newStatus)
        } catch (err) {
            throw new Error(err)
        }
    }

    return (
        <div>
            <Image name={!!status ? 'lamp-on' : 'lamp-off'} onClick={handleStatus} />
        </div>
    )
}

export default Home