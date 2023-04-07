class CDU_CMS_Test_Inst_EIS_Menu {
    static ShowPage(mcdu, eisIndex) {
        mcdu.clearDisplay();
        SimVar.SetSimVarValue(`L:A32NX_DMC_DISPLAYTEST:${eisIndex}`, "Enum", 1);
        const title = "EIS ( DMC " + eisIndex + " )";
        mcdu.setTemplate([
            [title],
            ["LAST LEG[color]inop", "CLASS 3[color]inop"],
            ["<REPORT[color]inop", "FAULTS>[color]inop"],
            ["PREVIOUS LEGS[color]inop"],
            ["<REPORT[color]inop", "TEST>"],
            [""],
            ["<LRU IDENT[color]inop"],
            [""],
            ["<GND SCANNING[color]inop"],
            ["TROUBLE SHOOT[color]inop", "GROUND[color]inop"],
            ["<DATA[color]inop", "REPORT>[color]inop"],
            [""],
            ["<RETURN[color]cyan"]
        ]);

        mcdu.onUnload = () => SimVar.SetSimVarValue(`L:A32NX_DMC_DISPLAYTEST:${eisIndex}`, "Enum", 0);

        mcdu.leftInputDelay[5] = () => {
            return mcdu.getDelaySwitchPage();
        };
        mcdu.onLeftInput[5] = () => {
            CDU_CMS_Test_Inst.ShowPage(mcdu);
        };
        mcdu.rightInputDelay[3] = () => {
            return mcdu.getDelaySwitchPage();
        };
        mcdu.onRightInput[3] = () => {
            CDU_CMS_Test_Inst_EIS_Tests.ShowPage(mcdu, eisIndex);
        };
    }
}
