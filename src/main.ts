/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;

var zoneDBPlanet = "DBPlanetZone";
var urlDBPlanet = "https://db-planet.deutschebahn.com/pages/dbverse/apps/content/informationen";

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)

    WA.room.onEnterLayer(zoneDBPlanet).subscribe(() => {
        currentPopup =  WA.ui.openPopup("DBPlanetPopup","DB Planet WorkAdventure",[
            {
                label: "Öffnen",
                callback: (popup => {
                    WA.nav.openTab(urlDBPlanet);
                    popup.close();
                    currentPopup = undefined;
                })
            },
            {
                label: "Schließen",
                callback: (popup => {
                    popup.close();
                    currentPopup = undefined;
                })
            }]);
    })

    WA.room.onLeaveLayer(zoneDBPlanet).subscribe(() => {
        closePopup()
    })

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

function closePopup(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

export {};
