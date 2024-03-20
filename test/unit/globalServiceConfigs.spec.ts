import * as globalServicePortMappings from '../../configs/globalServicePortMappings.json';

interface ServicePorts {
    http: number;
    https: number;
}

function getServicePorts(serviceName: string, env: string): ServicePorts {
    return globalServicePortMappings.hasOwnProperty(serviceName) && (globalServicePortMappings as any)[serviceName].hasOwnProperty(env) ? (globalServicePortMappings as any)[serviceName][env] : ({ http: -1, https: -1 } as ServicePorts);
}

describe('globalServiceConfigs', () => {
    describe('getServicePorts', () => {
        it('for skeletonizer getServicePorts for development should return 5000 and 3000', () => {
            const servicePorts = getServicePorts('skeletonizer', 'development');
            expect(servicePorts).toEqual({ http: 5000, https: 3000 });
        });

        it('for character-trainer service developement should return 5001 and 3001', () => {
            const servicePorts = getServicePorts('character-trainer', 'development');
            expect(servicePorts).toEqual({ http: 5001, https: 3001 });
        });
    });
});
