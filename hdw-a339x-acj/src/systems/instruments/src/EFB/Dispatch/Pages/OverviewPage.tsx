import React, { FC } from 'react';
import { IconPlane } from '@tabler/icons';
import { Box, LightningFill, PeopleFill, Rulers, Speedometer2 } from 'react-bootstrap-icons';
import { useSimVar } from '@instruments/common/simVars';
import { Units } from '@shared/units';
import { t } from '../../translation';
import { NoseOutline } from '../../Assets/NoseOutline';

interface InformationEntryProps {
    title: string;
    info: string;
}

const InformationEntry: FC<InformationEntryProps> = ({ children, title, info }) => (
    <div>
        <div className="flex flex-row items-center space-x-4 text-theme-highlight">
            {children}
            <p className="whitespace-nowrap">{title}</p>
        </div>
        <p className="font-bold">{info}</p>
    </div>
);

export const OverviewPage = () => {
    let [airline] = useSimVar('ATC AIRLINE', 'String', 1_000);

    airline ||= 'HEADWIND';
    const [actualGrossWeight] = useSimVar('TOTAL WEIGHT', 'kilograms', 5_000);

    const getConvertedInfo = (metricValue: number, unitType: 'weight' |'volume' |'distance') => {
        const numberWithCommas = (x: number) => x.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        switch (unitType) {
            case 'weight':
                return `${numberWithCommas(Units.kilogramToUser(metricValue))} [${Units.userWeightSuffixEis2}]`;
            case 'volume':
                return `${numberWithCommas(Units.litreToUser(metricValue))} [${Units.userVolumeSuffixEis2}]`;
            case 'distance':
                return `${numberWithCommas(metricValue)} [nm]`;
            default: throw new Error('Invalid unit type');
        }
    };

    return (
        <div className="overflow-hidden p-6 mr-3 w-full rounded-lg border-2 h-content-section-reduced border-theme-accent">
            <h1 className="font-bold">Airbus ACJ330neo (A330-941)</h1>
            <p>{airline}</p>

            <div className="flex justify-center items-center mt-6">
                <NoseOutline className="w-full flip-horizontal" />
            </div>

            <div className="flex flex-row mt-8 space-x-16">
                <div className="flex flex-col space-y-8">
                    <InformationEntry title={t('Dispatch.Overview.Model')} info="A330-941 [A339]">
                        <IconPlane className="fill-current" size={23} stroke={1.5} strokeLinejoin="miter" />
                    </InformationEntry>

                    <InformationEntry title={t('Dispatch.Overview.MZFW')} info={getConvertedInfo(181000, 'weight')}>
                        <Box size={23} />
                    </InformationEntry>

                    <InformationEntry title={t('Dispatch.Overview.MaximumPassengers')} info="90 passengers">
                        <PeopleFill size={23} />
                    </InformationEntry>
                </div>
                <div className="flex flex-col space-y-8">
                    <InformationEntry title={t('Dispatch.Overview.Engines')} info="Rolls-Royce Trent 7000">
                        <LightningFill size={23} />
                    </InformationEntry>

                    <InformationEntry title={t('Dispatch.Overview.MTOW')} info={getConvertedInfo(251000, 'weight')}>
                        <Box size={23} />
                    </InformationEntry>
                </div>
                <div className="flex flex-col space-y-8">
                    <InformationEntry title={t('Dispatch.Overview.Range')} info={getConvertedInfo(9900, 'distance')}>
                        <Rulers size={23} />
                    </InformationEntry>

                    <InformationEntry title={t('Dispatch.Overview.MaximumCargo')} info={getConvertedInfo(44836, 'weight')}>
                        <Box size={23} />
                    </InformationEntry>
                </div>
                <div className="flex flex-col space-y-8">

                    <InformationEntry title={t('Dispatch.Overview.MMO')} info="0.86">
                        <Speedometer2 size={23} />
                    </InformationEntry>

                    <InformationEntry title={t('Dispatch.Overview.MaximumFuelCapacity')} info={getConvertedInfo(139090, 'volume')}>
                        <Box size={23} />
                    </InformationEntry>

                    <InformationEntry title={t('Dispatch.Overview.ActualGW')} info={getConvertedInfo(actualGrossWeight, 'weight')}>
                        <Box size={23} />
                    </InformationEntry>
                </div>
            </div>
        </div>
    );
};
