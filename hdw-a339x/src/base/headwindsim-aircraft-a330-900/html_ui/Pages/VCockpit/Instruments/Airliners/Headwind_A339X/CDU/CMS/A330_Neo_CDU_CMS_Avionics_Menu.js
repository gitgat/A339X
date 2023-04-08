class CDU_CMS_AvionicsMenu {
    static ShowPage(mcdu) {
        mcdu.clearDisplay();
        mcdu.setTemplate([
            ["AVIONICS STATUS", "1", "2"],
            [""],
            ["VHF 3"],
            [""],
            ["FCDC 1"],
            [""],
            ["DMU"],
            [""],
            ["LGCIU 2"],
            [""],
            ["TPIU"],
            [""],
            ["<RETURN[color]cyan", "PAGE PRINT*[color]inop"]
        ]);

        mcdu.leftInputDelay[5] = () => {
            return mcdu.getDelaySwitchPage();
        };

        mcdu.onLeftInput[5] = () => {
            CDU_CMS_MenuPage.ShowPage(mcdu);
        };

        // PAGE SWITCHING
        mcdu.onUp = () => {
            this.ShowPage2(mcdu);
        };
        mcdu.onDown = () => {
            this.ShowPage2(mcdu);
        };
    }

    static ShowPage2(mcdu) {
        mcdu.clearDisplay();
        mcdu.setTemplate([
            ["AVIONICS STATUS", "2", "2"],
            [""],
            ["ADIRU3"],
            [""],
            ["SFCC1"],
            [""],
            [""],
            [""],
            [""],
            [""],
            [""],
            [""],
            ["<RETURN[color]cyan", " PAGE PRINT*[color]inop"]
        ]);

        mcdu.leftInputDelay[5] = () => {
            return mcdu.getDelaySwitchPage();
        };

        mcdu.onLeftInput[5] = () => {
            CDU_CMS_MenuPage.ShowPage(mcdu);
        };

        // PAGE SWITCHING
        mcdu.onUp = () => {
            this.ShowPage(mcdu);
        };
        mcdu.onDown = () => {
            this.ShowPage(mcdu);
        };
    }
}
