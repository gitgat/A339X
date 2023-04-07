class CDU_CMS_Test_Fuel_FCMC_Menu {
    static ShowPage(mcdu, cpcIndex) {
        mcdu.clearDisplay();
        const title = "FCMC" + cpcIndex;
        mcdu.setTemplate([
            [title],
            ["LAST LEG[color]inop", "CLASS 3[color]inop"],
            ["<REPORT[color]inop", "FAULTS>[color]inop"],
            ["PREVIOUS LEGS[color]inop", "SYSTEM"],
            ["<REPORT[color]inop", "TESTS>[color]inop"],
            ["", "FUEL VALVE"],
            ["<LRU IDENT[color]inop", "TEST>[color]inop"],
            ["", "LEVEL SENSE"],
            ["", "TEST>[color]inop"],
            ["TROUBLE SHOOT[color]inop", "GROUND[color]inop"],
            ["<DATA[color]inop", "REPORT>[color]inop"],
            ["", "INPUT"],
            ["<RETURN[color]cyan", "PARAMETERS>[color]inop"]
        ]);

        mcdu.leftInputDelay[5] = () => {
            return mcdu.getDelaySwitchPage();
        };
        mcdu.onLeftInput[5] = () => {
            CDU_CMS_Test_Fuel_Menu.ShowPage(mcdu);
        };
    }
}
