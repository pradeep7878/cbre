import React, { useContext } from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import CommonContext from './CommonContext';
import { models } from "powerbi-client";


const PowerBIDiveDeepReports = () => {

    const {diveDeepData} = useContext(CommonContext);
    

    return (
        <PowerBIEmbed
            embedConfig={{
                type: 'report',   // Supported types: report, dashboard, tile, visual, qna, paginated report and create
                id: diveDeepData.id,
                embedUrl: diveDeepData.embedUrl,
                accessToken: localStorage.getItem("diveDeepToken"),
                tokenType: models.TokenType.Embed, // Use models.TokenType.Aad for SaaS embed
                settings: {
                    panes: {
                        filters: {
                            expanded: false,
                            visible: false
                        }
                    },
                    background: models.BackgroundType.Transparent,
                }
            }}

            // eventHandlers={
            //     new Map([
            //         ['loaded', function () { console.log('Report loaded'); }],
            //         ['rendered', function () { console.log('Report rendered'); }],
            //         ['error', function (event) { console.log(event.detail); }],
            //         ['visualClicked', () => console.log('visual clicked')],
            //         ['pageChanged', (event) => console.log(event)],
            //     ])
            // }

            cssClassName={"reportClass h-100"}

            getEmbeddedComponent={(embeddedReport) => {
                window.report = embeddedReport;
            }}
        />
    )
}

export default PowerBIDiveDeepReports
