import { createHelia } from 'helia';
import React, { useState, useEffect } from 'react';

const IpfsComponent = () => {
    const [id, setId] = useState(null);
    const [helia, setHelia] = useState(null);
    const [isOnline, setIsOnline] = useState(false);

    useEffect(() => {
        const init = async () => {
            try {
                if (!helia && typeof window !== 'undefined') {
                    const heliaNode = await createHelia();
                    const nodeId = heliaNode.libp2p.peerId.toString();
                    const nodeIsOnline = heliaNode.libp2p.status === 'started';

                    setHelia(heliaNode);
                    setId(nodeId);
                    setIsOnline(nodeIsOnline);
                }
            } catch (error) {
                console.error('Failed to initialize Helia:', error);
            }
        };

        init();
    }, [helia]);

    if (!helia || !id) {
        return <h4>Starting Helia...</h4>;
    }

    return (
        <div>
            <h4 data-test="id">ID: {id}</h4>
            <h4 data-test="status">Status: {isOnline ? 'Online' : 'Offline'}</h4>
        </div>
    );
};

export default IpfsComponent;
